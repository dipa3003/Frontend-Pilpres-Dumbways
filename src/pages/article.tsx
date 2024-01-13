import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Button from "../components/elements/Button";
import { deleteBlog } from "../services/blog.service";

export default function Article() {
    const {
        state: { title, date, author, description, image, id },
    } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDelete = async (id: number) => {
        const token = localStorage.getItem("token");
        if (token) {
            if (confirm("Delete this article?")) {
                const res = await deleteBlog(id, token);
                if (res.response?.statusText === "Unauthorized") {
                    localStorage.removeItem("token");
                    navigate("/login");
                }
                console.log(res);
                navigate("/");
            }
        } else {
            navigate("/login");
        }
    };

    const handleEdit = async (id: number) => {
        console.log("id handleEdit:", id);
        navigate("/edit-blog", { state: { id } });
    };

    return (
        <>
            <Navbar />
            <div className="bg-slate-200">
                <div className="mx-36 flex flex-col bg-white px-8 pt-4 ">
                    <p className="flex justify-center text-lg">BERITA HARI INI</p>
                    <Link to="/" className="text-xl font-semibold">
                        &larr; Beranda
                    </Link>
                    <div className="flex justify-center gap-4">
                        <Button type="button" onClick={() => handleEdit(id)} classCustom={"bg-lime-600 text-white rounded-full mt-6 w-32 opacity-60 hover:opacity-100"}>
                            Edit
                        </Button>
                        <Button type="button" onClick={() => handleDelete(id)} classCustom={"bg-red-600 text-white rounded-full mt-6 w-32 opacity-60 hover:opacity-100"}>
                            Delete
                        </Button>
                    </div>
                    <h1 className="flex justify-center text-3xl font-bold mt-6 text-center text-lime-600">{title.toUpperCase()}</h1>
                    <p className="flex justify-center text-lg">{author}</p>
                    <p className="flex justify-center text-lg">{new Date(date).toDateString()}</p>
                    <p>{id}</p>
                    <img src={image} alt="artikel" className="max-h-96 object-cover mt-4" />
                    <p className="my-8 text-justify text-lg">{description}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}
