import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

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

export default function TeachersProfile() {
    const { id } = useParams();
    const [teacher, setTeacher] = useState<Teacher | null>(null);
    const [schoolName, setSchoolName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTeacher = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/teachers/${id}/`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Teacher = await response.json();
                setTeacher(data);
                
                const schoolResponse = await fetch(`http://localhost:8000/api/schools/${data.school}/`);
                const schoolData = await schoolResponse.json();
                setSchoolName(schoolData.name);
                
            } catch (error) {
                console.error("Error fetching teacher data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeacher();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!teacher) {
        return <p>Tanár nem található.</p>;
    }

    return (
        <>
            <Navbar />
            <Profile
                name={`${teacher.title} ${teacher.first_name} ${teacher.last_name}`}
                accountType="Tanár"
                email={teacher.email}
                birthdate={teacher.birth_date}
                school={schoolName}
                avgRate={teacher.avg_rate ? teacher.avg_rate.toFixed(2) : "N/A"}
            />
            <ReviewForm />
        </>
    );
}
