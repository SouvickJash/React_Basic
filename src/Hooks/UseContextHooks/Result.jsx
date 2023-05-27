import React, { useContext } from 'react'
import CreateContexts from './Context/CreateContexs'

const Result = () => {
   const finalData=useContext(CreateContexts)
   console.log(finalData);
  return (
    <>
       
       <h1>Data use fatch from context</h1>
       <h1>my name is: {finalData.name}</h1>
       <h1>city: {finalData.city}</h1>
       <h1>phno: {finalData.phno}</h1>
    </>
  )
}

export default Result
