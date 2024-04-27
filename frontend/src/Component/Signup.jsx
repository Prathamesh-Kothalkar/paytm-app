import Heading from '../Component/FormComponent/Heading';
import SubHeading from './FormComponent/SubHeading';
import InputBox from './FormComponent/InputBox';
import Button from './FormComponent/Button';
import BottomWarn from './FormComponent/BottomWarn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
export default function Signup(){

    const [username,setUsername]=useState();
    const [firstName,setFirstName]=useState();
    const [lastName,setLastName]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();

    async function signUp(){
        const res=await axios.post("http://localhost:3000/api/v1/user/signup",{
            username,
            firstName,
            lastName,
            password
        })

    
        if(res.data.message=="User Created Successfully"){
            const token = res.data.token;
            localStorage.setItem("token",token)
            alert("User created sucessfully");
            navigate("/dashboard")
        }   
    }
    return <>
        <div className="bg-slate-300 h-screen flex justify-center">
           <div className="flex flex-col justify-center">
                    <div className="bg-white rounded-xl text-center w-80 p-2 h-max px-4">
                        <Heading title={"Sign up"}/>
                        <SubHeading subTitle={"Enter your information to create an account"}/>
                        <InputBox onChange={(e)=>{setFirstName(e.target.value)}} label={"First Name"} placeholder={"Enter First Name"}/>
                        <InputBox onChange={(e)=>{setLastName(e.target.value)}} label={"Last Name"} placeholder={"Enter Last Name"}/>
                        <InputBox onChange={(e)=>{setUsername(e.target.value)}} label={"Email"} placeholder={"Enter your email"}/>
                        <InputBox onChange={(e)=>{setPassword(e.target.value)}} label={"Password"} placeholder={"Enter your password"}/>
                        <Button text={"Sign Up"} onClick={()=>{signUp()}}/>
                        <BottomWarn msg={"Already have an Account ?"} btn={"Login here"} to={"/signin"}/>
                    </div>
           </div>
        </div>
    </>
}