import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'

const Filter = () => {

    const getUserInfo = () => {
        const jwtToken = Cookies.get(jwt_token)
        console.log(jwtToken)

    }
    return (
        <div className='h-12 w-full flex flex-row justify-between items-center  bg-blue-200 mx-0'>
            <div className=" flex flex-row justify-start items-center   p-4 gap-4">
                <Link to="/" className="text-gray-900 text-sm font-bold hover:text-blue-700 transition-colors">
                    Home
                </Link>
                <Link to="/save-list" className="text-gray-900 text-sm font-bold hover:text-blue-700 transition-colors">
                    Save List
                </Link>
                <Link to="/orders" className="text-gray-900 text-sm font-bold hover:text-blue-700 transition-colors">
                    Orders
                </Link>
                <Link to="/user-info" className="text-gray-900 text-sm font-bold hover:text-blue-700 crusor-pointer transition-colors" onClick={getUserInfo}>
                    User Info
                </Link>
            </div>
            <div className="mx-4 flex flex-col justify-start item-start hidden md:block">
                <p className="ml-4 text-black">call us at</p>
                <p className="font-bold text-black ">1800-123-4567</p>
            </div>

        </div>

    );
};

export default Filter;
