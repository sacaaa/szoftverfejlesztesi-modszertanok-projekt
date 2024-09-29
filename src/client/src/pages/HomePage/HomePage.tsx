import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import './HomePage.css';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className="homepage">
                <h1 className="title">EduStats</h1>
                <div className="description">
                    <p>
                        Fedezze fel a tanárok és iskolák értékelésének világát, 
                        ahol Önnek lehetősége van megosztani tapasztalatait és véleményét.
                    </p>
                    <p>
                        Célunk, hogy segítsük a diákokat abban, hogy véleményükkel 
                        hozzájáruljanak az oktatás minőségének javításához, 
                        és hogy a tanárok folyamatos fejlődésen mehessenek 
                        keresztül.
                    </p>
                </div>
                <div className="button-container">
                    <Link to="/teachers">
                        <button className="search-button">Tanár keresés</button>
                    </Link>
                    <Link to="/schools">
                        <button className="search-button">Iskola keresés</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
