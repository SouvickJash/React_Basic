import React from 'react'
import CreateContexts from './CreateContexs'

const ContexState = ( {children}) => {
  const state={
    name:"souvick",
    city:"barasat",
    phno:"123456789"
  }
  return (
    <>
      <CreateContexts.Provider value={state}>
        {children}
      </CreateContexts.Provider>
    </>
  )
}

export default ContexState

