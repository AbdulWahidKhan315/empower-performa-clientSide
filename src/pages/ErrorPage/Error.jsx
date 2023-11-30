import { Link } from 'react-router-dom';
import error from '../../assets/images/error.jpg'

const Error = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-evenly'>
            <img className='h-screen border' src={error} alt="" />
            <Link to='/'>
                <button className='btn px-20 bg-lime-400'>Go Home</button>
            </Link>
        </div>
    );
};

export default Error;