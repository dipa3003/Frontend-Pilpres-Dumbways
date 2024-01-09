import Jumbotron from "../components/Jumbotron";
import { useEffect, useState } from "react";
import MainCard from "../components/MainCard";
import Cards from "../components/Cards";
import Slogan from "../components/Slogan";
import dataArticles from "../mocks/dataArticles.json";
import { TArtikel } from "../types/artikel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Button from "../components/elements/Button";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
    const [dataArticle, setDataArticle] = useState<TArtikel[] | null>(null);
    const [articles, setArticles] = useState<TArtikel[] | null>(null);
    const [mainArticle, setMainArticle] = useState<TArtikel | null>();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/login");
    });
    useEffect(() => {
        setDataArticle(dataArticles);
    }, []);
    useEffect(() => {
        function handleFirst() {
            if (dataArticle) {
                const [main, ...articles] = dataArticle;
                setMainArticle(main);
                setArticles(articles);
            }
        }
        handleFirst();
    }, [dataArticle]);
    return (
        <>
            <Navbar />
            <main className="bg-gray-300 pb-16">
                <Jumbotron />
                <div className="grid gap-10 grid-cols-3 mx-36 pb-20">
                    {mainArticle && <MainCard date={mainArticle.date} title={mainArticle.title} author={mainArticle.author} />}
                    {articles?.map((article, i) => (
                        <Cards date={article.date} title={article.title} author={article.author} key={i} />
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
