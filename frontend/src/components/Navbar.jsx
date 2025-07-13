import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="flex justify-around items-center bg-gray-800 text-white px-8 py-4 shadow-md">
                <div className="font-extralight text-gray-100 text-xl">
                    Welcome to My Portfolio!
                </div>
                <div className="flex gap-8">
                    <Link to="/" className="hover:text-blue-400 text-xl font-semibold">Home</Link>
                    <Link to="/About" className="hover:text-blue-400 text-xl font-semibold">About</Link>
                    <Link to="/Projects" className="hover:text-blue-400 text-xl font-semibold">Projects</Link>
                    <Link to="/Contact" className="hover:text-blue-400 text-xl font-semibold">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;