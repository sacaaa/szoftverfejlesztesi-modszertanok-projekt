import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Teacher_list_item from "../../components/Teacher_list_item/Teacher_list_item";
import { Link } from "react-router-dom";

interface Teacher {
    id: number;
    first_name: string;
    last_name: string;
    school: string;
}

export default function Tanarok() {

    const [teachers, setTeachers] = useState<Teacher[]>([]);

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
        };
    
        fetchTeachers();
    }, []);
    
    
    return (<>
        <Navbar />
        <Searchbar />
        {teachers.map(teacher => (
            <Link to="/tanarprofil" key={teacher.id} className="link-decoration">
                <Teacher_list_item
                    name={`${teacher.first_name} ${teacher.last_name}`}
                    school={`${teacher.school}`}
                    rating={(Math.random() * 4 + 1).toFixed(2)}
                />
            </Link>
        ))}
        </>)
}