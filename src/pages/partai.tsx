import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import dataPartai from "../mocks/dataAddPartai.json";
import { useEffect, useState } from "react";

type TDataPartai = {
    nama: string;
    ketua: string;
    visiMisi: string[];
    alamat: string;
    image: string;
    paslonId: number;
};

const PartaiPage = () => {
    const [data, setData] = useState<TDataPartai[] | null>(null);

    useEffect(() => {
        setData(dataPartai);
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex flex-col mb-16">
                <h1 className="text-lime-600 text-3xl text-center font-bold my-8">LIST PARTAI</h1>
                <table className="table-auto border">
                    <thead>
                        <tr className="bg-gray-200 h-16">
                            <th className="w-24">No. Paslon</th>
                            <th className="w-40">Image</th>
                            <th className="w-64">Ketua Umum</th>
                            <th className="w-96">Visi & Misi</th>
                            <th className="w-64">Alamat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((item, i) => (
                                <tr className="border text-center mb-8 even:bg-gray-100" key={i}>
                                    <td>{item.paslonId}</td>
                                    <td className="h-40">
                                        <img src={item.image} alt="img" className="h-40 w-full object-cover" />
                                    </td>
                                    <td>{item.nama}</td>
                                    <td className="text-justify pl-4">
                                        {item.visiMisi.map((result, i) => (
                                            <ul className="list-disc list-inside" key={i}>
                                                <li>{result}</li>
                                            </ul>
                                        ))}
                                    </td>
                                    <td className="text-justify pl-4">{item.alamat}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-8">
                    <Link to="/add-partai">
                        <p className="bg-lime-600 text-white font-semibold rounded-full px-6 py-2">Add Partai</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PartaiPage;
