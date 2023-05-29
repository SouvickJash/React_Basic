import React, { useContext } from 'react'
import CreateContexts1 from './Context/CreateContext1'

const AboutUser = () => {
      const finalData=useContext(CreateContexts1)
  return (
    <>
     

       <h1>This is About page</h1>
       <h1>my name is: {finalData.name}</h1>
     
    </>
  )
}

export default AboutUser
