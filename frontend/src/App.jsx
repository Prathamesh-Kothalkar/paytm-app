import { BrowserRouter,Route,Routes } from "react-router-dom"
import Signup from "./Component/Signup"
import Signin from "./Component/Signin"
import Dashboard from "./Component/Dashboard"
import SendMoney from "./Component/SendMoney"
import { useEffect, useState } from "react"
import axios from "axios"
import {Transactions} from "./Component/Transactions"
function App() {
  const [isLogin,setIsLogin]=useState();
  const token=localStorage.getItem("token");
  useEffect(()=>{
  
    axios.get("http://localhost:3000/api/v1/user/name",{
    headers:{
      authorization:"Bearer "+token
    }
   }).then((res)=>{console.log(res.data);setIsLogin(true)}).catch((err)=>{console.log(err);setIsLogin(false)})

  },[])
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/send" element={<SendMoney/>}/>
          <Route path="/trnx" element={<Transactions/>}/>
          <Route path="/" element={isLogin?<Dashboard/>:<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
