import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom"

export default function SendMoney(){
    const [searchParam]=useSearchParams();
    const id=searchParam.get("id");
    const name=searchParam.get("name");
    const [amount,setAmount]=useState();
    const [transactionState,setTransactionState]=useState(true)

    async function transaction(){
        setTransactionState(false)
        const res=await axios.post("http://localhost:3000/api/v1/account/transfer",{
            to:id,
            amount
        },{
            headers:{
                authorization:"Bearer "+localStorage.getItem("token")
            }
        })

        if(res.data.message=="Transcation Successful"){
            setAmount(0);
            setTransactionState(true)
            alert("Transcation Sucessfull");
        }
        else{
           
            alert("Error During Transaction");
        }

    }
    return <>
        <div class="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div class="flex flex-col space-y-1.5 p-6">
                <h2 class="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div class="p-6">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <span class="text-2xl text-white">{name[0]}</span>
                    </div>
                    <h3 class="text-2xl font-semibold">{name}</h3>
                </div>
                <div class="space-y-4">
                    <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        type="number"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e)=>{setAmount(e.target.value)}}
                    />
                    </div>
                    <button onClick={()=>{transaction()}} class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        {transactionState?"Initiate Transfer":"Wait"}
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
    </>
}