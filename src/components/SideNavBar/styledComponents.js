import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`

export const SideBarContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`
