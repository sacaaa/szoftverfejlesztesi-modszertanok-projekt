import './Review.css';

interface Student {
    id: number;
    first_name: string;
    last_name: string;
}

interface Review {
    id: number;
    rating: number;
    comment: string;
    student: Student; // Include the student type
    created_at: string; // Include created_at for review date
}

interface ReviewProps {
    review: Review;
}

const ReviewComponent: React.FC<ReviewProps> = ({ review }) => {
    return (
        <div className="review">
            <div className="review-header">
                <h4 className="review-rating">Értékelés: {review.rating}/5</h4>
                <p className="review-date">
                    Dátum: {new Date(review.created_at).toLocaleDateString()}
                </p>
            </div>
            <p className="review-comment">{review.comment}</p>
            <p className="review-student">
                Diák: {review.student.first_name} {review.student.last_name}
            </p>
        </div>
    );
};

export default ReviewComponent;
