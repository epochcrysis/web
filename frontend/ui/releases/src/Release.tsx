import React from 'react'
import styled from '@emotion/styled'
import { Text } from '@ui/text'
import { SocialLink } from '@ui/link'

const StyledRelease = styled.div(() => ({
  display: 'flex',
  width: '33%',
  flexDirection: 'column',
  padding: '0px 15px',
  boxSizing: 'border-box',
  marginTop: '30px',
  '@media (max-width: 52em)': {
    width: '100%',
    padding: 0,
  },
}))

const Container = styled.div(() => ({
  height: '100%',
  boxShadow: '0 2px 8px rgba(0,0,0,.08)',
}))

const Cover = styled.img(() => ({
  display: 'block',
  width: '100%',
  height: 'auto',
}))

const Info = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '20px 5px',
}))

const Title = styled(Text)({
  textAlign: 'center',
  fontSize: '25px',
})

const LinksContainer = styled.div(() => ({
  display: 'flex',
  marginTop: '20px',
  boxSizing: 'border-box',
  flexDirection: 'row',
  justifyContent: 'space-around',
}))

export const Release = ({ data }) => (
  <StyledRelease>
    <Container>
      <Cover src={data.src} />
      <Info>
        <Title>{data.title}</Title>
        <LinksContainer>
          {data.links.map(item => (
            <SocialLink key={item.href} href={item.href} type={item.type} />
          ))}
        </LinksContainer>
      </Info>
    </Container>
  </StyledRelease>
)
