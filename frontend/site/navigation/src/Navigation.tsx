import React from 'react'
import { Mobile } from './Mobile'
import { Desktop } from './Desktop'
import { useWindowSize } from '@ui-parts/use-window-size'
import { useMenuItems } from '@common/Wordpress'

export const Navigation = ({ withTopOffset = false }) => {
  const { innerHeight } = useWindowSize()
  const offset = withTopOffset ? innerHeight : 0
  const items = useMenuItems({ slug: 'root' })

  return (
    <>
      <Desktop offset={offset} items={items} />
      <Mobile offset={offset} items={items} />
    </>
  )
}
