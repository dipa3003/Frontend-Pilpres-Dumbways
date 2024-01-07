import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import dataPaslon from "../mocks/dataAddPaslon.json";
import { useEffect, useState } from "react";

type TDataPaslon = {
    url: string;
    nama: string;
    nomor: number;
    visiMisi: string[];
    koalisi: string[];
};

export default function PaslonPage() {
    const [data, setData] = useState<TDataPaslon[] | null>(null);

    useEffect(() => {
        setData(dataPaslon);
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex flex-col mb-16">
                <h1 className="text-lime-600 text-3xl text-center font-bold my-8">LIST PASLON</h1>
                <table className="table-auto border">
                    <thead>
                        <tr className="bg-gray-200 h-16">
                            <th className="w-24">No. Urut</th>
                            <th className="w-40">Image</th>
                            <th className="w-64">Nama</th>
                            <th className="w-96">Visi & Misi</th>
                            <th className="w-64">Koalisi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((item, i) => (
                                <tr className="border text-center mb-8 even:bg-gray-100" key={i}>
                                    <td>{item.nomor}</td>
                                    <td className="h-40">
                                        <img src={item.url} alt="img" className="h-40 w-full object-cover" />
                                    </td>
                                    <td>{item.nama}</td>
                                    <td className="text-justify pl-4">
                                        {item.visiMisi.map((visiMisi, i) => (
                                            <ul className="list-disc list-inside" key={i}>
                                                <li>{visiMisi}</li>
                                            </ul>
                                        ))}
                                    </td>
                                    <td className="text-justify pl-4">
                                        {item.koalisi.map((koalisi, i) => (
                                            <ul className="list-disc list-inside" key={i}>
                                                <li>{koalisi}</li>
                                            </ul>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-8">
                    <Link to="/add-paslon">
                        <p className="bg-lime-600 text-white font-semibold rounded-full px-6 py-2">Add Paslon</p>
                    </Link>
                </div>
            </div>
        </>
    );
}
