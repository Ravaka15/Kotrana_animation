import React, { useEffect } from 'react';

interface FilterProps {
    setActiveGenre: (genreId: number) => void;
    activeGenre: number;
    setFiltered: (filteredMovies: any[]) => void;
    popular: any[];
}

const Filter: React.FC<FilterProps> = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {
    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie: any) =>
            movie.genre_ids.includes(activeGenre)
        );
        setFiltered(filtered);
    }, [activeGenre, popular, setFiltered]);

    return (
        <div className='filter-container'>
            <button
                className={activeGenre === 0 ? "active" : ""}
                onClick={() => setActiveGenre(0)}
            >
                All
            </button>
            <button
                className={activeGenre === 35 ? "active" : ""}
                onClick={() => setActiveGenre(35)}
            >
                Comedy
            </button>
            <button
                className={activeGenre === 28 ? "active" : ""}
                onClick={() => setActiveGenre(28)}
            >
                Action
            </button>
        </div>
    );
};

export default Filter;
