import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/InputForm";
import { useEffect } from "react";

const FormAddPartai = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddPartai = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = e.currentTarget.nama.value;
        const leader = e.currentTarget.ketua.value;
        const visionMission = e.currentTarget.visimisi.value;
        const address = e.currentTarget.alamat.value;
        const image = e.currentTarget.image.value;
        const paslonId = e.currentTarget.paslonId.value;
        const newPartai = {
            name,
            leader,
            visionMission,
            address,
            image,
            paslonId,
        };

        //LOGIC POST TO API DB WILL BE HERE SOON

        console.log("you add new partai:", newPartai);
    };
    return (
        <>
            <Navbar />
            <div className="flex flex-col m-auto mb-16 w-2/3">
                <Link to="/partai" className="text-xl font-semibold ml-8 mt-4 w-max">
                    &larr; Back
                </Link>
                <h1 className="text-lime-600 text-3xl text-center font-bold my-4">ADD PARTAI</h1>
                <div className="bg-gray-300 flex mx-8 mb-8 py-4 rounded-lg">
                    <form onSubmit={(e) => handleAddPartai(e)} className="flex flex-col w-2/3 m-auto ">
                        <InputForm label={"Nama"} type={"text"} name={"nama"} placeholder={"nama partai"} id={"nama"} />
                        <InputForm label={"Ketua Umum"} type={"text"} name={"ketua"} placeholder={"ketua umum partai"} id={"ketua"} />
                        {/* <InputForm label={"Image"} type={"text"} name={"image"} placeholder={"gambar partai"} id={"image"} /> */}

                        <InputForm label={"Alamat"} type={"text"} name={"alamat"} placeholder={"alamat lengkap"} id={"alamat"} />
                        <InputForm label={"Paslon ID"} type={"text"} name={"paslonId"} placeholder={"Nomor urut paslon"} id={"paslonId"} />

                        <label htmlFor="visimisi" className="block text-black text-sm font-bold mb-2">
                            Visi & Misi
                        </label>
                        <textarea name="visimisi" id="visimisi" cols={30} rows={10}></textarea>
                        <label htmlFor="image" className="block text-black text-sm font-bold mb-2 mt-4">
                            Image
                        </label>
                        <input type="file" name="image" id="image" className="bg-white py-2 px-3" />
                        <div className="flex justify-end">
                            <Button type="submit" onClick={() => {}} classCustom={"bg-lime-600 text-white rounded-full mt-6 w-1/3"}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormAddPartai;
