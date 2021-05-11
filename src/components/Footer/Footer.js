import FooterLogo from '../../assets/img/footer-logo.svg';
import { Link } from "react-scroll";

const Footer = () => {
    return ( 
        <section className="footer">
            <p className="footer-copyright">2020 © All rights reserved.</p>
            <Link
                className="footer-logo"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}>
                <img src={ FooterLogo } alt="footer-logo" />
            </Link>
        </section>
     );
}
 
export default Footer;