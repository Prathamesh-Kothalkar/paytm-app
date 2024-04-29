import { useEffect, useState } from "react";
import BottomWarn from "./FormComponent/BottomWarn";
import Button from "./FormComponent/Button";
import Heading from "./FormComponent/Heading";
import InputBox from "./FormComponent/InputBox";
import SubHeading from "./FormComponent/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin(){
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();
    async function logIn(){
       const res=await axios.post("http://localhost:3000/api/v1/user/signin",{
        username,
        password
       })

       if(res.data.message=="Authenticate Successfull"){
            const token = res.data.token;
            localStorage.setItem("token",token);
            navigate("/dashboard")
       }
    }
    return <>
        <div className="bg-slate-300 h-screen flex justify-center">
           <div className="flex flex-col justify-center">
                    <div className="bg-white rounded-xl text-center w-80 p-2 h-max px-4">
                        <Heading title={"Sign in"}/>
                        <SubHeading subTitle={"Enter your credentials to access your account"}/>
                        <InputBox onChange={(e)=>{setUsername(e.target.value)}} label={"Email"} placeholder={"Enter your email"}/>
                        <InputBox onChange={(e)=>{setPassword(e.target.value)}} label={"Password"} placeholder={"Enter your password"}/>
                        <Button onClick={()=>{logIn()}} text={"Log in"}/>
                        <BottomWarn msg={"Don't have an acoount? "} btn={"Signup here"} to={"/signup"}/>
                    </div>
           </div>
        </div>
    </>
}