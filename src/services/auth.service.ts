import axios from "axios";

type TRegister = {
    fullname: string;
    address: string;
    sex: string;
    username: string;
    password: string;
};
type TLogin = {
    username: string;
    password: string;
};

export const register = async (data: TRegister, callback: (ket: boolean, status: string) => void) => {
    try {
        const response = await axios.post("http://localhost:5000/api/v1/user/register", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        callback(true, response.statusText);
        console.log(response);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        callback(false, error.response.data);
        console.log(error);
    }
};

export const login = async (data: TLogin, callback: (status: boolean, res: string) => void) => {
    try {
        const response = await axios.post("http://localhost:5000/api/v1/user/login", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        callback(true, response.data.token);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        callback(false, error.response.data.message);
        console.log(error.response);
    }
};
