import { useEffect, useState } from "react";
import { Users } from "./Users";
import axios from "axios";

export default function Dashboard(){
    const [username,setUsername]=useState("user");
    const [amount,setBalance]=useState(0)
    const token=localStorage.getItem("token");
    console.log(token)

    useEffect(()=>{
       const name = async ()=>{
            console.log("running")
            const res_name=await axios.get("http://localhost:3000/api/v1/user/name",{
               headers:{
                authorization:"Bearer "+token
               } 
            })
           setUsername(res_name.data.name)
        }
        const balance = async ()=>{
            const res_bal=await axios.get("http://localhost:3000/api/v1/account/balance",{
                headers:{
                    authorization:"Bearer "+token
                }
            })

            setBalance(res_bal.data.balance)

        }
        name();
        balance();
    },[])

    return <>
        <div className="">
            <div className="">
            <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col font-bold text-2xl justify-center h-full ml-4">
            PAYTM APP
        </div>
        <div className="flex ">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello {username}
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {username[0]}
                </div>
            </div>
        </div>
    </div>
            </div>
            <div className="flex px-3 mt-3 py-2">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {Math.floor(amount)}
        </div>
    </div>
    <Users/>
        </div>
    </>
}
