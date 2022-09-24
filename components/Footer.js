import Link from "next/link";


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_menu">
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/about"><a>About Us</a></Link></li>
                        <li><Link href="/locations"><a>Locations</a></Link></li>
                        <li><Link href="/hotels"><a>Hotels</a></Link></li>
                        <li><Link href="/mice"><a>Mice</a></Link></li>
                        <li><Link href="/food-service"><a>Corporate Catering</a></Link></li>
                        <li><Link href="/"><a>Cab Service</a></Link></li>
                        <li><Link href="/"><a>Flight service</a></Link></li>
                        <li><Link href="/contact"><a>Contact Us</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-center copyright">
                <p>Copyright © keytrips.in All right reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;