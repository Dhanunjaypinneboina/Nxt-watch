import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  padding: 20px;
`

export const DetailsContainer = styled.div`
  display: flex;
`

export const VideoCard = styled.div`
  margin-left: 50px;
  margin-top: 30px;
`

export const PlayerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
`

export const ViewPublished = styled.div`
  padding: 0px;
  display: flex;
`
export const PublishedDate = styled.p`
  padding-left: 10px;
  color: #94a3b8;
`
export const CommentContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  border: none;
  background-color: transparent;
  font-size: 15px;
  color: ${props => props.color};
`

export const LikeDisLikeSaveContainer = styled.div`
  display: flex;
`

export const VideoItemContainer = styled.div`
  background-color: ${props => props.color};
  padding: 20px;
`

export const PlayerTitle = styled.p`
  color: ${props => props.color};
`

export const PlayerDescription = styled.p`
  color: ${props => props.color};
`

export const SavedButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #94a3b8;
`

export const VideoDetails = styled.div`
  display: flex;
`

export const LogoName = styled.p`
  margin: 0px;
  color: ${props => props.color};
`

export const Subscribers = styled.p`
  margin: 0px;
  color: #94a3b8;
`

export const VideoDetailsContainer = styled.div`
  margin-left: 10px;
`

export const Text = styled.p`
  color: ${props => props.color};
`
