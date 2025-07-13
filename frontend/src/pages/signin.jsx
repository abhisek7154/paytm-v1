import { BottomWarning } from "../components/BottomWarning"
import Button from "../components/button"
import { Heading } from "../components/heading"
import InputBox from "../components/inputbox"
import SubHeading from "../components/subheading"



export function Signin(){
    return(
        <div className="bg-slate-300 h-screen flex justify-center items-center flex-col">
             <div className="rounded-lg bg-white shadow-lg w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"} />
                <SubHeading label={"Enter your credential to access your account"} />
                <InputBox label={"Email"} placeholder={"luffy@gmail.com"} />
                <InputBox label={"Password"} placeholder={"********"} />
                <Button className="pt-4"
                 label={"Sign In"} onClick={() => alert("Sign In Clicked")} />
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} />
             </div>
        </div>
    )
}