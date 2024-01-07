import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const PartaiPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col mb-16">
                <h1 className="text-lime-600 text-3xl text-center font-bold my-8">LIST PARTAI</h1>
                <table className="table-auto border">
                    <thead>
                        <tr className="bg-gray-200 h-16">
                            <th className="w-24">No. Urut</th>
                            <th className="w-40">Image</th>
                            <th className="w-64">Ketua Umum</th>
                            <th className="w-96">Visi & Misi</th>
                            <th className="w-64">Alamat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border text-center mb-8 even:bg-gray-100">
                            <td>1</td>
                            <td className="h-40">
                                <img src="paslon.jpg" alt="img" className="h-40 w-full object-cover" />
                            </td>
                            <td>sintia muailono</td>
                            <td className="text-justify pl-4">
                                <ul className="list-disc list-inside">
                                    <li>Gratis wifi setahun bos</li>
                                    <li>Gratis wifi setahun bos</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus repellat quaerat provident doloremque asperiores quisquam similique aspernatur voluptatibus fuga! Facere.</li>
                                </ul>
                            </td>
                            <td className="text-justify pl-4">Jl. rambutan raya, Jakarta Utara</td>
                        </tr>
                        <tr className="border text-center mb-8 even:bg-gray-100">
                            <td>1</td>
                            <td className="h-40">
                                <img src="paslon.jpg" alt="img" className="h-40 w-full object-cover" />
                            </td>
                            <td>sintia muailono</td>
                            <td className="text-justify pl-4">
                                <ul className="list-disc list-inside">
                                    <li>Gratis wifi setahun bos</li>
                                    <li>Gratis wifi setahun bos</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus repellat quaerat provident doloremque asperiores quisquam similique aspernatur voluptatibus fuga! Facere.</li>
                                </ul>
                            </td>
                            <td className="text-justify pl-4">Jl. rambutan raya, Jakarta Utara</td>
                        </tr>
                        <tr className="border text-center mb-8 even:bg-gray-100">
                            <td>1</td>
                            <td className="h-40">
                                <img src="paslon.jpg" alt="img" className="h-40 w-full object-cover" />
                            </td>
                            <td>sintia muailono</td>
                            <td className="text-justify pl-4">
                                <ul className="list-disc list-inside">
                                    <li>Gratis wifi setahun bos</li>
                                    <li>Gratis wifi setahun bos</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus repellat quaerat provident doloremque asperiores quisquam similique aspernatur voluptatibus fuga! Facere.</li>
                                </ul>
                            </td>
                            <td className="text-justify pl-4">Jl. rambutan raya, Jakarta Utara</td>
                        </tr>
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
