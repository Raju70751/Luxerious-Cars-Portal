import { IoCarSport } from "react-icons/io5";
import Cookies from 'js-cookie';
import { HeaderContainer, Title } from './styledComponent';

const Header = () => {

    const loginFunction = () => {
        Cookies.remove('jwt_token');
        window.location.href = '/login';
    }

    return (
        <header className="w-full bg-blue-600 p-4 text-white flex flex-row justify-start items-center">
            <IoCarSport className="m-2 text-2xl text-red-700" />
            <Title>Luxury Carz</Title>
            <div className="m-4 flex space-x-4 px-4 rounded radius-4 ">
                <select className="bg-blue-500 text-white p-1 rounded outline-none w-full sm:w-auto">
                    <option value="en">Banglore</option>
                    <option value="es">Hydrabad</option>
                    <option value="fr">Chennai</option>
                    <option value='Ch'>Mumbai</option>
                    <option value="en1">Vizayavada</option>
                    <option value="es2">Amaravathi</option>
                    <option value="fr3">Delhi</option>
                    <option value='Ch3'>Uttar Predesh</option>
                </select>
            </div>
            <div className="flex-1">
                <input
                    type="text"
                    placeholder="Search for cars, brands and more"
                    className="w-full sm:w-1/2 md:w-1/3 px-3 py-2 border rounded-md outline-none"
                />
            </div>
            <div className="mx-4">
                <select className="text-white font-bold w-47 p-1 border-none rounded outline-none hidden lg:block">
                    <option value="en" default >Used cars in Banglore</option>
                    <option value="es">Used cars in Hydrabad</option>
                    <option value="fr">Used cars in Chennai</option>
                    <option value='Ch'>Used cars in Mumbai</option>
                    <option value="en1">Used cars in Vizayavada</option>
                    <option value="es2">Used cars in Amaravathi</option>
                    <option value="fr3">Used cars in Delhi</option>
                    <option value='Ch3'>Used cars in Uttar Predesh</option>
                </select>
            </div>
            <button className="bg-blue-700 text-sm font-black text-blue-800 px-4 py-1 rounded hover:bg-red-800 transition-colors" onClick={() => loginFunction()}>
                Log Out
            </button>
        </header>
    );
}

export default Header