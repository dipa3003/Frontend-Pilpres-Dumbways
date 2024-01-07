// import Article from "../pages/Article";
import { Link } from "react-router-dom";
import { TArtikel } from "../types/artikel";

export default function Cards(Props: TArtikel) {
    const { date, title, author } = Props;

    return (
        <>
            <div className=" box-border flex flex-col bg-slate-400 max-h-56 hover:opacity-75">
                <img src="banner-berita.jpg" alt="banner" className="bg-cyan-300 h-1/2 object-cover" />
                <div className="bg-white h-auto p-4">
                    <p className="bg-red-600 text-white p-1 inline-block rounded-lg">{date.toUpperCase()}</p>
                    <h1 className="text-md font-bold mt-2">
                        <Link to="article" preventScrollReset={false} state={{ date: date, title: title, author: author }}>
                            {title.toUpperCase()}
                        </Link>
                    </h1>
                    <p>{author.toLowerCase()}</p>
                </div>
            </div>
        </>
    );
}
