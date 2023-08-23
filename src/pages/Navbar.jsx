import {NavLink} from "react-router-dom"
import logo from '../assets/logo.png'
import '../Styles/Navbar.css'



function Navbar() {
    const isActiveStyle = { textDecoration: "underline" };

    const menuItems = [
        { to: "/", label: "Accueil" },
        { to: "/about", label: "A Propos" },
    ];

    const menuItem = ({ to, label }) => (
        <li key={to}>
            <NavLink to={to} style={({ isActive }) => isActive ? isActiveStyle : undefined }>
                {label}
            </NavLink>
        </li>
    );

    return (
        <div className='navbar'>
            <h1>
                <img src={logo} alt='Logo du site Kasa' />
            </h1>
            <nav>
                <ul>{menuItems.map(menuItem)}</ul>
            </nav>
        </div>
    );
}

export default Navbar