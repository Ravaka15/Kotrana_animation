import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import "../../assets/styles/Movie.css";
import {motion, AnimatePresence} from "framer-motion";

interface MovieData {
    id: number;
    title: string;
    backdrop_path: string;
}

function Index() {
    const [popular, setPopular] = useState<MovieData[]>([]);
    const [filtered, setFiltered] = useState<MovieData[]>([]);
    const [activeGenre, setActiveGenre] = useState(0);

    useEffect(() => {
        fetchPopular();
    }, []);

    const fetchPopular = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1");
        const movies = await data.json();
        console.log(movies);
        setPopular(movies.results);
        setFiltered(movies.results);
    };

    return (
        <div>
            <Filter 
                popular={popular} 
                setFiltered={setFiltered}
                activeGenre={activeGenre} 
                setActiveGenre={setActiveGenre} 
            />
            <motion.div layout className='popular-movies'>
                <AnimatePresence>
                    {filtered.map((movie: MovieData) => {
                        return <Movie key={movie.id} movie={movie} />;
                    })}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default Index;
