import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/elements/Button";
// import InputForm from "../components/elements/InputForm";
import { editBlog, getBlog } from "../services/blog.service";
// import { TBlogs } from "./home";

const FormEditBlog = () => {
    const [prevBlog, setPrevBlog] = useState({
        title: "",
        description: "",
        image: "",
    });

    const {
        state: { id },
    } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //fetch data blog with id
    useEffect(() => {
        async function fetchData() {
            const blog = await getBlog(id);
            setPrevBlog(blog?.data);
            console.log("data a blog dr api:", blog?.data);
        }
        fetchData();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPrevBlog({
            ...prevBlog,
            [e.target.name]: [e.target.value],
        });
    };
    //     console.log("data prevBlog:", prevBlog);

    const submitEditBlog = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //   const title = e.currentTarget.judul.value;
        //   const description = e.currentTarget.description.value;
        const image = e.currentTarget.image.files[0];
        const editedBlog = {
            title: prevBlog.title[0],
            description: prevBlog.description[0],
            image: image,
        };

        console.log("data editedBlog:", editedBlog);

        //     patch datablog with id
        const token = localStorage.getItem("token");
        if (token) {
            const res = await editBlog(id, token, editedBlog);
            if (res.response?.statusText === "Unauthorized") {
                localStorage.removeItem("token");
                navigate("/login");
            }

            console.log("res editedBlog:", res);
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
                <h1 className="text-lime-600 text-3xl text-center font-bold my-4">EDIT BLOG</h1>
                <div className="bg-gray-300 flex mx-8 mb-8 py-4 rounded-lg">
                    <form onSubmit={(e) => submitEditBlog(e)} className="flex flex-col w-2/3 m-auto ">
                        {/* <InputForm label={"Title"} type={"text"} name={"judul"} placeholder={"Blog title"} id={"title"} value={prevBlog?.title} /> */}
                        <label htmlFor="title" className="block text-black text-sm font-bold mb-2">
                            Title
                        </label>
                        <input onChange={handleChange} type="text" name="title" value={prevBlog?.title} className="bg-white py-2 px-3" />

                        <label htmlFor="description" className="block text-black text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea onChange={handleChange} name="description" id="description" cols={30} rows={10} value={prevBlog?.description} className="mb-4"></textarea>

                        <img src={prevBlog?.image} alt="image" className="h-40 w-48" />
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

export default FormEditBlog;
