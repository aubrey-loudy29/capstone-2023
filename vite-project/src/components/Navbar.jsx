import { Link } from "react-router-dom"
import small from '../assets/small.png';
import '../../tailwind.config'

const Navbar = () => {
    
    return (
        <div id='navbar' className=" bg-white bg-opacity-50 flex flex-row space-x-5 top-0 left-0 right-0 ">
            <img id='nav-logo' src={small} alt='small logo' />
            <div id='nav-button-group' className="space-x-4">
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
            <Link to={"/cart"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Cart</button>
            </Link>
            <Link to={"/book"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Book an Appointment</button>
            </Link>
            <Link to={"/profile"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Profile</button>
            </Link>
            <Link to={"/login"}>
                <button id='nav-button' className="btn bg-gray-100 rounded-[12px] underline underline-offset-8">Logout</button>
            </Link>
            </div>
        </div>
    )
}

export default Navbar