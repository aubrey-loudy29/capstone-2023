import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom'

const Submitted = () => {
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
                <p id='submission-text' className='text-blue'>
                    Thank you for your submission. 
                    We will reach out to you shortly!
                </p>
                <button id='review-button' onClick={refresh} className='btn hover:opacity-100 bg-greige opacity-75 rounded-[12px]'>Back to Home</button>
            </div>
        </div>
    )
}

export default Submitted