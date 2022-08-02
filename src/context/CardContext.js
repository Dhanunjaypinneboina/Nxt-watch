import React from 'react'

const CardContext = React.createContext({
  SavedVideosList: [],
  isDarkTheme: false,
  addToSavedList: () => {},
  onChangeTheme: () => {},
})

export default CardContext
