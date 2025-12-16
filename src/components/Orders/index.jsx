import Header from '../Header';
import Filter from '../Filter';

const Orders = () => {
    return (
        <div className="bg-gray-100  h-screen w-screen flex flex-col items-center justify-start">
            <Header />
            <Filter />
            <h2 className="text-gray-900 m-2 text-2xl font-bold">
                Cart Items
            </h2>
        </div>
    );
}

export default Orders;