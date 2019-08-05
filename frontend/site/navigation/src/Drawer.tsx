import React from 'react'
import { Column, Layout } from '@ui/layout'
import { Drawer as UIDrawer } from '@ui/navigation'
import { NextNavLink as NavLink } from '@ui/link'

export const Drawer = ({ items = [] }) => (
  <UIDrawer>
    <Column>
      <Layout basis={20} />
      {items.map(item => (
        <Layout key={item.id}>
          <NavLink href={item.url}>{item.label}</NavLink>
        </Layout>
      ))}
    </Column>
  </UIDrawer>
)
