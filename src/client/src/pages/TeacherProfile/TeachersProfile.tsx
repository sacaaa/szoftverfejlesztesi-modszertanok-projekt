import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import ReviewComponent from "../../components/Review/Review";
import './TeacherProfile.css';

interface Review {
    id: number;
    rating: number;
    comment: string;
    student: {
        id: number;
        first_name: string; 
        last_name: string; 
    };
    created_at: string; 
}

interface Teacher {
    id: number;
    title: string;
    first_name: string;
    last_name: string;
    email: string;
    birth_date: string;
    school: number;
    reviews: Review[];
    avg_rate: number | null;
}

export default function TeachersProfile() {
    const { id } = useParams();
    const [teacher, setTeacher] = useState<Teacher | null>(null);
    const [schoolName, setSchoolName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState<number>(1);
    const reviewsPerPage = 2; // Number of reviews to display per page

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
                if (!schoolResponse.ok) {
                    throw new Error(`HTTP error! status: ${schoolResponse.status}`);
                }
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

    // Calculate the start and end index for the current page's reviews
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const displayedReviews = teacher.reviews.slice(startIndex, startIndex + reviewsPerPage);
    const totalReviews = teacher.reviews.length; 

    // Calculate total pages
    const totalPages = Math.ceil(totalReviews / reviewsPerPage);

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
            <div className="reviews-list">
                <h3>Értékelések ({totalReviews})</h3> 
                {displayedReviews.length > 0 ? (
                    displayedReviews.map(review => (
                        <ReviewComponent key={review.id} review={review} />
                    ))
                ) : (
                    <p>Ehhez a tanárhoz még nem érkezett értékelés.</p>
                )}
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
            </div>
        </>
    );
}
