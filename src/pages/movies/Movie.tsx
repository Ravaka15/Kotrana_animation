import { motion } from "framer-motion";

interface MovieProps {
    movie: {
        id: number;
        title: string;
        backdrop_path: string;
    };
}
function Movie({ movie }: MovieProps) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>{movie.title}</h2>
            <img
                src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                alt=""
            />
        </motion.div>
    );
}

export default Movie;
