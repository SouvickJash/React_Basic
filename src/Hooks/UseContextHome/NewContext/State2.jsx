import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CreateContaxt2 from './CreateContaxt2'

const State2 = ({children}) => {
   const[user,setUser]=useState([])
   const[todos,setTodos]=useState([])
   const[post,setPost]=useState([])

   
   const getUser=async()=>{
         const UEL='https://jsonplaceholder.typicode.com'
         const result=await axios.get(`${UEL}/photos`)
         setUser(result?.data)
   }
   const getTodos=async()=>{
       const URL1='https://jsonplaceholder.typicode.com'
       const result1=await axios.get(`${URL1}/todos`)
       setTodos(result1?.data)
   }

   const getPost = async()=>{
        const URL2='https://jsonplaceholder.typicode.com'
        const result2=await axios.get(`${URL2}/posts`)
        setPost(result2?.data)
   }
useEffect(()=>{
  getUser()
  getTodos()
  getPost()
},[])
const example={user,todos,post}

// console.log(user)
// console.log(todos)
// console.log(post)
  return (
    <>
      <CreateContaxt2.Provider value={example}>
          {children}
      </CreateContaxt2.Provider>
      
    </>
  )
}
export default State2
