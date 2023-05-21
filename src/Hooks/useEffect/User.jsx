import React, { useEffect } from 'react'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const User = () => {
    const[user,setUser]=useState([])
    const[loadmore ,setLoadMore]=useState(6)
    const Loading=()=>{
        setLoadMore((Value)=>Value*2)
    }

    const baseUrl="https://api.github.com/users"
    const getUser=async()=>{
        const response=await axios.get(baseUrl);
        setUser(response.data)
    }
    useEffect(()=>{
        getUser()   
    },[])
  return (
    <>
    <div className='container'>
        <div className='row'>
            {user.slice(0,loadmore).map((item)=>{
                return(
                    <>
                    <div className='col-sm-4'>
                    <div className="card" style={{width: '18rem'}}>
                <img src={item.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-title">id no:{item.id}</p>
                    <p className="card-title">Login: {item.login}</p>
                    
                    <NavLink to={`/user/${item.id}`} className="btn btn-info" style={{marginLeft:60}}>View picture</NavLink>
                </div>
                </div>
                </div>
                    </>
                )
                

            })}
        </div>
    </div>
    {/* <button style={{marginLeft:"00px"}}  onClick={Loading}>Click more</button> */}
    <button type="button" class="btn btn-primary" onClick={Loading} style={{marginLeft:"560px", marginTop:"37px"}}>Click more</button>
    {/* <header><Link to="/user">Home</Link></header> */}
    </>
  )
}

export default User