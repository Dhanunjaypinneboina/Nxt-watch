import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 20px;
`

export const SideBarVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideosList = styled.div`
  height: 100vh;
  width: 80vw;
`

export const PremiumAd = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 250px;
  min-width: 70vw;
  background-size: cover;
  margin-bottom: 10px;
  display: ${props => props.display};
  flex-direction: row;
  align-items: flex-start;
`

export const PremiumAdContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const HomeBgContainer = styled.div`
  background-color: ${props => props.color};
`
