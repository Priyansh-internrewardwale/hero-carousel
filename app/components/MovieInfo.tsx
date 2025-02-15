"use client";

import { motion } from "framer-motion";
import WatchButton from "./WatchButton";
import { Movie } from "./Movies";

interface MovieInfoProps {
  movie: Movie;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        className="text-4xl font-bold text-white"
      >
        {movie.title}
        <div className="text-xl font-thin">
          <p className="pt-2 pb-3">{movie.desc}</p>
          <WatchButton />
        </div>
      </motion.h2>
    </div>
  );
};

export default MovieInfo;
