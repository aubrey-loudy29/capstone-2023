import Divider from '@mui/material/Divider';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const Profile = ({currentUser}) => {
    const [users, setUsers] = useState([]);
    const [yourReviews, setYourReviews] = useState([{}])
    const [allReviews, setAllReviews] = useState([{}])

    const {username, reviews, appointments, email} = currentUser

    useEffect(() => {
        const fetchUsers = async () => {
        const resp = await fetch("/api/users");
        if (resp.ok) {
            const users = await resp.json();
            setUsers(users);
        }
        };
        fetchUsers();
        // window.location.reload(false);
    }, []);

    // delete review
    useEffect(() => {
        const fetchData = async () => {
        const data = await fetch("/api/reviews");
        setAllReviews(data.data);
    };
    fetchData();
    })

    const deleteYourReview = (review) => {
        setYourReviews(yourReviews.filter(r => r.id !== review.id))
        setAllReviews(allReviews.filter(r => r.id !== review.id))
    }

    const handleDelete = (review) => {
        fetch(`/api/reviews/${review.id}`, {
          method: 'DELETE'
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete review')
          }
          deleteYourReview(review)
          setUsers(users);
        })
        .catch(error => console.error(error))
        window.location.reload(false);
    }

    return (
        <div>
            <p id='locations-title'>
            <Divider />
               P R O F I L E
            <Divider />
            </p>
            <p id='profile-name' className='text-brown opacity-75'>
                Welcome {username}!
            </p>
            <div className='columns-2'>
            <div id='profile-boxes' className='bg-greige'>
                <p id='profile-title' className='underline underline-offset-8'> Your Reviews </p>
            {!reviews || reviews.length === 0 && <div>
               
                <p id='empty-profile' className='text-darkGray opacity-50'>You dont have any reviews</p>
                <Link to={"/reviews"}>
                    <button id='profile-button' className="btn bg-tan text-dark-gray rounded-[12px] opacity-50">Write a Review!</button>
                </Link>
            </div>}
            {reviews && reviews.map((r) => (
                    <div key={r.id} className="p-2">
                            <p id='profile-information'className="text-darkBlue text-left">•{r.text}</p> 
                            <button id='profile-delete' className="btn bg-brown text-greige rounded-[12px] opacity-50" onClick={() => handleDelete(r)}>Delete Review.</button>
                    </div>
            ))}
            </div>
            <div id='profile-boxes'className='bg-greige'>
                <p id='profile-title' className='underline underline-offset-8'> Your Appointments </p>
            {!appointments || appointments.length === 0 && <div>
               
                <p id='empty-profile' className='text-darkGray opacity-50'>You dont have any Appointments</p>
                <Link to={"/book"}>
                    <button id='profile-button' className="btn bg-tan text-dark-gray rounded-[12px] opacity-50">Book an Appointment!</button>
                </Link>
            </div>}
            {appointments && appointments.map((a) => (
                    <div key={a.id} className="p-2">
                            <p className="text-darkBlue">{a.stylist}</p> 
                    </div>
            ))}
            </div>
            
        </div>
        </div>
    )
}

export default Profile