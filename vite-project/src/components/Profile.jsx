import Divider from '@mui/material/Divider';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Profile = () => {
    const [users, setUsers] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
        const resp = await fetch("/api/users");
        if (resp.ok) {
            const users = await resp.json();
            setUsers(users);
        }
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchReviews= async () => {
        const resp = await fetch("/api/reviews");
        if (resp.ok) {
            const reviews = await resp.json();
            setReviews(reviews);
        }
        };
        fetchReviews();
    }, []);

    return (
        <div>
            <p id='locations-title'>
            <Divider />
               P R O F I L E
            <Divider />
            </p>
            <div>
            {users.length === 0 && <div>
               
                <p id='empty-cart' className='text-darkGray opacity-50'>You don't have any appointments booked.</p>
                <Link to={"/book"}>
                    <button id='empty-cart-button' className="btn bg-gray-100 text-dark-gray rounded-[12px] opacity-75 underline underline-offset-8">Book An Appointment</button>
                </Link>
            </div>}
            </div>
            <div>
            {reviews.length === 0 && <div>
               
                <p id='empty-cart' className='text-darkGray opacity-50'>You have not written any reviews.</p>
                <Link to={"/reviews"}>
                    <button id='empty-cart-button' className="btn bg-gray-100 text-dark-gray rounded-[12px] opacity-75 underline underline-offset-8">Add A Review</button>
                </Link>
            </div>}
            </div>
        </div>
    )
}

export default Profile