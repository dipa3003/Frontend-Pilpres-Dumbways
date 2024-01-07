export default function Footer() {
    return (
        <>
            <footer className="bg-slate-900 text-white py-6 flex flex-col gap-4">
                <div className="flex flex-row mx-36 gap-5 mb-1 ">
                    <img src="dumbways-logo.png" alt="logo" className="w-12 rounded-full object-cover" />
                    <div>
                        <p>DUMBWAYS.ID</p>
                        <p className="opacity-50">Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tanggerang Selatan, Banten 15413</p>
                    </div>
                </div>
            </footer>
            <p className="bg-slate-900 text-white mt-0.5 py-6 text-center">Komisi Pemilihan Umum DumbWays.Id | Created by Dipa Galatian | 2023</p>
        </>
    );
}
