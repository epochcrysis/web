```jsx
import { ThemeProvider } from '@admui/theme'
import { Column, Row, Layout } from '@admui/layout'

;<ThemeProvider>
  <div style={{ width: '100%', height: 250 }}>
    <Row fill>
      <Layout basis='3xl'>
        item
      </Layout>
      <Layout grow={1}>
        <Column>
          <Layout>
            item
          </Layout>
          <Layout basis='m' />
          <Layout>
            item
          </Layout>
        </Column>
      </Layout>
    </Row>
  </div>
</ThemeProvider>
```
