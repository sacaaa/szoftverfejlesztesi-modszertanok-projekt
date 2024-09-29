import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
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

export default function Teachers() {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [schools, setSchools] = useState<{ [key: number]: string }>({});
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const teachersPerPage = 10;

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/teachers/');
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
                const response = await fetch('http://localhost:8000/api/schools/');
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
    
    const filteredTeachers = teachers.filter((teacher) => {
        const fullName = `${teacher.title} ${teacher.last_name} ${teacher.first_name}`.toLowerCase();
        const schoolName = getSchoolNameById(teacher.school).toLowerCase();
        const query = searchQuery.toLowerCase();

        return fullName.includes(query) || schoolName.includes(query);
    });

    // Pagination logic
    const totalTeachers = filteredTeachers.length;
    const totalPages = Math.ceil(totalTeachers / teachersPerPage);
    const startIndex = (currentPage - 1) * teachersPerPage;
    const displayedTeachers = filteredTeachers.slice(startIndex, startIndex + teachersPerPage);

    const handleSearchQueryChange = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    return (
        <>
            <Navbar />
            <Searchbar 
                searchQuery={searchQuery} 
                setSearchQuery={handleSearchQueryChange}
                searchType="teacher" 
            />
            {displayedTeachers.map((teacher) => (
                <Link 
                    to={`/teacherprofile/${teacher.id}`}
                    key={teacher.id}
                    className="link-decoration"
                >
                    <Teacher_list_item
                        name={`${teacher.title} ${teacher.last_name} ${teacher.first_name}`}
                        school={getSchoolNameById(teacher.school)}
                        rating={teacher.avg_rate !== null ? teacher.avg_rate.toFixed(2) : "N/A"}
                    />
                </Link>
            ))}
            
            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Előző
                    </button>
                    <span>{currentPage} / {totalPages}</span>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Következő
                    </button>
                </div>
            )}
            <Footer />
        </>
    );
}
