require('@babel/register')({
  extensions: ['.js', '.ts'],

  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],

  only: [filepath => filepath.includes(__dirname)],
})
