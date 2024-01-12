import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/InputForm";
import { useEffect } from "react";
import { postBlog } from "../services/blog.service";

const FormAddBlog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const handleAddBlog = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const title = e.currentTarget.judul.value;
        const description = e.currentTarget.description.value;
        const image = e.currentTarget.image.files[0];
        const newBlog = {
            title,
            description,
            image,
        };

        //POST Data to API
        const token = localStorage.getItem("token");
        if (token) {
            if (!newBlog.title.length) return alert("title cannot be empty!");

            const res = await postBlog(newBlog, token);
            if (res.response?.statusText === "Unauthorized") {
                localStorage.removeItem("token");
                navigate("/login");
            }

            console.log("res postblog:", res);
            navigate("/");
        } else {
            navigate("/login");
        }
    };
    return (
        <>
            <Navbar />
            <div className="flex flex-col m-auto mb-16 w-2/3">
                <Link to="/" className="text-xl font-semibold ml-8 mt-4 w-max">
                    &larr; Back
                </Link>
                <h1 className="text-lime-600 text-3xl text-center font-bold my-4">ADD BLOG</h1>
                <div className="bg-gray-300 flex mx-8 mb-8 py-4 rounded-lg">
                    <form onSubmit={(e) => handleAddBlog(e)} className="flex flex-col w-2/3 m-auto ">
                        <InputForm label={"Title"} type={"text"} name={"judul"} placeholder={"Blog title"} id={"title"} />
                        {/* <InputForm label={"Nomor Urut"} type={"text"} name={"nomor"} placeholder={"nomor urut"} id={"nomor"} /> */}
                        {/* <InputForm label={"Image"} type={"text"} name={"image"} placeholder={"image"} id={"image"} /> */}

                        <label htmlFor="description" className="block text-black text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea name="description" id="description" cols={30} rows={10} className="mb-4"></textarea>

                        <label htmlFor="image" className="block text-black text-sm font-bold mb-2">
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

export default FormAddBlog;
