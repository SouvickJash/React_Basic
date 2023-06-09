import React, { useState } from 'react'

const Second = () => {
  const [name,setName]=useState("Souvick")
  const [count,setCount]=useState(0)
  const fun1=()=>{
    //  setName("Sayan")
   let info=name;
  //  if(info==='Souvick'){
  //     setName("Sayan");
  //  }else{
  //     setName('Souvick');
  //  }
    
  info==='Souvick'? setName('Sayan'):setName('Souvick')
    
  }
  //count the numnber
  const Add=()=>{
    setCount(count+1);
 }
 const Sub=()=>{
    setCount(count-1);   
 }
 
  return (
    <>
    <h5>my name is: {name}</h5>
      <button className='btn btn-danger' onClick={fun1} >Click me</button>
      <h4 style={{color: 'green'}}>Count the number:<h3 style={{color: 'black'}}>{count}</h3></h4>
      <button type="button" className='btn btn-primary' onClick={Add}>Increment</button>
      <button type="button" className='btn btn-primary' onClick={Sub }>Decrement</button>
      
    </>
  )
}

export default Second
