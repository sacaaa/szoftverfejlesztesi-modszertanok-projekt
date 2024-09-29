import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SchoolProfile from "../../components/SchoolProfile/SchoolProfile";

interface School {
    institution_id: string;
    name: string;
    address: string;
    teachers: number[];
    students: number[];
    logo: string;
}

export default function SchoolsProfile() {
    const { id } = useParams<{ id: string }>();
    const [school, setSchool] = useState<School | null>(null);

    useEffect(() => {
        const fetchSchool = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/schools/${id}/`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                setSchool(jsonData);
            } catch (error) {
                console.error('Error fetching school:', error);
            }
        };

        fetchSchool();
    }, [id]);

    if (!school) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <SchoolProfile
                schoolName={school.name}
                institutionId={school.institution_id}
                address={school.address}
                teachersCount={school.teachers.length}
                studentsCount={school.students.length}
                logo={school.logo}
            />
        </>
    );
}
