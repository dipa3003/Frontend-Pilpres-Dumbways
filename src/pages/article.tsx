import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
// import { TArtikel } from "../types/artikel";

export default function Article() {
    //     const { date, title, author } = Props;
    const {
        state: { title, date, author },
    } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="bg-slate-200">
                <div className="mx-36 flex flex-col bg-white px-8 pt-4">
                    <p className="flex justify-center text-lg">BERITA HARI INI</p>
                    <Link to="/" className="text-xl font-semibold">
                        &larr; Beranda
                    </Link>
                    <h1 className="flex justify-center text-3xl font-bold mt-6 text-lime-600">{title.toUpperCase()}</h1>
                    <p className="flex justify-center text-lg">{author}</p>
                    <p className="flex justify-center text-lg">{date}</p>
                    <img src="banner-berita.jpg" alt="artikel" className="max-h-96 object-cover mt-4" />
                    <p className="my-8 text-justify text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio repellat nam consectetur enim delectus placeat earum et ducimus quisquam, animi cumque veniam impedit, eveniet alias neque cum! Dolor facere rerum
                        cupiditate adipisci a nulla! A eaque neque corporis! Maiores perspiciatis blanditiis a sapiente, aliquid omnis alias rem, vitae aperiam qui neque. Ipsam molestiae temporibus, harum aut atque illum id non odit
                        eligendi asperiores ipsa similique iure totam corrupti itaque modi dolores delectus blanditiis quod dolore in aspernatur ut nam obcaecati! Voluptatum doloribus, eaque totam aliquam qui libero nemo odit similique,
                        possimus nobis ratione voluptas reiciendis minus quidem quibusdam rem sunt debitis nihil ipsa tempora impedit. Aut incidunt, esse cupiditate similique et at ut? Natus temporibus minima consectetur nostrum quas, eius
                        cumque reiciendis dignissimos ex dolor exercitationem debitis fugiat voluptas aliquid architecto commodi sunt quos ad doloremque, quod, tenetur dolorem ullam? Natus quam mollitia fuga expedita alias sunt, provident
                        eos perspiciatis! Laboriosam blanditiis earum dolores molestias non nobis laudantium voluptate voluptatem consequuntur beatae neque, itaque facere rerum sit modi? Expedita explicabo laudantium tempore quo vel
                        provident nihil corrupti at impedit deserunt ut recusandae, veritatis consectetur nemo quisquam. Ipsam accusantium repellendus impedit nam officia deleniti vero qui itaque sequi. Recusandae, non. Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Dolorem iste esse necessitatibus fugiat officia possimus excepturi optio, rerum explicabo? Eos nam inventore earum vitae eligendi, nemo, excepturi corporis quaerat explicabo
                        consectetur eius soluta recusandae rerum nisi voluptatem dignissimos beatae! Tempore enim deserunt facilis, error, itaque explicabo perferendis culpa labore doloremque iure aliquid! Deleniti recusandae, mollitia modi
                        vel placeat eaque quod consequuntur quasi aliquam nemo dolorum nesciunt quo explicabo magnam saepe at. Molestias, nesciunt corrupti quos numquam vitae quam ex natus sapiente ipsam nihil aspernatur, nulla dicta
                        doloremque iure at totam quo alias optio. Quisquam, dolor incidunt. Consectetur recusandae in dolorem libero omnis accusamus nobis laudantium animi quis, ab illo, voluptatum, perspiciatis iusto architecto dignissimos
                        pariatur numquam tenetur dolorum. Vero aliquid consequuntur pariatur eum corporis quae at placeat, reprehenderit voluptas quos facilis officiis illo. Quisquam eligendi voluptatum libero veniam dignissimos aut nemo
                        blanditiis expedita veritatis optio! Culpa, rem ullam. Quam accusamus esse temporibus odit fugiat debitis repudiandae totam? Aperiam magnam consectetur tempore voluptatem debitis aliquid, culpa, vero ad sapiente ex
                        eum, suscipit porro nam natus inventore tenetur asperiores ullam. Excepturi itaque ipsam dolorum neque, architecto esse odit autem alias mollitia aspernatur delectus animi a nihil commodi fugit odio accusamus impedit
                        harum.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
