import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/InputForm";
import { useEffect } from "react";

const FormAddPaslon = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddPaslon = () => {
        console.log("you add a paslon");
    };
    return (
        <>
            <Navbar />
            <div className="flex flex-col m-auto mb-16 w-2/3">
                <Link to="/paslon" className="text-xl font-semibold ml-8 mt-4 w-max">
                    &larr; Back
                </Link>
                <h1 className="text-lime-600 text-3xl text-center font-bold my-4">ADD PASLON</h1>
                <div className="bg-gray-300 flex mx-8 mb-8 py-4 rounded-lg">
                    <form action="" className="flex flex-col w-2/3 m-auto ">
                        <InputForm label={"Nama"} type={"text"} name={"nama"} placeholder={"nama paslon"} id={"nama"} />
                        <InputForm label={"Nomor Urut"} type={"text"} name={"nomor"} placeholder={"nomor urut"} id={"nomor"} />
                        <InputForm label={"Image"} type={"text"} name={"image"} placeholder={"image"} id={"image"} />

                        <label htmlFor="visimisi" className="block text-black text-sm font-bold mb-2">
                            Visi & Misi
                        </label>
                        <textarea name="visimisi" id="visimisi" cols={30} rows={10}></textarea>
                        <div className="flex justify-end">
                            <Button onClick={handleAddPaslon} classCustom={"bg-lime-600 text-white rounded-full mt-6 w-1/3"}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormAddPaslon;
