import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { FiLogIn } from "react-icons/fi";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const token = Cookies.get('jwt_token');
        if (token) {
            window.location.href = '/';
        }
    }, []);

    const navigateToLoginFunction = () => {
        window.location.href = '/login'
    }


    const submitEvent = async (event) => {
        event.preventDefault();

        if (!username || !password || !email) {
            alert("Please enter both email and password");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                username: username,
                email: email,
                password: password
            });

            // Login success
            const token = response.data.token;

            Cookies.set("jwt_token", token, { expires: 1 });

            window.location.href = "/";
        }
        catch (error) {

            // User not found
            if (error.response && error.response.status === 404) {
                alert("User not found. Redirecting to Register page...");
                window.location.href = "/register";
                return;
            }

            // Wrong password
            if (error.response && error.response.status === 401) {
                alert("Incorrect password");
                return;
            }

            alert("Server error. Try again later.");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900">
            <h2 className='text-2xl text-white mb-10'>Luxurious <span className='text-4xl font-bold underline text-red-500'>Cars</span></h2>
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <div className="flex flex-row justify-center items-center mb-4">
                    <h2 className="text-2xl text-blue-500 font-bold mb-6 text-center cursor-pointer" onClick={navigateToLoginFunction}>Login</h2>
                    <FiLogIn className="text-black text-2xl mb-6 mx-2 cursor-pointer" onClick={navigateToLoginFunction} />
                </div>

                <form onSubmit={submitEvent}>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">USER NAME</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border text-blue-500 rounded"
                            placeholder="user name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border text-blue-500 rounded"
                            placeholder="email@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">PASSWORD</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border text-blue-500 rounded"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
