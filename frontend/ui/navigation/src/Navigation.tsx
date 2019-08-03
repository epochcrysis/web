import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import { Sticky } from 'react-sticky'

export interface NavigationProps {
  isSticky?: boolean
  wasSticky?: boolean
  wasLoad?: boolean
}

const StyledNavigation = styled.div<NavigationProps>(
  () => ({
    display: 'flex',
    width: '100%',
    height: 90,
    boxSizing: 'border-box',
    marginTop: 0,
    '@keyframes animate': {
      from: { marginTop: '-90px' },
      to: { marginTop: 0 },
    },
    '@media (max-width: 40em)': {
      height: '60px',
    },
  }),
  ifProp([{ isSticky: true }, { wasSticky: false }], {
    animation: 'animate 0.2s linear',
  }),
  ifProp([{ isSticky: true }, { wasSticky: true }], {
    animation: 'animate 0.2s linear',
  }),
  ifProp([{ isSticky: true }, { wasSticky: false }, { wasLoad: true }], {
    marginTop: '-90px',
  })
)

const StyledSticky = styled.div({
  width: '100%',
  zIndex: 15,
  '& > div': {
    width: '100%',
  },
})

export const Navigation = ({ children, topOffset = 0 }) => {
  const [wasLoad, setWasLoad] = useState(false)

  const onLoad = () => {
    setWasLoad(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', onLoad)
    return () => {
      window.removeEventListener('scroll', onLoad)
    }
  })

  return (
    <StyledSticky>
      <Sticky topOffset={topOffset}>
        {({ style, isSticky, wasSticky }) => (
          <StyledNavigation
            style={style}
            isSticky={isSticky}
            wasSticky={wasSticky}
            wasLoad={wasLoad}
          >
            {children}
          </StyledNavigation>
        )}
      </Sticky>
    </StyledSticky>
  )
}
