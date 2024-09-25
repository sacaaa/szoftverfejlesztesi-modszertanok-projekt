import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (<>
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="Home"><h1>EDUSTATS</h1></Link>
            </div>
            <div className="navbar-center">
                <Link to="/tanarok">Tanárok</Link>
                <Link to="/">Iskolák</Link>
            </div>
            <div className="navbar-right">
                <div className="profile">
                    <span>Kis Pista András</span>
                    <p>XY általános iskola és kollégium</p>
                </div>
                <CgProfile className="profile-img"/>
            </div>
        </nav>
    </>)
}