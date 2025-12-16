import Header from '../Header';
import Filter from '../Filter';
import ContextProvider from '../../context/Context'

const SaveList = () => {
    return (
        <ContextProvider.Consumer>
            {value => {
                const { savedList } = value
                console.log(savedList)
                return (<div className="bg-gray-100  h-screen w-screen flex flex-col items-center justify-start">
                    <Header />
                    <Filter />
                    {
                        savedList.length === 0 ? (<h2 className="text-gray-900 m-2 mt-70 text-2xl font-bold">
                            Your SaveList is Empty...
                        </h2>) : savedList.map((car, index) => (
                            <div key={index} className='bg-white h-auto md:h-100 w-full mt-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-start items-start p-4'>
                                <img
                                    src={car.image_url}
                                    alt={`${car.brand} ${car.model}`}
                                    className='h-full w-[400px] sm:h-[180px] md:h-[200px] object-cover rounded-md'
                                />
                                <div className='p-4'>
                                    <h2 className='text-xl mt-2 font-bold text-blue-800'>
                                        Brand: {car.brand}
                                    </h2>
                                    <p className='text-gray-900 m-1'>Model: {car.model}</p>
                                    <p className='text-gray-600 m-1'>Year: {car.year}</p>
                                    <p className='text-gray-600 m-1'>Price: ₹{car.price}</p>
                                    <p className='text-black-500 m-1 font-bold'>Fuel-Type: {car.fuel_type} </p>
                                    <p className='text-black-500 m1 '>Posted at: {car.posted_at}</p>
                                </div>
                            </div>
                        ))}

                </div>)
            }}

        </ContextProvider.Consumer>

    );
}

export default SaveList;