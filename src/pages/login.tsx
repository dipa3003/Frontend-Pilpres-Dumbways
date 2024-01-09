import { Link, useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/InputForm";
import { login } from "../services/auth.service";
import { useState } from "react";

export default function Login() {
    const [loginFailed, setLoginFailed] = useState("");
    localStorage.removeItem("token");

    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        const newLogin = {
            username,
            password,
        };

        login(newLogin, (status, res) => {
            if (status) {
                localStorage.setItem("token", res);
                navigate("/", { replace: true });
            } else {
                setLoginFailed(res);
                console.log(res);
            }
        });
        //LOGIC AUTH ke DB (sementara pake localstorage)
        // localStorage.setItem("username", username);
        // localStorage.setItem("password", password);

        // if (localStorage.getItem("username") === "dipa@gmail.com" && localStorage.getItem("password") === "3003") {
        //     // setIsLogin(true);
        //     // window.location.href = "/";
        // navigate("/", { replace: true });
        //     console.log("Login success!");
        // }
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
                {loginFailed && <p className="text-red font-bold mt-2">{loginFailed}</p>}
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
