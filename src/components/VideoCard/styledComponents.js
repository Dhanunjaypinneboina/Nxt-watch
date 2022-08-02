import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeListContainer = styled.li`
  width: 320px;
  margin-top: 15px;
  margin-right: 15px;
  list-style-type: none;
`
export const VideoCardContainer = styled(Link)`
  text-decoration: none;
`
export const ViewsYearContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const CardDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
export const Title = styled.p`
  color: ${props => props.color};
`
