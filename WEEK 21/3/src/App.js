import { useState } from 'react';
import { NavLinks } from './navlink';
import { Link } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState(0);
  const [addedProducts, setAddedProducts] = useState({});

  const toggleCart = (productId) => {
    setAddedProducts((prevState) => {
      const newState = { ...prevState };
      if (newState[productId]) {
        newState[productId] = false;
        setCart((prevCart) => prevCart - 1);
      } else {
        newState[productId] = true;
        setCart((prevCart) => prevCart + 1);
      }
      return newState;
    });
  };

  const products = [
    { id: 1, name: "Fancy Product", price: "$40.00 - $80.00" },
    { id: 2, name: "Special item", price: "$18.00" },
    { id: 3, name: "Sale Item", price: "$25.00" },
    { id: 4, name: "Popular item", price: "$40.00" },
    { id: 5, name: "Fancy Product", price: "$90.00" },
    { id: 6, name: "Popular item", price: "$60.00 - $90.00" },
    { id: 7, name: "Favorite item", price: "$80.00 - $90.00" },
    { id: 8, name: "Good item", price: "$80.00" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
        <div className="flex items-center ml-10 p-4">
          <div className="text-2xl font-bold text-green-600 cursor-pointer md:w-auto w-full">
            <span>StartBootstrap</span>
          </div>

          <ul className="hidden md:flex ml-5 font-light sentencecase items-center gap-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <li>
              <Link to="/" className="py-7 px-3 inline-block">Home</Link>
            </li>
            <NavLinks />
            <li>
              <Link to="/" className="py-7 px-3 inline-block">About</Link>
            </li>
            <li>
              <Link to="/" className="py-3 px-3 inline-block border-black border rounded-lg bg-black text-white">Cart: {cart}</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <div className="mt-28 h-96 bg-black flex flex-col justify-center items-center">
          <h1 className="text-white font-extrabold text-6xl">Shop in style</h1>
          <p className="text-white text-2xl font-light p-4">With this shop homepage template</p>
        </div>

        <div className="p-24 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-solid border-neutral-500 rounded-lg m-2 w-64">
                <div className="flex flex-col justify-center items-center bg-gray-300 p-14 h-36 rounded-lg">
                  <div className="bg-gray-300 rounded-lg text-center font-light text-2xl">400 x 250</div>
                </div>

                <div className="bg-white flex flex-col justify-between items-center p-12 rounded-lg">
                  <h1 className="font-bold text-lg">{product.name}</h1>
                  <h2 className="pt-2">{product.price}</h2>
                </div>

                <div className="grid justify-items-center mt-0 pb-10">
                  <button
                    className={`border border-solid border-neutral-500 p-3 rounded-lg mt-auto hover:bg-black hover:text-white ${addedProducts[product.id] ? 'bg-lime-300 border-lime-300 font-bold' : ''
                      }`}
                    onClick={() => toggleCart(product.id)}
                  >
                    {addedProducts[product.id] ? 'Remove from cart' : 'Add to cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className='bg-black text-white grid justify-items-center items-center p-16 text-2xl font-bold'>
        SivaKavindra@2024
      </footer>
    </>
  );
}

export default App;
