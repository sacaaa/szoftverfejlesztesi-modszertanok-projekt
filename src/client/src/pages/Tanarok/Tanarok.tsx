import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Teacher_list_item from "../../components/Teacher_list_item/Teacher_list_item";
import { Link } from "react-router-dom";

interface Teacher {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    birth_date: string;
    school: number;
}

export default function Tanarok() {

    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [schools, setSchools] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/students/'); // Ensure trailing slash
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
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

    return (<>
    <Navbar />
    <Searchbar />
    {teachers.map((teacher) => (
        <Link to={{ pathname: `/tanarprofil`,}}
            state={{
                id: teacher.id,
                name: `${teacher.first_name} ${teacher.last_name}`,
                school: getSchoolNameById(teacher.school),
                email: `${teacher.email}`,
                birthdate: `${teacher.birth_date}`,
                rating: (Math.random() * 4 + 1).toFixed(2),
            }}
            key={teacher.id}
            className="link-decoration"
        >
        <Teacher_list_item
            name={`${teacher.first_name} ${teacher.last_name}`}
            school={getSchoolNameById(teacher.school)}
            rating={(Math.random() * 4 + 1).toFixed(2)}
        />
        </Link>
    ))}
    </>)
}