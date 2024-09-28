import './SchoolCard.css';

interface SchoolCardProps {
    name: string;
    logo: string;
}

const SchoolCard = ({ name, logo }: SchoolCardProps) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={logo} alt={`${name} logo`} className="school-logo" />
            </div>
            <div className="card-footer">
                {name}
            </div>
        </div>
    );
};

export default SchoolCard;
