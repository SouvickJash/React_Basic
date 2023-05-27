import React, { useContext } from 'react'
import CreateContexts from './Context/CreateContexs'

const AboutUser = () => {
      const finalData=useContext(CreateContexts)
  return (
    <>
     

       <h1>This is About page</h1>
       <h1>my name is: {finalData.name}</h1>
       <h1>city: {finalData.city}</h1>
       <h1>phno: {finalData.phno}</h1>
    </>
  )
}

export default AboutUser
