import styled from 'styled-components'

export const GamingContainer = styled.div`
  padding: 20px;
`

export const GamingContentContainer = styled.div`
  display: flex;
`

export const GamingHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.color};
  padding: 30px;
`

export const GamesListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 70vw;
  margin-top: 20px;
  background-color: ${props => props.color};
  padding: 30px;
  margin-top: 0px;
`

export const Heading = styled.h1`
  color: ${props => props.color};
`
