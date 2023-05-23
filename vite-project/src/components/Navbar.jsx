import { Link } from "react-router-dom"
import small from '../assets/small.png';
import '../../tailwind.config'

const Navbar = () => {
    return (
        <div className="top-0 flex flex-row space-x-5 ">
            <img id='nav-logo' src={small} alt='small logo' />
            <Link to={"/"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Home</button>
            </Link>
            <Link to={"/stylists"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Stylists</button>
            </Link>
            <Link to={"/locations"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Locations</button>
            </Link>
            <Link to={"/services"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Services</button>
            </Link>
            <Link to={"/gallery"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Gallery</button>
            </Link>
            <Link to={"/products"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Products</button>
            </Link>
            <Link to={"/book"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Book an Appointment</button>
            </Link>
            <Link to={"/cart"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Cart</button>
            </Link>
            <Link to={"/profile"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Profile</button>
            </Link>
            <Link to={"/login"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Login</button>
            </Link>
        </div>
    )
}

export default Navbar