import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  // const toggle = document.getElementById('toggle')
  // toggle.onclick= function(){
  //   toggle.classList.toggle('active')
  // }
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    var element = document.getElementById("toggle");
    var drawerElement = document.getElementById("drawer");
    if (!toggle) {
      element.classList.add("active");
      drawerElement.classList.add("active");
      console.log("added");
    } else {
      element.classList.remove("active");
      drawerElement.classList.remove("active");
      console.log("removed");
    }
  };

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
            ? " active active-links"
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
            ? " active active-links"
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
            ? " active active-links"
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
          <div
            id="toggle"
            onClick={() => {
              setToggle(!toggle);
              handleToggle(toggle);
            }}
          ></div>
          <h2 id="logo" className="primary logo">
            Taste now
          </h2>
        </div>
        <div className="nav-2">
          <div className="navlinks">{navlinks}</div>
          <MdOutlineShoppingCart className="icons" />
          <button className="button mid-btn hidden">Sign up</button>
        </div>
      </nav>
      <div id="drawer">
        <Link to={'/'}>
        <h2 id="logo" className="white menu-logo">
          Taste now
        </h2>
        </Link>
        <div className="drawer-navs">

        {navlinks}
        </div>
        <div  className="menu-button">

        <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
