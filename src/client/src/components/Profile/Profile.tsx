import './Profile.css';

interface ProfileProps {
    name: string;
    accountType: string;
    email: string;
    birthdate: string;
    school: string;
}

export default function Profile({ name, accountType, email, birthdate, school }: ProfileProps) {
    return (<div className="student-card">
                <h2>{name}</h2>
                <p><strong>Fiók típusa:</strong> {accountType}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Születési dátum:</strong> {birthdate}</p>
                <p><strong>Iskola:</strong> {school}</p>
            </div>)
}