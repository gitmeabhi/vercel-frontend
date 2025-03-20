import React, { use, useState } from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import plant from "../../assets/plants.gif"
import axios from "axios"

import "./login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[values, setValues] = useState({
        name:"",
        password:""
    })

    const [userError, setError] = useState("")
    const [classnames, setClass] = useState("")

    const navigate = useNavigate()

    
    const getValues = (e) =>{
        setValues({...values,[e.target.name]:[e.target.value]})
    }

    const loginUser = (e) =>{
        e.preventDefault()
        
        axios.post("http://localhost:3000/login",values)
        .then(res =>{
            if(res.data == "success"){
                console.log("success")
                 navigate("/home")
               
            }else{
                setClass("usererr")
                setError( "User does't exist!")
                console.log("failed")
            }
        }).catch(err =>{
            console.log(err)
        })
    }

  return (
    <div className='register-page'>
        <div className='container'>
            
                <img src={plant} alt='plant' className='plant-img' />
           
            <div className='form-container'>
            <span className={classnames}>{userError}</span>
            <h1 className='heading'>Login Here</h1>
            <form className='form' onSubmit={loginUser}>
               
                <div className='input-div'>
                    <label htmlFor='username' >Name</label>
                    <div className='inputs'>
                        <FaUserShield className='icon' />
                        <input type='text' id='username' name='name' onChange={getValues} placeholder='Enter username' className='input-element' />
                    </div>
                </div>
                <div className='input-div'>
                    <label htmlFor='pass' >Password</label>
                    <div className='inputs'>
                        <BsFillShieldLockFill className='icon' />
                        <input type='password' id='pass' name='password' onChange={getValues} placeholder='Enter pasword' className='input-element' />
                    </div>
                </div>
                <div className='input-div'>
                    <button type='submit' className='btn-primary'>Login</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login