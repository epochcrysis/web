import React from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import { Flag } from './Flag'

interface FlagsProps {
  active: boolean
}

const StyledSwitcher = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
}))

const StyledFlags = styled.a<FlagsProps>(
  () => ({
    cursor: 'pointer',
    display: 'none',
  }),
  ifProp(
    { active: true },
    {
      display: 'inline',
    }
  )
)

export const Switcher = ({
  locale,
  supported,
  onChange,
  flagSize = '40px',
}) => (
  <StyledSwitcher>
    {supported.map(item => (
      <div key={item}>
        <StyledFlags
          active={locale === item ? false : true}
          onClick={event => {
            event.preventDefault()
            onChange(item)
          }}
        >
          <Flag locale={item} size={flagSize} />
        </StyledFlags>
      </div>
    ))}
  </StyledSwitcher>
)
