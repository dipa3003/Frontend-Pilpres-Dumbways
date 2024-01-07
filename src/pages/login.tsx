import { Link } from "react-router-dom";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/InputForm";

export default function Login() {
    return (
        <div className="flex justify-center min-h-screen items-center bg-[url('login-img.jpg')] bg-cover">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold text-lime-600 mb-2">Login</h1>
                <p className="font-medium text-slate-500 mb-8">Welcome back, please enter your details</p>
                <form action="">
                    <InputForm label={"Username"} type={"text"} name={"username"} placeholder={"example@mail.com"} id={"username"} />
                    <InputForm label={"Password"} type={"text"} name={"password"} placeholder={"******"} id={"password"} />
                </form>
                <Button classCustom="bg-lime-600 w-full">Sign in</Button>
                <p className="font-medium mt-8 text-center text-white ">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-600 italic font-bold">
                        Register for free
                    </Link>
                </p>
            </div>
        </div>
    );
}
