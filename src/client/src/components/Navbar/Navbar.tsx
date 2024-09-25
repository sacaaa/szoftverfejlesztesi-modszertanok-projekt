import { CgProfile } from "react-icons/cg";
import './Navbar.css';

export default function Navbar() {
    return (<>
        <nav className="navbar">
            <div className="navbar-left">
                <h1>EDUSTATS</h1>
            </div>
            <div className="navbar-center">
                <a href="#">Iskolák</a>
                <a href="#">Tanárok</a>
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