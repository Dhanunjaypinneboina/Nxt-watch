import styled from 'styled-components'

export const TrendingRouteContainer = styled.div`
  padding: 20px;
`

export const TrendingVideosContainer = styled.div`
  display: flex;
`

export const TrendingHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.color};
  padding: 30px;
`

export const TrendingVideoDetailsBg = styled.div`
  width: 80vw;
`

export const TrendingBg = styled.div`
  background-color: ${props => props.color};

  padding: 30px;
`

export const Heading = styled.h1`
  color: ${props => props.color};
`
