import Jumbotron from "../components/Jumbotron";
import { useEffect, useState } from "react";
import MainCard from "../components/MainCard";
import Cards from "../components/Cards";
import Slogan from "../components/Slogan";
// import dataArticles from "../mocks/dataArticles.json";
// import { TArtikel } from "../types/artikel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Button from "../components/elements/Button";
import { Link, useNavigate } from "react-router-dom";
import { getBlogs } from "../services/blog.service";

export type TBlogs = {
    author: string;
    dateCreated: string;
    description: string;
    id?: number;
    image: string;
    title: string;
};

export default function HomePage() {
    // const [dataArticle, setDataArticle] = useState<TArtikel[] | null>(null);
    const [articles, setArticles] = useState<TBlogs[] | null>(null);
    const [mainArticle, setMainArticle] = useState<TBlogs | null>(null);

    const [blogs, setBlogs] = useState<TBlogs[] | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const blogs = await getBlogs();
            setBlogs(blogs.data);
        }
        fetchData();
    }, []);
    // console.log("data blogs dr api: ", blogs);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/login");
    }, [navigate]);

    // useEffect(() => {
    //     setDataArticle(dataArticles);
    // }, []);

    useEffect(() => {
        function handleFirst() {
            if (blogs) {
                const [main, ...articles] = blogs;
                setMainArticle(main);
                setArticles(articles);
            }
        }
        handleFirst();
    }, [blogs]);

    return (
        <>
            <Navbar />
            <main className="bg-gray-300 pb-16">
                <Jumbotron />
                <div className="grid gap-10 grid-cols-3 auto-rows-fr mx-36 pb-20">
                    {mainArticle && <MainCard image={mainArticle.image} dateCreated={mainArticle.dateCreated} title={mainArticle.title} author={mainArticle.author} description={mainArticle.description} />}
                    {articles?.map((article) => (
                        <Cards id={article.id} image={article.image} dateCreated={article.dateCreated} title={article.title} author={article.author} description={article.description} key={article.id} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link to="/add-blog">
                        <p className="bg-lime-600 text-white font-semibold rounded-full px-6 py-2">Add Blog</p>
                    </Link>
                </div>
            </main>
            <Slogan slogan={`" PILIHLAH CALON PRESIDEN MENTOR DUMBWAYS.ID DARI REKAM JEJAK YANG JELAS PASTIKAN MEREKA MEMILIKI VISI DAN MISI UNTUK MENJADI SEORANG SEPUH "`} />
            <Footer />
        </>
    );
}
