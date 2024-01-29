import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active active-links"
            : "hover:primary  inactive-links"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ?" active active-links"
            : "hover:primary  inactive-links"
        }
      >
        About us
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ?" active active-links"
            : "hover:primary  inactive-links"
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact-us"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ?" active active-links"
            : "hover:primary  inactive-links"
        }
      >
        Contact us
      </NavLink>
      
    </>
  );
  return (
    <div className="navbar">
      <nav className="nav-items">
        <div className="nav-1">
          <h2 id="logo" className="primary logo">
            Taste now
          </h2>
        </div>
        <div className="nav-2">
            {navlinks}
            <MdOutlineShoppingCart className="icons" />
            <button className="button mid-btn">Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
