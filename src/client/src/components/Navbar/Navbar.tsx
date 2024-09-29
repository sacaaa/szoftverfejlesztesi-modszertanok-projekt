import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="Home"><h1>EDUSTATS</h1></Link>
            </div>
            <div className="navbar-center">
                <Link to="/teachers" className={location.pathname === '/teachers' ? 'active' : ''}>Tanárok</Link>
                <Link to="/schools" className={location.pathname === '/schools' ? 'active' : ''}>Iskolák</Link>
            </div>
            <Link to="/profilepage" className="profile-link">
                <div className="navbar-right">
                    <div className="profile">
                        <span className="profile-name">Kis Pista András</span>
                        <p className="profile-school">Debreceni Egyetem</p>
                    </div>
                    <CgProfile className="profile-img" />
                </div>
            </Link>
        </nav>
    );
}
