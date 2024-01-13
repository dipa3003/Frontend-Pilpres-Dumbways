import { Link } from "react-router-dom";
// import { TArtikel } from "../types/artikel";
import { TBlogs } from "../pages/home";

export default function MainCard(Props: TBlogs) {
    const { dateCreated, title, author, description, image, id } = Props;
    return (
        <div className={`flex flex-col justify-end col-span-2 bg-red-700 h-64 bg-[url("${image}")] bg-cover bg-no-repeat bg-center hover:opacity-75`}>
            <div className="bg-transparant h-auto p-4 pt-4">
                <p className="bg-red-600 text-white p-1 inline-block rounded-lg">{new Date(dateCreated).toDateString().toUpperCase()}</p>
                <h1 className="text-white text-2xl font-bold mt-2">
                    <Link to="/article" state={{ date: dateCreated, title: title, author: author, description: description, image, id }}>
                        {title.toUpperCase()}
                    </Link>
                </h1>
                <p className="text-white">{author.toLowerCase()}</p>
            </div>
        </div>
    );
}
