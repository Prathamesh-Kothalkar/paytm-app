import Heading from '../Component/FormComponent/Heading';
import SubHeading from './FormComponent/SubHeading';
import InputBox from './FormComponent/InputBox';
import Button from './FormComponent/Button';
import BottomWarn from './FormComponent/BottomWarn';
export default function Signup(){
    return <>
        <div className="bg-slate-300 h-screen flex justify-center">
           <div className="flex flex-col justify-center">
                    <div className="bg-white rounded-xl text-center w-80 p-2 h-max px-4">
                        <Heading title={"Sign up"}/>
                        <SubHeading subTitle={"Enter your information to create an account"}/>
                        <InputBox label={"First Name"} placeholder={"Enter First Name"}/>
                        <InputBox label={"Last Name"} placeholder={"Enter Last Name"}/>
                        <InputBox label={"Email"} placeholder={"Enter your email"}/>
                        <InputBox label={"Password"} placeholder={"Enter your password"}/>
                        <Button text={"Sign Up"}/>
                        <BottomWarn msg={"Already have an Account ?"} btn={"Login here"} to={"/signin"}/>
                    </div>
           </div>
        </div>
    </>
}