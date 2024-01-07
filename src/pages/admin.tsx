import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import allDataPaslon from "../mocks/dataAddPaslon.json"; //NNTI DIGANTI DATA DR API FETCH (GET DATA PASLON)
import votePaslon from "../mocks/dataPaslon.json";
import { TDataAdmin } from "../types/admin";

const AdminPage = () => {
    const [data, setData] = useState<TDataAdmin[] | null>(null);

    useEffect(() => {
        setData([allDataPaslon, votePaslon]);
    }, []);
    console.log(data); // HRS DIHAPUS GA DIGUNAIN

    let totalVote: number = 0; //DATA TOTAL VOTES
    votePaslon.map((item) => {
        if (item.vote) {
            totalVote += item.vote;
        }
    });
    console.log({ totalVote });

    return (
        <>
            <Navbar />
            <div className="bg-gray-200 mx-36 mb-44 py-8">
                <h1 className="text-lime-600 text-3xl text-center font-bold my-8">DASHBOARD ADMIN</h1>

                <div className="flex justify-center">
                    {allDataPaslon &&
                        allDataPaslon.map((item, i) => (
                            <div className="flex" key={i}>
                                <div className=" bg-white w-64 m-2 p-2 rounded-lg active:bg-yellow-200 ">
                                    <img src={item.url} alt="img" className="h-44 object-cover w-full" />
                                    <p className="font-semibold">Paslon {item.nomor}</p>
                                    <h1 className="text-xl font-bold">{item.nama.toUpperCase()}</h1>
                                    {votePaslon.map((result, i) => {
                                        if (result.nomorPaslon === item.nomor) {
                                            return (
                                                <div key={i}>
                                                    <p>Akumulasi: {(result.vote / totalVote) * 100}%</p>
                                                    <p>Votes: {result.vote}</p>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        ))}
                </div>

                <h1 className="text-lime-600 text-3xl text-center font-bold my-8">LIST VOTER</h1>
                <table className="table-auto border border-slate-400 m-auto ">
                    <thead>
                        <tr className="bg-gray-200 h-16 border border-slate-400 ">
                            <th className="w-24">No.</th>
                            <th className="w-64">Nama</th>
                            <th className="w-64">Alamat</th>
                            <th className="w-64">Jenis Kelamin</th>
                            <th className="w-64">Paslon</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-slate-400 h-16 text-center mb-8 odd:bg-gray-100">
                            <td>1</td>
                            <td>Aziz Union</td>
                            <td>Jakarta Utara sonoan dikit</td>
                            <td>Laki-laki</td>
                            <td>Sinti maimuloh</td>
                        </tr>
                        <tr className="border border-slate-400 h-16 text-center mb-8 odd:bg-gray-100">
                            <td>1</td>
                            <td>Aziz Union</td>
                            <td>Jakarta Utara sonoan dikit</td>
                            <td>Laki-laki</td>
                            <td>Sinti maimuloh</td>
                        </tr>
                        <tr className="border border-slate-400 h-16 text-center mb-8 odd:bg-gray-100">
                            <td>1</td>
                            <td>Aziz Union</td>
                            <td>Jakarta Utara sonoan dikit</td>
                            <td>Laki-laki</td>
                            <td>Sinti maimuloh</td>
                        </tr>
                    </tbody>
                </table>
                <p className="bg-red-200 w-max m-auto mt-8 font-semibold text-lg">Total suara: {totalVote} votes</p>
            </div>
        </>
    );
};

export default AdminPage;
