import './Searchbar.css';

interface SearchbarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    searchType: 'teacher' | 'school';
}

export default function Searchbar({ searchQuery, setSearchQuery, searchType }: SearchbarProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="searchbox">
            <label className="searchlabel">
                {searchType === 'teacher' ? 'Keress rá tanárodra' : 'Keress rá az iskoládra'}
            </label>
            <input
                type="text"
                className="searchinput"
                placeholder="Keresés"
                value={searchQuery}
                onChange={handleInputChange}
            />
        </div>
    );
}
