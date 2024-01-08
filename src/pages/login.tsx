import { Link, redirect } from "react-router-dom";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/InputForm";
// import { useState } from "react";

export default function Login() {
    // const [isLogin, setIsLogin] = useState(false);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        //LOGIC AUTH ke DB (sementara pake localstorage)
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        if (localStorage.getItem("username") === "dipa@gmail.com" && localStorage.getItem("password") === "3003") {
            // setIsLogin(true);
            // window.location.href = "/";
            redirect("/");
        }
        console.log("Login success!");
    };
    return (
        <div className="flex justify-center min-h-screen items-center bg-[url('login-img.jpg')] bg-cover">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold text-lime-600 mb-2">Login</h1>
                <p className="font-medium text-slate-500 mb-8">Welcome back, please enter your details</p>
                <form onSubmit={(e) => handleLogin(e)}>
                    <InputForm label={"Username"} type={"text"} name={"username"} placeholder={"example@mail.com"} id={"username"} />
                    <InputForm label={"Password"} type={"password"} name={"password"} placeholder={"******"} id={"password"} />
                    <Button type={"submit"} onClick={() => {}} classCustom="bg-lime-600 w-full">
                        Sign in
                    </Button>
                </form>
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
