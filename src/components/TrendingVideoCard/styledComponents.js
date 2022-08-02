import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CountPublishContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
`

export const VideoCard = styled(Link)`
  text-decoration: none;
`

export const CardDetails = styled.div`
  margin-left: 50px;
  width: 500px;
`

export const TrendingHeading = styled.h1`
margin-bottom: 0px;
color:${props => props.color}; 

}
`

export const TrendingListItem = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: center;
`
