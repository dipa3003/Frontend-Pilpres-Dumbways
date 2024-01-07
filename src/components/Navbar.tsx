import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-slate-900 text-white py-6 px-36 flex flex-row justify-between">
            <div className="flex gap-5 flex-row">
                <img src="dumbways-logo.png" alt="logo" className="w-10 rounded-full object-cover" />
                <Link to="/" className="font-bold">
                    PEMILU PRESIDEN DUMBWAYS.ID
                </Link>
            </div>
            <div className="flex gap-5 flex-row">
                <Link to="/partai">Partai</Link>|<Link to="/paslon">Paslon</Link>|<Link to="/vote">Voting</Link>
                <Link to="/login" className="bg-white text-black px-3 py-1 rounded-md font-bold">
                    Login
                </Link>
            </div>
        </nav>
    );
}
