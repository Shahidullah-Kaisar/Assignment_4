import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="bg-green-600 text-white font-bold">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between h-16 items-center">

            <div className="text-xl font-bold">
              <Link to="/">📚Your Library</Link>
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
              {/* You can implement mobile menu toggle logic here later */}
              <span className="text-xl"><IoMdMenu /></span>
            </div>

          </div>

        </div>

      </nav>
    </>
  );
};

export default Navbar;
