// ReviewForm.tsx
import { useState } from "react";
import './ReviewForm.css';

interface ReviewFormProps {
    teacherId: number;
    onReviewSubmitted: () => void;
}

export default function ReviewForm({ teacherId, onReviewSubmitted }: ReviewFormProps) {
    const [rating, setRating] = useState<number>(5);
    const [comment, setComment] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch('http://localhost:8000/api/reviews/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Ha van autentikáció, például JWT token
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({
                    rating,
                    comment,
                    teacher: teacherId,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Hiba a vélemény beküldésekor.');
            }

            // Reset form
            setRating(5);
            setComment('');

            // Hívja meg a callbackot a visszatöltéshez
            onReviewSubmitted();
        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Hiba a vélemény beküldésekor.');
        } finally {
            setLoading(false);
        }
    };

    return (
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

                {error && <p className="error-message">{error}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? 'Beküldés...' : 'Vélemény beküldése'}
                </button>
            </form>
        </div>
    );
}
