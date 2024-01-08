import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PieChart, { TDataPaslon } from "../components/PieChart";
import Slogan from "../components/Slogan";
import Button from "../components/elements/Button";
import dataPaslon from "../mocks/dataPaslon.json";
import dataSliderPaslon from "../mocks/dataAddPaslon.json";
import dataPartai from "../mocks/dataAddPartai.json";

export default function Vote() {
    const [dataVote, setDataVote] = useState<TDataPaslon[] | null>(null); //DATA BARU DARI MODAL VOTE, POST JUMLAH VOTE KE DB
    const [allDataPaslon] = useState(dataSliderPaslon); //SEMUA DATA PASLON DARI API DB, DI POST DARI FORM ADD PASLON
    const [currentIndex, setCurrentIndex] = useState(0);
    const [partai] = useState(dataPartai); //SEMUA DATA PARTAI API, DI POST DARI FORM ADD PARTAI
    const [modalVote, setModalVote] = useState(false);

    let totalVote: number = 0; //DATA TOTAL VOTES
    function handleVote() {
        dataVote?.map((item) => {
            totalVote = totalVote + item.vote;
        });
    }
    handleVote();

    useEffect(() => {
        setDataVote(dataPaslon);
    }, []);

    function goBack() {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? allDataPaslon.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    function goNext() {
        const isLastSlide = currentIndex === allDataPaslon.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    function handleModalVote() {
        setModalVote(!modalVote);
    }

    const handleResetPaslon = () => {
        console.log("you reset vote a paslon");
    };
    const handleSubmitPaslon = () => {
        console.log("you vote a paslon");
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col mb-16">
                <h1 className="text-lime-600 text-3xl text-center font-bold my-8">INFO PEMILU TERUPDATE</h1>
                <div className="flex justify-center align-center gap-8">
                    <div className="flex flex-col justify-center align-center">
                        <h1 className="font-bold text-lg text-center mb-4">Hasil: </h1>

                        <div className="rounded-full bg-sky-700">{dataVote && <PieChart totalVote={totalVote} />}</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {dataVote &&
                            dataVote.map((data, i) => (
                                <div className="bg-red-400 flex gap-4 font-bold px-3 py-1 rounded-lg" key={i}>
                                    <div className="bg-red-950 flex flex-col text-xs text-white align-center justify-center m-2 px-1 rounded-md">
                                        <p className="text-center p-1">
                                            No. <br />
                                            <span>Paslon</span> <br />
                                            <span>{data.nomorPaslon}</span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col align-center justify-center text-xl">
                                        <p className="text-black font-bold">{data.name.toUpperCase()}</p>
                                        <p className="text-black">{(data.vote / totalVote) * 100}%</p>
                                    </div>
                                </div>
                            ))}
                        <Button onClick={handleModalVote} classCustom={"bg-lime-600 rounded-full mt-6 text-white"}>
                            MASUKAN SUARAMU
                        </Button>
                    </div>
                </div>

                {/* MODAL VOTE COMPONENT HERE */}
                {modalVote && (
                    <div className="bg-sky-200 flex flex-col p-4 m-auto mt-8 rounded-lg min-h-96 ">
                        <h1 className="text-center font-bold text-xl mb-4">MASUKAN PILIHAN MU</h1>
                        <div className="flex">
                            {allDataPaslon &&
                                allDataPaslon.map((item, i) => (
                                    <div className="flex" key={i}>
                                        <div className=" bg-white w-64 m-2 p-2 rounded-lg active:bg-yellow-200 ">
                                            <img src={item.url} alt="img" className="h-44 object-cover w-full" />
                                            <p className="font-semibold">Paslon {item.nomor}</p>
                                            <h1 className="text-xl font-bold">{item.nama.toUpperCase()}</h1>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="flex justify-end gap-4">
                            <Button onClick={handleResetPaslon} classCustom={"bg-white text-black rounded-full mt-6"}>
                                Reset
                            </Button>
                            <Button onClick={handleSubmitPaslon} classCustom={"bg-lime-600 text-white rounded-full mt-6"}>
                                Submit
                            </Button>
                            {/* <button className=" h-10 px-6 font-semibold bg-white text-black rounded-full mt-6">Reset</button>
                            <button className=" h-10 px-6 font-semibold bg-lime-600 text-white rounded-full mt-6">Submit</button> */}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col align-center justify-center pt-8 bg-gray-200">
                <h1 className="text-lime-600 text-3xl text-center font-bold my-8">INFO PASLON</h1>

                <div className="flex align-center justify-center">
                    <div className="font-bold text-4xl flex ml-32 mt-32 h-max">
                        <button onClick={goBack}>&#11164;</button>
                    </div>
                    <div className="flex justify-center align-center mb-16 w-full">
                        <div className="bg-white w-2/3 flex justify-evenly py-8 rounded-lg">
                            <img src={allDataPaslon[currentIndex].url} alt="profil" className="bg-sky-300 w-1/4 h-80 rounded-lg object-cover" />
                            <div className="bg-white w-2/4">
                                <p className="font-bold">Nomor urut : {allDataPaslon[currentIndex].nomor}</p>
                                <h1 className="font-bold text-2xl text-red-950">{allDataPaslon[currentIndex].nama}</h1>
                                <p className="mt-2">Visi & Misi :</p>
                                {allDataPaslon[currentIndex].visiMisi.map((item, i) => (
                                    <ul className="list-disc list-inside" key={i}>
                                        <li>{item}</li>
                                    </ul>
                                ))}
                                <p className="mt-2">Koalisi :</p>
                                {partai.map((item, i) => {
                                    if (item.paslonId === allDataPaslon[currentIndex].nomor) {
                                        return (
                                            <ul className="list-disc list-inside" key={i}>
                                                <li>{item.nama}</li>
                                            </ul>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="font-bold text-4xl flex mr-32 mt-32 h-max">
                        <button onClick={goNext}>&#11166;</button>
                    </div>
                </div>
            </div>
            <Slogan slogan={`"Pilih berdasarkan hati nurani, kalau bingung gacha aja jangan serius-serius yang penting tidak melegalkan slot"`} />
            <Footer />
        </>
    );
}
