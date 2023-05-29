import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateContext1 from './CreateContext1'


const ContaxState1 = ({children}) => {
    const [user,setUser]=useState([])

    const getData=async()=>{
        const URL='https://jsonplaceholder.typicode.com'
        const result=await axios.get(`${URL}/photos`)
        setUser(result?.data)
    }
useEffect(()=>{
    getData()
},[])
//console.log(user);
  return (
    <>
        <CreateContext1.Provider value={user}>
             {children}
        </CreateContext1.Provider>
    </>
  )
}

export default ContaxState1
