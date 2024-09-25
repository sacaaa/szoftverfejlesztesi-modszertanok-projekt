import './SchoolCard.css';

interface SchoolCardProps {
    name: string;
}

const SchoolCard = ({ name }: SchoolCardProps) => {
    return (
        <div className="card">
            <div className="card-body">
                {/* Itt lehetne egy kép vagy más tartalom */}
            </div>
            <div className="card-footer">
                {name}
            </div>
        </div>
    );
};

export default SchoolCard;
