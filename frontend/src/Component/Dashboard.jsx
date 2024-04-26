import { Users } from "./Users";

export default function Dashboard(){
    return <>
        <div className="">
            <div className="">
            <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col font-bold text-2xl justify-center h-full ml-4">
            PAYTM APP
        </div>
        <div className="flex ">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
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
            Rs 
        </div>
    </div>
    <Users/>
        </div>
    </>
}
