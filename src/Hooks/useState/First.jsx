import React, { useState } from 'react'
//array of desturcture
const student=[{
  name:"souvick",
  email:"souvick@gmail.com",
  city:"kolkata",
  pin:"712308",
  class:"card text-white bg-dark mb-3"
},
{
  name:"milan",
  email:"milan@gmail.com",
  city:"howrah",
  pin:"700123",
  class:"card text-white bg-dark mb-3"
},
{
  name:"raj",
  email:"raj@gmail.com",
  city:"barasat",
  pin:"700123",
  class:"card text-white bg-dark mb-3"
},
{
  name:"aman",
  email:"aman@gmail.com",
  city:"howrah",
  pin:"700123",
  class:"card text-white bg-dark mb-3"
}
]

const First = () => {
  const [name,setName]=useState(student)
  return (
    <>
      <div class="card-deck">
        { name.map((item)=>{
          return (
            <>
 <div className={item.class}>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p> 
    <p className="card-text">{item.email}</p>  
    <p className="card-text">{item.city}</p>
    <p className="card-text">{item.pin}</p>
    </p>
   
  </div>
</div>

            </>
          )
         })}
      </div>
    </>
  )
}

export default First
