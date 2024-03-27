import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/listedBooks'}>Listed Books</NavLink></li>
        <li><NavLink to={'/pagesToRead'}>Pages To Read</NavLink></li>
        <li><NavLink to={'/contribute'}>Contribute</NavLink></li>
        <li><NavLink to={'/community'}>Community</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 mt-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul id="sidebar" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <Link to={'/'} >
    <a className="btn btn-ghost text-xl lg:text-3xl font-bold">Book Vibe</a>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul id="sidebar" className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    <a className="btn bg-[#23BE0A] hover:bg-[#23BE0A]/[.90] text-white px-3 lg:px-6 lg:py-3">Sign In</a>
    <a className="btn bg-[#59C6D2] hover:bg-[#59C6D2]/[.90] text-white px-3 lg:px-6 lg:py-3">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;