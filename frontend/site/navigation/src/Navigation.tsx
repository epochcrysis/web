import React from 'react'
import { Mobile } from './Mobile'
import { Desktop } from './Desktop'
import { useWindowSize } from '@ui-parts/use-window-size'

export const Navigation = ({ withTopOffset = false }) => {
  const { innerHeight } = useWindowSize()
  const offset = withTopOffset ? innerHeight : 0

  return (
    <>
      <Desktop offset={offset} />
      <Mobile offset={offset} />
    </>
  )
}
