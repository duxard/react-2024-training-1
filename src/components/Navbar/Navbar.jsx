import { NavLink } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
    const linkClass = ({isActive}) => {
        return isActive ? `bg-black text-white px-3 py-2` : 'text-white px-3 py-2';
    };

    return (
        <div className="navbar">
            <NavLink to='/' className={linkClass}>Home</NavLink>
            <NavLink to='/jobs' className={linkClass}>Jobs</NavLink>
            <NavLink to='/info' className={linkClass}>Info</NavLink>
            <NavLink to='/job-add' className={linkClass}>Add Job</NavLink>
        </div>
    );
}

export default Navbar;