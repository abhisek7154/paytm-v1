import { BottomWarning } from "../components/BottomWarning"
import Button from "../components/button"
import { Heading } from "../components/heading"
import InputBox from "../components/inputbox"
import SubHeading from "../components/subheading"

export function Signup(){
    return(
    <div className="bg-slate-300 h-screen flex justify-center items-center flex-col">
     <div className="rounded-lg bg-white shadow-lg w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign-Up"} />
        <SubHeading label={"Enter your information to create your account"} />
        <InputBox label={"First Name"} placeholder={"Monkey"} />
        <InputBox label={"Last Name"} placeholder={"D. luffy"} />
        <InputBox label={"Email"} placeholder={"luffy@gmail.com"} />
        <InputBox label={"Password"} placeholder={"********"} />
        <Button className="pt-4"
         label={"Sign Up"} onClick={() => alert("Sign Up Clicked")} />
        <BottomWarning label={"Already have an account?"} buttonText={"SignIn"} />
     </div>
    </div>
    )
}