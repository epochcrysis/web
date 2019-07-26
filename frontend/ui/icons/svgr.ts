import path from 'path'
import svgr from '@svgr/core'
import glob from 'glob-promise'
import camelcase from 'camelcase'
import fs from 'fs-extra-promise'

const TARGET_DIR = path.join(__dirname, 'src')

const svgrTemplate = (
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) => {
  const typeScriptTpl = template.smart({ plugins: ['typescript', 'prettier'] })

  return typeScriptTpl.ast`
    import React from 'react'

    export const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx}
  `
}

const read = files =>
  Promise.all(
    files.map(async iconPath => ({
      name: `${camelcase(path.basename(iconPath, path.extname(iconPath)), {
        pascalCase: true,
      })}Icon`,
      source: (await fs.readFileAsync(iconPath)).toString(),
    }))
  )

const compile = icons =>
  Promise.all(
    icons.map(async icon => ({
      name: icon.name,
      code: await svgr(
        icon.source,
        { icon: true, template: svgrTemplate },
        { componentName: icon.name }
      ),
    }))
  )

const save = async sources => {
  return Promise.all(
    sources.map(source =>
      fs.writeFileAsync(
        path.join(TARGET_DIR, `${source.name}.tsx`),
        source.code
      )
    )
  )
}

const createIndex = sources =>
  fs.writeFileAsync(
    path.join(TARGET_DIR, 'index.ts'),
    sources.map(source => `export * from './${source.name}'`).join('\n')
  )

const build = async () => {
  const files = await glob('./icons/*.svg')
  const icons = await read(files)

  const sources = await compile(icons)

  await fs.ensureDir(TARGET_DIR)

  await save(sources)
  await createIndex(sources)
}

build()
