## Размер текста
```jsx
import { Text } from '@ui/text'
import { ThemeProvider } from '@ui/theme'

;<ThemeProvider>
  <div style={{ width: '100%' }}>
      <div style={{ padding: '5px 10px' }}>
        <Text fontSize='2xl'>
          2xl
        </Text>
      </div>
      <div style={{ padding: '5px 10px' }}>
        <Text fontSize='xl'>
          xl
        </Text>
      </div>
      <div style={{ padding: '5px 10px' }}>
        <Text fontSize='l'>
          l
        </Text>
      </div>
      <div style={{ padding: '5px 10px' }}>
        <Text fontSize='m'>
          m
        </Text>
      </div>
      <div style={{ padding: '5px 10px' }}>
        <Text>
          n
        </Text>
      </div>
      <div style={{ padding: '5px 10px' }}>
        <Text fontSize='s'>
          s
        </Text>
      </div>
      <div style={{ padding: '5px 10px' }}>
        <Text fontSize='xs'>
          xs
        </Text>
      </div>
  </div>
</ThemeProvider>
```

## Толщина текста
```jsx
import { Panel } from '@admui/panel'
import { Text } from '@admui/text'
import { ThemeProvider } from '@admui/theme'

;<ThemeProvider>
  <div style={{ width: '100%' }}>
      <div style={{ padding: '5px 10px' }}>
        <Text fontSize='m' fontWeight='light'>
          light
        </Text>
      </div>
      <div style={{ padding: '5px 10px' }}>
        <Text fontSize='m' fontWeight='normal'>
          normal
        </Text>
      </div>
      <div style={{ padding: '5px 10px' }}>
        <Text fontSize='m' fontWeight='medium'>
          medium
        </Text>
      </div>
      <div style={{ padding: '5px 10px' }}>
        <Text fontSize='m' fontWeight='bold'>
          bold
        </Text>
      </div>
      <div style={{ padding: '5px 10px' }}>
        <Text fontSize='m' fontWeight='black'>
          black
        </Text>
      </div>
  </div>
</ThemeProvider>
```
