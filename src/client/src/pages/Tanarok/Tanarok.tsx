import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Teacher_list_item from "../../components/Teacher_list_item/Teacher_list_item";
import { Link } from "react-router-dom";

interface Teacher {
    id: number;
    title: string;
    first_name: string;
    last_name: string;
    email: string;
    birth_date: string;
    school: number;
    reviews: number[];
    avg_rate: number | null;
}

export default function Tanarok() {

    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [schools, setSchools] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/teachers/'); // Helyes végpont
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData: Teacher[] = await response.json();
                setTeachers(jsonData);
            } catch (error) {
                console.log('Error fetching data: ', error);
            }
        }
    
        const fetchSchools = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/schools/'); // Trailing slash
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const schoolsData = await response.json();
                const schoolMap: { [key: number]: string } = {};
                
                schoolsData.forEach((school: { id: number; name: string }) => {
                    schoolMap[school.id] = school.name;
                });
        
                setSchools(schoolMap);
            } catch (error) {
                console.error('Error fetching schools:', error);
            }
        };

        fetchTeachers();
        fetchSchools();
    }, []);
    
    const getSchoolNameById = (schoolId: number) => {
        return schools[schoolId] || 'Ismeretlen Iskola';
    };

    return (
        <>
            <Navbar />
            <Searchbar />
            {teachers.map((teacher) => (
                <Link 
                    to={`/tanarprofil/${teacher.id}`} // Dinamikus útvonal az ID alapján
                    key={teacher.id}
                    className="link-decoration"
                >
                    <Teacher_list_item
                        name={`${teacher.title} ${teacher.first_name} ${teacher.last_name}`}
                        school={getSchoolNameById(teacher.school)}
                        rating={teacher.avg_rate !== null ? teacher.avg_rate.toFixed(2) : "N/A"}
                    />
                </Link>
            ))}
        </>
    );
}
