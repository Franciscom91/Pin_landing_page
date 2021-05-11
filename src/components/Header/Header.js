import React from 'react';
import Logo from '../../assets/img/top-logo.svg';
import { Link } from "react-scroll";


const Header = () => {
    return ( 
        <header className="header" id="header" >
            <div className="container">
                <Link
                className="logo"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}>
                <img src={Logo} alt="25Watts"/>
                </Link>
                <nav className="navbar">
                    <ul>
                        <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-96}
                        duration={500}
                        >Home</Link>
                        <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-96}
                        duration={500}
                        >About</Link>
                        <Link
                        activeClass="active"
                        to="products"
                        spy={true}
                        smooth={true}
                        offset={-96}
                        duration={500}
                        >Products</Link>
                        <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-96}
                        duration={500}
                        >Services</Link>
                        <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-96}
                        duration={500}
                        >Contact</Link>
                    </ul>
                </nav>
            </div>
        </header>

    );
}
 
export default Header;