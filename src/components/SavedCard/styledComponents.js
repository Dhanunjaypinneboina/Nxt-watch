import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;

  flex-direction: row;
`

export const SavedContent = styled.div`
  margin-left: 50px;
  width: 500px;
`

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
`
