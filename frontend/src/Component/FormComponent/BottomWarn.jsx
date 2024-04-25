import {Link} from "react-router-dom"
export default function BottomWarn({msg,btn,to}){
    return <>
        <div className=" flex justify-center py-2 text-sm">
            <div className="">
                {msg}
            </div>
           <Link to={to} className="pointer underline pl-1 cursor-pointer">
              {btn}
           </Link>
        </div>
    </>
}