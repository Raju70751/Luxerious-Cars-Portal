import React from 'react'

const ContextProvider = React.createContext({
    savedList: [],
    addSaveList: () => { }
})

export default ContextProvider