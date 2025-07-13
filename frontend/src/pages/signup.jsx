import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import Button from "../components/button"
import { Heading } from "../components/heading"
import InputBox from "../components/inputbox"
import SubHeading from "../components/subheading"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export function Signup(){

    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [userName , setUserName] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    return(
    <div className="bg-slate-300 h-screen flex justify-center items-center flex-col">
     <div className="rounded-lg bg-white shadow-lg w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign-Up"} />
        <SubHeading label={"Enter your information to create your account"} />
        <InputBox onChange={(e) => {
            setFirstName(e.target.value)
        }} label={"First Name"} placeholder={"Monkey"} />
        <InputBox onChange ={(e) => {
            setLastName(e.target.value)
        }} label={"Last Name"} placeholder={"D. luffy"} />
        <InputBox onChange={(e) => {
            setUserName(e.target.value)    
        }} label={"Email"} placeholder={"luffy@gmail.com"} />
        <InputBox onChange={(e) => {
            setPassword(e.target.value)
        }} label={"Password"} placeholder={"********"} />
        <Button className="pt-4"
         label={"Sign Up"} onClick={() => {
            axios.post("http://localhost:3000/api/v1/user/signup" , {
                username: userName,
                firstname: firstName,
                lastname: lastName,
                password: password
            }).then((response) => {
               alert("Sign Up Successful");
               localStorage.setItem("token", response.data.token) 
               
               navigate("/dashboard")
            })
             .catch((err) => {
                alert("Sign Up Failed: " + (err.response?.data?.message || err.message));
             });
         }} />
        <BottomWarning label={"Already have an account?"} buttonText={"SignIn"} />
     </div>
    </div>
    )
}