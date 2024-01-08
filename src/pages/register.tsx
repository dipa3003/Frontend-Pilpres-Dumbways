import { Link } from "react-router-dom";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/InputForm";

export default function Register() {
    const handleRegister = () => {
        console.log("you register");
    };
    return (
        <div className="flex justify-center min-h-screen items-center bg-[url('laut.jpg')] bg-cover">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold text-lime-600 mb-2">Register</h1>
                <p className="font-medium text-slate-500 mb-8">Welcome, please enter your details</p>
                <form action="">
                    <InputForm label={"Fullname"} type={"text"} name={"fullname"} placeholder={"insert your fullname"} id={"fullname"} />
                    <InputForm label={"Address"} type={"text"} name={"address"} placeholder={"insert your address"} id={"address"} />
                    <InputForm label={"Gender"} type={"text"} name={"gender"} placeholder={"insert your gender"} id={"gender"} />
                    <InputForm label={"Username"} type={"text"} name={"username"} placeholder={"example@mail.com"} id={"username"} />
                    <InputForm label={"Password"} type={"text"} name={"password"} placeholder={"******"} id={"password"} />
                </form>
                <Button onClick={handleRegister} classCustom="bg-lime-600 w-full">
                    Create Account
                </Button>
                <p className="font-medium mt-8 text-center text-black ">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 italic font-bold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
