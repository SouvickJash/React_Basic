import React from 'react'
import {useParams} from 'react-router-dom'
import{useNavigate} from 'react-router-dom'
import {useState} from 'react' 
import {useEffect} from 'react'
import { UpdateUserData, getEditData } from '../Api/Api'
import { toast } from 'react-toastify'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  city: "",

}

const UpdateUser = () => {
  const [user, setUser] = useState(initialValues)
  const [error, setError] = useState({})
  const navigate=useNavigate()
  const { id } = useParams()

  const validation = () => {
    let error = {}

    if (!user.name) {
        error.name = "Name is Required"
    }

    if (!user.email) {
        error.email = "Email is Required"
    } else if (
        !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
    ) {
        error.email = "Enter a valid Email"
    }

    if (!user.phone) {
        error.phone = "Phone is Required"
    }
    if (!user.city) {
        error.city = "City is Required"
    }
    return error
}

//   onchange validation
let name, value
const postUserData = (e) => {
  name = e.target.name
  value = e.target.value

  setUser({ ...user, [name]: value })

  if (name === "name") {
      if (value.length === 0) {
          setError({ ...error, name: "@Name is Required" })
          setUser({ ...user, name: "" })
      } else {
          setError({ ...error, name: "" })
          setUser({ ...user, name: value })
      }
  }

  if (name === "email") {
      if (value.length === 0) {
          setError({ ...error, email: "@Email is Required" })
          setUser({ ...user, email: "" })
      } else {
          setError({ ...error, email: "" })
          setUser({ ...user, email: value })
      }
  }
 if (name === "phone") {
      if (value.length === 0) {
          setError({ ...error, phone: "@Phone is Required" })
          setUser({ ...user, phone: "" })
      } else {
          setError({ ...error, phone: "" })
          setUser({ ...user, phone: value })
      }
  }
  if (name === "city") {
      if (value.length === 0) {
          setError({ ...error, city: "@City is Required" })
          setUser({ ...user, city: "" })
      } else {
          setError({ ...error, city: "" })
          setUser({ ...user, city: value })
      }
  }

}
const SubmitInfo = e => {
  e.preventDefault()
  let ErrorList = validation()
  setError(ErrorList)

  // if (Object.keys(ErrorList).length === 0) {
  //     let reg = {
  //         name: user.name,
  //         email: user.email,
  //         phone: user.phone,
  //         password: user.password,
  //         city: user.city,
  //         state: user.state,
  //         dob: user.dob
  //     }
  //     console.log(reg)
  // }
}
//update post data
const UpdatedData=async()=>{
    await UpdateUserData(user, id)
    navigate('/')
    toast.success("Data update successfully");
}
//edit user
const getData = async () => {
  let response = await getEditData(id)
  setUser(response.data)
}
useEffect(() => {
  getData()
}, [])

  return (
    <>
       <form  onSubmit={SubmitInfo} className="container mt-5">
                <h4>Update User </h4>
                <div>
                    <label> Name </label>
                    <input type="text" className="form-control" name="name" value={user.name} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.name} </span>
                </div>
                <div>
                    <label> Email </label>
                    <input type="email" className="form-control" name="email" value={user.email} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.email} </span>
                </div>
                <div>
                    <label> Phone </label>
                    <input type="number" className="form-control" name="phone" value={user.phone} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.phone} </span>
                </div>
                <div>
                    <label> City </label>
                    <input type="text" className="form-control" name="city" value={user.city} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.city} </span>
                </div>
              
                <div>
                    <button type="submit" className="btn btn-success px-4 py-2" onClick={() => UpdatedData()}>Update User </button>
                </div>
            </form>
    </>
  )
}

export default UpdateUser
