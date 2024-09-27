import { CgProfile } from "react-icons/cg";
import './Teacher_list_item.css';

interface TeacherListItemProps {
    name: string;
    school: string;
    rating: string;
}

export default function Teacher_list_item({ name, school, rating }: TeacherListItemProps) {
    return (<>
    <div className="teacher-card">
        <div className="teacher-info">
            <div className="teacher-avatar">
                <CgProfile className="teacher-avatar-img"/>
            </div>
            <div className="teacher-details">
                <div className="teacher-name">{name}</div>
                <div className="teacher-school">{school}</div>
            </div>
        </div>
        <div className="teacher-rating">
            {rating} <span className="star">&#9733;</span>
        </div>
    </div>
    </>)
}