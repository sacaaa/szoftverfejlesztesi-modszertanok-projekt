import { useState } from "react";
import './ReviewForm.css';

export default function ReviewForm() {
    const [teacherName, setTeacherName] = useState('');
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Adatok feldolgozása itt, pl. elküldheted egy backendnek
        console.log({
            teacherName,
            rating,
            comment,
        });

        // Resetelheted a formot, ha akarod
        setTeacherName('');
        setRating(5);
        setComment('');
    };

    return (<>
        <div className="review-form-container">
        <h2>Vélemény írása</h2>
        <form onSubmit={handleSubmit} className="review-form">

        <label>
            Értékelés:
            <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
            >
                <option value="1">1 - Nagyon rossz</option>
                <option value="2">2 - Rossz</option>
                <option value="3">3 - Közepes</option>
                <option value="4">4 - Jó</option>
                <option value="5">5 - Kiváló</option>
            </select>
        </label>

        <label>
            Vélemény:
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Írj véleményt a tanárról..."
                rows={4}
                required
            ></textarea>
        </label>

            <button type="submit">Vélemény beküldése</button>
        </form>
    </div>
    </>)
}