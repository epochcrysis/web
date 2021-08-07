import React from 'react'
import styled from '@emotion/styled'
import { switchProp } from 'styled-tools'
import {
  AmazonIcon,
  BandcampIcon,
  GooglePlayIcon,
  ItunesIcon,
  SpotifyIcon,
  YandexMusicIcon,
  YoutubeIcon,
} from '@ui/icons'

interface SocialLinksProps {
  color: string
}

const StyledSocialLink = styled.a<SocialLinksProps>(
  () => ({
    boxSizing: 'border-box',
    width: '36px',
    height: '36px',
    borderRadius: '500px',
    verticalAlign: 'middle',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '.1s ease-in-out',
    transitionProperty: 'background-color',
  }),
  switchProp('color', () => ({
    black: {
      background: '#33353b',
      '&:hover': {
        backgroundColor: '#27292d',
      },
    },
    white: {
      backgroundColor: 'rgba(255,255,255,.1)',
      '& > svg': {
        opacity: 0.5,
      },
      '&:hover': {
        backgroundColor: 'rgba(242,242,242,.1)',
        '& > svg': {
          opacity: 0.7,
        },
      },
    },
  }))
)

const icons = {
  amazon: <AmazonIcon width='24px' height='24px' />,
  band: <BandcampIcon width='24px' height='24px' />,
  google: <GooglePlayIcon width='24px' height='24px' />,
  itunes: <ItunesIcon width='24px' height='24px' />,
  spotify: <SpotifyIcon width='24px' height='24px' />,
  yandex: <YandexMusicIcon width='44px' height='44px' />,
  youtube: <YoutubeIcon width='20px' height='20px' color='#fff' />,
}

export const SocialLink = ({ href, type, color = 'black' }) => (
  <StyledSocialLink href={href} color={color} target='_blank'>
    {icons[type]}
  </StyledSocialLink>
)
