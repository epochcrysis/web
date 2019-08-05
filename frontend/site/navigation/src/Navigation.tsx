import React, { useRef } from 'react'
import { useWindowSize } from '@ui-parts/use-window-size'
import { useMenuItems } from '@common/wordpress'
import { Box, Column, Layout } from '@ui/layout'
import { useSticky } from '@ui/sticky'
import { Desktop } from './Desktop'
import { Mobile } from './Mobile'
import { Drawer } from './Drawer'

export const Navigation = ({ withTopOffset = false }) => {
  const content = useRef(null)

  const items = useMenuItems({ slug: 'root' })
  const { innerHeight } = useWindowSize()

  const { style, isSticky } = useSticky(content, {
    topOffset: withTopOffset ? innerHeight : 0,
  })

  const isStickyWithOffset = withTopOffset && !isSticky
  const background = isStickyWithOffset ? 'transparent' : 'white'
  const color = isStickyWithOffset ? 'white' : 'black'
  const offset = isStickyWithOffset ? 30 : 10

  return (
    <>
      <Box width='100%' ref={content} style={{ zIndex: 15, ...style }}>
        <Box
          width='100%'
          backgroundColor={background}
          style={{ position: 'absolute', zIndex: 15 }}
        >
          <Column>
            <Layout basis={offset} />
            <Layout>
              <Desktop items={items} color={color} />
              <Mobile items={items} color={color} />
            </Layout>
            <Layout basis={offset} />
          </Column>
        </Box>
      </Box>
      <Drawer items={items} />
    </>
  )
}
