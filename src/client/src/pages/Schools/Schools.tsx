import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import SchoolCard from "../../components/School_list/SchoolCard";
import { Link } from "react-router-dom";
import './Schools.css';
import Footer from "../../components/Footer/Footer";

interface School {
    id: number;
    name: string;
    logo: string;
}

export default function Schools() {
    const [schools, setSchools] = useState<School[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/schools/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                setSchools(jsonData);
            } catch (error) {
                console.error('Error fetching schools:', error);
            }
        };

        fetchSchools();
    }, []);

    return (
        <>
            <Navbar />
            <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchType="school" />
            <div className="school-list">
                {schools
                    .filter(school => school.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((school) => (
                        <Link
                            key={school.id}
                            to={`/schoolprofile/${school.id}`} 
                            state={{ name: school.name }} 
                            className="link-decoration"
                        >
                            <SchoolCard name={school.name} logo={school.logo} />
                        </Link>
                    ))}
            </div>
            <Footer />
        </>
    );
}
