
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center items-center align-middle p-auto'>
            <h1>Opps!!!!</h1>
            <Link className='btn btn-primary ' to={"/"}>Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;