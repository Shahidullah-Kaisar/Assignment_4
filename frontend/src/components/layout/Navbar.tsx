import { useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <>
      <nav className="bg-green-600 text-white font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold">
              <Link to="/" className="flex justify-center items-center gap-2"><FaBookOpen/>Minimal Library</Link>
            </div>

            <div className="space-x-4 hidden md:flex">
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  isActive ? "underline font-semibold" : "hover:underline"
                }
              >
                All Books
              </NavLink>
              <NavLink
                to="/create-book"
                className={({ isActive }) =>
                  isActive ? "underline font-semibold" : "hover:underline"
                }
              >
                Add Book
              </NavLink>
              <NavLink
                to="/borrow-summary"
                className={({ isActive }) =>
                  isActive ? "underline font-semibold" : "hover:underline"
                }
              >
                Borrow Summary
              </NavLink>
            </div>

            {/* Mobile Menu*/}
            <div className="md:hidden">
          
              <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-700 text-white z-50 transform ${
                  menuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out`}
              >
                <div className="p-4 text-xl font-bold border-b border-green-500">
                  📚 Minimal Library
                </div>
                <div className="flex flex-col p-4 space-y-4">
                  <NavLink
                    to="/books"
                    className={({ isActive }) =>
                      isActive ? "underline font-semibold" : "hover:underline"
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    All Books
                  </NavLink>
                  <NavLink
                    to="/create-book"
                    className={({ isActive }) =>
                      isActive ? "underline font-semibold" : "hover:underline"
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    Add Book
                  </NavLink>
                  <NavLink
                    to="/borrow-summary"
                    className={({ isActive }) =>
                      isActive ? "underline font-semibold" : "hover:underline"
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    Borrow Summary
                  </NavLink>
                </div>
              </div>

              <span className="text-xl">
                {
                  menuOpen ? <RxCross2 onClick={() => setMenuOpen(false)}/> : <IoMdMenu onClick={() => setMenuOpen(true)} /> 
                }
                
              </span>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
