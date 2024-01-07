import Navbar from "../components/Navbar";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/InputForm";

const FormAddPartai = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col m-auto mb-16 w-2/3">
                <h1 className="text-lime-600 text-3xl text-center font-bold my-8">ADD PARTAI</h1>
                <div className="bg-gray-300 flex mx-8 mb-8 py-4 rounded-lg">
                    <form action="" className="flex flex-col w-2/3 m-auto ">
                        <InputForm label={"Nama"} type={"text"} name={"nama"} placeholder={"nama partai"} id={"nama"} />
                        <InputForm label={"Ketua Umum"} type={"text"} name={"ketua"} placeholder={"ketua umum partai"} id={"ketua"} />
                        <InputForm label={"Image"} type={"text"} name={"image"} placeholder={"gambar partai"} id={"image"} />
                        <InputForm label={"Alamat"} type={"text"} name={"alamat"} placeholder={"alamat lengkap"} id={"alamat"} />

                        <label htmlFor="visimisi" className="block text-black text-sm font-bold mb-2">
                            Visi & Misi
                        </label>
                        <textarea name="visimisi" id="visimisi" cols={30} rows={10}></textarea>
                        <div className="flex justify-end">
                            <Button classCustom={"bg-lime-600 text-white rounded-full mt-6 w-1/3"}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormAddPartai;
