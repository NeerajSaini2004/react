import { useState } from 'react';

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);

    function toggleLike() {
        setIsLiked(!isLiked);
    }
    

    return (
        <div>
            <p onClick={toggleLike}>
                {isLiked ? "❤️" : "🤍"}
            </p>
        </div>
    );
}