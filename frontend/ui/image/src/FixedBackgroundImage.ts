import styled from '@emotion/styled'
import { backgroundImage } from 'styled-system'

export interface FixedBackgroundImageProps {
  backgroundImage: string
}

export const FixedBackgroundImage = styled.img<FixedBackgroundImageProps>(
  ({ theme }) => ({
    minHeight: 'calc(100vh - 0px)',
    backgroundAttachment: 'fixed',
    backfaceVisibility: 'hidden',
    backgroundPosition: '50% 100%',
    backgroundSize: 'cover',
  }),
  backgroundImage
)
