import Link from "next/link";
import ActiveLink from "../utils/ActiveLink";

const Header = () => {
    return(
        <header>
            <div className="d-flex justify-content-between top_header">
                <div><a href="#"><i className="fa fa-mobile"></i> +91 9654 377 137</a></div>
                <div><a href="mailto: bookings@keytrips.in"><i className="fa fa-envelope"></i> bookings@keytrips.in</a></div>
            </div>
            <div className="main_logo">
                <Link href="/"><a><img src="/logo.svg" /></a></Link>
            </div>

            <div className="main_menu">
                <ul>
                    <li><ActiveLink activeClassName="active" href="/"><a>Home</a></ActiveLink></li>
                    <li><ActiveLink activeClassName="active" href="/about"><a>About Us</a></ActiveLink></li>
                    <li><ActiveLink activeClassName="active" href="/locations"><a>Locations</a></ActiveLink></li>
                    <li><ActiveLink activeClassName="active" href="/hotels"><a>Hotels</a></ActiveLink></li>
                    {/* <li><ActiveLink activeClassName="active" href="/"><a>Services</a></ActiveLink></li> */}
                    <li><ActiveLink activeClassName="active" href="/contact"><a>Contact Us</a></ActiveLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;