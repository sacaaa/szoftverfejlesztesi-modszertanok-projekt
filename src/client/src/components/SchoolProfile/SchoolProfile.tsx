import './SchoolProfile.css';

interface SchoolProfileProps {
    schoolName: string;
    institutionId: string;
    address: string;
    teachersCount: number;
    studentsCount: number;
    logo: string;
}

export default function SchoolProfile({ 
    schoolName, 
    institutionId, 
    address, 
    teachersCount, 
    studentsCount,
    logo
}: SchoolProfileProps) {
    return (
        <>
            <div className="profile-card">
                <div className="profile-image">
                    <img src={logo} alt={`${schoolName} logo`} style={{ width: '100%', height: '100%', borderRadius: '8px 0 0 8px' }} />
                </div>
                <div className="profile-info">
                    <h2>{schoolName}</h2>
                    <p><strong>Intézményazonosító:</strong> {institutionId}</p>
                    <p><strong>Cím:</strong> {address}</p>
                    <p><strong>Tanárok száma:</strong> {teachersCount}</p>
                    <p><strong>Diákok száma:</strong> {studentsCount}</p>
                </div>
            </div>
        </>
    );
}

