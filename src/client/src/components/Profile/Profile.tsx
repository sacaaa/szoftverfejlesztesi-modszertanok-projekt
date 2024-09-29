import './Profile.css';

interface ProfileProps {
    name: string;
    accountType: string;
    email: string;
    birthdate: string;
    school: { name: string; id: number }; // Hozzáadtam az iskolához egy azonosítót
    avgRate: string | null;
}

export default function Profile({ name, accountType, email, birthdate, school, avgRate }: ProfileProps) {
    return (
        <div className="student-card">
            <h2>{name}</h2>
            <p><strong>Fiók típusa:</strong> {accountType}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Születési dátum:</strong> {birthdate}</p>
            <p>
                <strong>Iskola: </strong>
                <a href={`http://localhost:5173/schoolprofile/${school.id}`} className="school-link">
                    {school.name}
                </a>
            </p>
            <p><strong>Átlagos értékelés:</strong> {avgRate !== null ? avgRate : 'N/A'}</p>
        </div>
    );
}
