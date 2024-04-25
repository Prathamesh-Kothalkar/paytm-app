import BottomWarn from "./FormComponent/BottomWarn";
import Button from "./FormComponent/Button";
import Heading from "./FormComponent/Heading";
import InputBox from "./FormComponent/InputBox";
import SubHeading from "./FormComponent/SubHeading";

export default function Signin(){
    return <>
        <div className="bg-slate-300 h-screen flex justify-center">
           <div className="flex flex-col justify-center">
                    <div className="bg-white rounded-xl text-center w-80 p-2 h-max px-4">
                        <Heading title={"Sign in"}/>
                        <SubHeading subTitle={"Enter your credentials to access your account"}/>
                        <InputBox label={"Email"} placeholder={"Enter your email"}/>
                        <InputBox label={"Password"} placeholder={"Enter your password"}/>
                        <Button text={"Log in"}/>
                        <BottomWarn msg={"Don't have an acoount? "} btn={"Signup here"} to={"/signup"}/>
                    </div>
           </div>
        </div>
    </>
}