import Jumbotron from "../components/Jumbotron";
import { useEffect, useState } from "react";
import MainCard from "../components/MainCard";
import Cards from "../components/Cards";
import Slogan from "../components/Slogan";
import dataArticles from "../mocks/dataArticles.json";
import { TArtikel } from "../types/artikel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
    const [dataArticle, setDataArticle] = useState<TArtikel[] | null>(null);
    const [articles, setArticles] = useState<TArtikel[] | null>(null);
    const [mainArticle, setMainArticle] = useState<TArtikel | null>();

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
            <main className="bg-gray-300">
                <Jumbotron />
                <div className="grid gap-10 grid-cols-3 mx-36 pb-32">
                    {mainArticle && <MainCard date={mainArticle.date} title={mainArticle.title} author={mainArticle.author} />}
                    {articles?.map((article, i) => (
                        <Cards date={article.date} title={article.title} author={article.author} key={i} />
                    ))}
                </div>
            </main>
            <Slogan slogan={`" PILIHLAH CALON PRESIDEN MENTOR DUMBWAYS.ID DARI REKAM JEJAK YANG JELAS PASTIKAN MEREKA MEMILIKI VISI DAN MISI UNTUK MENJADI SEORANG SEPUH "`} />
            <Footer />
        </>
    );
}
