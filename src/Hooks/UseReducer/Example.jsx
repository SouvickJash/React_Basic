import React, { useReducer} from 'react'
import {Button} from '@mui/material'

const i="souvick"
function reducer(state,action){
       switch(action.type){
         case "increment":
         return "souvick"
         case "decremnt":
         return "Jash"
         default:
            return state
       }
}

const Example = () => {
    const [state,dispatch]=useReducer(reducer,i)
    
  return (
    <div>
      <h1>{state}</h1>
      {/* <button onClick={()=>dispatch({type:"increment"})}>add</button>
      <button onClick={()=>dispatch({type:"decremnt"})}>sub</button> */}


     <Button variant="contained" onClick={()=>dispatch({type:"increment"})}>add</Button>
      <Button variant="outlined" onClick={()=>dispatch({type:"decremnt"})}>sub</Button>
    </div>
  )
}

export default Example