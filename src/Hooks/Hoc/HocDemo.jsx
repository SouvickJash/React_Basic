import React, { useState } from 'react'

export default function HocDemo(){
  return (
    <>
      <h1>react high order component</h1>
      <HocGreen g={Hoc1}/>
      <HocBlue b={Hoc1}/>
      <HocPink p={Hoc1}/>
    </>
  )
}
function HocGreen(props){
  return <h2 style={{background:'green',width:'300px'}}>RED<props.g/></h2>
}
function HocBlue(props){
  return<h2 style={{background:'blue',width:'300px'}}>BLUE<props.b/></h2>
}
function HocPink(props){
  return<h2 style={{background:'pink',width:'300px'}}>PINK<props.p/></h2>
}
//custome hooks
function Hoc1(){
  const[count,setCount] =useState(0)
    return (
      <>
        <h2>{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>update</button>
      </>
    )
}
