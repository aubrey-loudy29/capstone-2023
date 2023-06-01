import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const CheckedOut = ({currentUser}) => {
    const navigate = useNavigate();

    const refresh = () => {
        navigate(`/`)
        window.location.reload(false);
    }
    
    return (
        <div>
            <p id='locations-title'>
            <Divider />
               THANK YOU!
            <Divider />
            </p>
            <div id='checked-form' className="columns-1 justify-items-start p-2 bg-lightBlue rounded">
                <p id='checked-text' className='text-blue'>
                    Thank you for your purchase, {currentUser.username}. 
                    Please check your email for a shipping confirmation!
                </p>
                <button id='review-button' onClick={refresh} className='btn bg-greige opacity-75 rounded-[12px]'>Back to Home</button>
            </div>
        </div>
    )
}

export default CheckedOut