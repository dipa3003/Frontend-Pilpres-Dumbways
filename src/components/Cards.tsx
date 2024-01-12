import { Link } from "react-router-dom";
import { TBlogs } from "../pages/home";

export default function Cards(Props: TBlogs) {
    const { dateCreated, title, author, description, image, id } = Props;

    return (
        <>
            <div className=" box-border flex flex-col bg-slate-400 max-h-56 hover:opacity-75">
                <img src={image} alt="banner" className="bg-cyan-300 h-1/2 object-cover" />
                <div className="bg-white h-auto p-4">
                    <p className="bg-red-600 text-white p-1 inline-block rounded-lg">{new Date(dateCreated).toDateString().toUpperCase()}</p>
                    <p>{id}</p>
                    <h1 className="text-md font-bold mt-2">
                        <Link to="/article" preventScrollReset={false} state={{ date: dateCreated, title: title, author: author, description: description, image: image, id }}>
                            {title.substring(0, 62).toUpperCase()}...
                        </Link>
                    </h1>
                    <p>{author.toLowerCase()}</p>
                </div>
            </div>
        </>
    );
}
