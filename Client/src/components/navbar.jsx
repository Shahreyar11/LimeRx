import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  
  const navigate = useNavigate()

  useEffect(() => {

    async function fetchUser() {

      try {

        const response = await fetch(
          "http://localhost:3000/me",
          {
            credentials: "include"
          }
        );

        if (response.ok) {

          const data = await response.json();

          setUser(data);
        }

      }
      catch (error) {

        console.log(error);

      }

    }

    fetchUser();

  }, []);

  const handleLogout = async () => {

    try {

      await fetch(
        "http://localhost:3000/logout",
        {
          method: "POST",
          credentials: "include"
        }
      );

      setUser(null);

      navigate("/");

    }
    catch (error) {

      console.log(error);

    }

  };

  return (
    <nav className="bg-white px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-8">

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 lg:hidden hover:text-purple-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-8 text-slate-600 font-medium">
            <Link to="/" className="hover:text-purple-600">
              Home
            </Link>

            <Link to="/" className="hover:text-purple-600">
              About Us
            </Link>

            <Link to="/" className="hover:text-purple-600">
              Blog
            </Link>
          </div>

        </div>

        <div className="flex items-center gap-6 font-medium">

          <Link
            to="/ask"
            className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
            LimerxAI
          </Link>

          {user ? (

            <>
              <span className="text-slate-700 font-semibold">
                Hi, {user.username}
              </span>

              <button
                onClick={handleLogout}
                className="text-red-500 border border-red-500 px-4 py-2 rounded-full hover:bg-red-50"
              >
                Logout
              </button>
            </>

          ) : (

            <>
              <Link
                to="/login"
                className="text-slate-600 hover:text-purple-600 transition-colors hidden sm:block"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="text-pink-500 border border-pink-500 px-5 py-2 rounded-full hover:bg-pink-50 transition-all active:scale-95"
              >
                Sign up
              </Link>
            </>

          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;