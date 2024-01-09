import { Link, useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/InputForm";
import { register } from "../services/auth.service";
import { useState } from "react";

export default function Register() {
    const [registerFailed, setRegisterFailed] = useState("");

    const navigate = useNavigate();
    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fullname = e.currentTarget.fullname.value;
        const address = e.currentTarget.address.value;
        const sex = e.currentTarget.gender.value;
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;
        const newUser = {
            fullname,
            address,
            sex,
            username,
            password,
        };

        register(newUser, (ket, res) => {
            if (ket && res === "OK") {
                navigate("/login");
            } else {
                setRegisterFailed(res);
                console.log("error res:", res);
            }
        });

        //LOGIC POST NEW USER TO API DB WILL BE HERE
        // console.log("register new user success:", newUser);
    };
    return (
        <div className="flex justify-center min-h-screen items-center bg-[url('laut.jpg')] bg-cover">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold text-lime-600 mb-2">Register</h1>
                <p className="font-medium text-slate-500 mb-8">Welcome, please enter your details</p>
                <form onSubmit={(e) => handleRegister(e)}>
                    <InputForm label={"Fullname"} type={"text"} name={"fullname"} placeholder={"insert your fullname"} id={"fullname"} />
                    <InputForm label={"Address"} type={"text"} name={"address"} placeholder={"insert your address"} id={"address"} />
                    <InputForm label={"Gender"} type={"text"} name={"gender"} placeholder={"insert your gender"} id={"gender"} />
                    <InputForm label={"Username"} type={"text"} name={"username"} placeholder={"example@mail.com"} id={"username"} />
                    <InputForm label={"Password"} type={"text"} name={"password"} placeholder={"******"} id={"password"} />
                    <Button type={"submit"} onClick={() => {}} classCustom="bg-lime-600 w-full">
                        Create Account
                    </Button>
                </form>
                {registerFailed && <p className="text-red font-bold mt-2">{registerFailed}</p>}

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
