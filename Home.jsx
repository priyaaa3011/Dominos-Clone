import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-black text-white w-full min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-black text-white w-full min-h-screen font-sans">
        <div className="absolute inset-0">
          
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl space-y-6 bg-blue bg-opacity-80 p-6 rounded-xl backdrop-blur-md">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Hot & Fresh Pizza,
              <br />
              <span className="text-yellow-300">Delivered Fast!</span>
            </h1>
            <p className="text-lg sm:text-xl text-white-800 drop-shadow-md">
              Satisfy your cravings with Domino’s – fresh ingredients, cheesy goodness, and fast delivery right at your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                to="/order"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-lg transition duration-300 shadow-md hover:scale-105"
              >
                🍕 Order Now
              </Link>
              <Link
                to="/menu"
                className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-lg text-lg transition duration-300 shadow-md hover:scale-105"
              >
                📋 View Menu
              </Link>
            </div>
            <Outlet />
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <img
              src="https://i.pinimg.com/474x/ff/66/f5/ff66f542c57a44b5cfa0ae7647c55727.jpg"
              alt="Domino's Pizza"
              className="w-[400px] rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Pizza */}
      <section className="my-20 flex flex-col items-center px-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl text-center">
            
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
            Your Favorite Slice Awaits
          </h2>
          <img
            className="w-full max-w-md mx-auto rounded-xl shadow-md transform hover:scale-105 transition duration-300"
            src="https://i.pinimg.com/736x/ea/63/dd/ea63ddc23f99edc4fb849e3e324e4eb5.jpg"
            alt="Tasty Pizza"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black py-20 text-center px-4 shadow-inner">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-6">
            Hungry Yet?
          </h2>
          <p className="text-lg sm:text-2xl text-gray-200 mb-8">
            Dive into our flavorful world of pizzas, sides, and desserts – all in just a few clicks.
          </p>
          <Link
            to="/menu"
            className="inline-block px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-full shadow-md hover:scale-105 transition duration-300"
          >
            🍽️ Browse Full Menu
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
