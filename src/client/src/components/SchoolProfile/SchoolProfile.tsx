
interface SchoolProfileProps {
    schoolName: string;
    accountType: string;
    email: string;
    birthdate: string;
    school: string;
}



export default function SchoolProfile({ schoolName, accountType, email, birthdate }: SchoolProfileProps){
    return(
        <>
            <div className="profile-card">
            <div className="profile-image"></div>
            <div className="profile-info">
                <h2>{schoolName}</h2>
                <p><strong>Fiók típusa:</strong> {accountType}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Születési dátum:</strong> {birthdate}</p>
            </div>
            </div>
        </>
    )
}

