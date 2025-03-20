import React, { useState } from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import plant from "../../assets/plants.gif"
import axios from "axios"

import "./registration.css"
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    const[values, getValues] = useState({
        name:"",
        email:"",
        password:""
    })

    

    const [required,setReq] = useState("")
    const [blurs,setBlur] = useState("")
    const [namerequired,setnameReq] = useState("")
    const [passrequired,setpassReq] = useState("")

   

    const handleBlur =() =>{
        
       if(values.email == ''){
        
        setBlur("blur")
        setReq("*required")
       }else{
        setReq("")
       }
    }

    const handleBlur2 =() =>{
        
        if(values.name ==''){
         console.log(values)
         setBlur("blur")
         setnameReq("*required")
        }else{
            setnameReq("")
           }
     }

     const handleBlur3 =() =>{
        
        if(values.password == ''){
         console.log(values)
         setBlur("blur")
         setpassReq("*required")
        }else{
            setpassReq("")
           }
     }

    const navigate = useNavigate()

    const setValues = (e) =>{
       getValues({...values,[e.target.name]: [e.target.value]})
    }


   let addUser = (e) =>{
        e.preventDefault()
        // if(values.email == '' || values.name == '' || values.password == ''){
        //     setReq("*required")
        //     setnameReq("*required")
        //     setpassReq("*required")
        // }
        
   if (values.name !== '' && values.email !== '' && values.password !== ''){
    axios.post("http://localhost:3000/registers",values)
    .then(res =>{
       
        if(res.data == "success"){
            navigate("/")
            console.log("success")
        }else{
            console.log("failed")
        }
    }).catch(err=>{
        console.log(err)
    })
   }else{
    setReq("*required")
    setnameReq("*required")
    setpassReq("*required")
   }
       
    }

   

  return (
    <div className='register-page'>
        <div className='container'>
            
                <img src={plant} alt='plant' className='plant-img' />
           
            <div className='form-container'>
            <h1 className='heading'>Register Here</h1>
            <form className='form' onSubmit={addUser}>
                <div className='input-div'>
                    <label htmlFor='emails' >Email</label>
                    <div className='inputs'>
                        <MdAttachEmail className='icon' />
                        <input type='email' id='emails' name='email' onChange={setValues} 
                        placeholder='Enter email' onBlur={handleBlur} className='input-element' required />
                    </div>
                    <span className={blurs}>{required}</span>
                </div>
                <div className='input-div'>
                    <label htmlFor='username' >Name</label>
                    <div className='inputs'>
                        <FaUserShield className='icon' />
                        <input type='text' id='username' name='name' onBlur={handleBlur2} onChange={setValues} placeholder='Enter username' className='input-element' />
                    </div>
                    <span className={blurs}>{namerequired}</span>
                </div>
                <div className='input-div'>
                    <label htmlFor='pass' >Password</label>
                    <div className='inputs'>
                        <BsFillShieldLockFill className='icon' />
                        <input type='password' id='pass' onBlur={handleBlur3} name='password' onChange={setValues} placeholder='Enter pasword' className='input-element' />
                    </div>
                    <span className={blurs}>{passrequired}</span>
                </div>
                <div className='input-div'>
                    <button type='submit' className='btn-primary'>Register</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default RegistrationPage