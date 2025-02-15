"use client";

import { motion } from "framer-motion";
import { Movie } from "./Movies";
import VideoPlayer from "./VideoPlayer";
import MovieInfo from "./MovieInfo";

interface CarouselItemProps {
  movie: Movie;
  isActive: boolean;
  showVideo: boolean;
  onVideoEnd: () => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  movie,
  isActive,
  showVideo,
  onVideoEnd,
}) => {
  return (
    <div
      className={`relative flex-[0_0_100%] h-full ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      {isActive && (
        <>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: showVideo ? 0 : 1 }}
            exit={{ opacity: 0 }}
            src={movie.imageUrl}
            alt={movie.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {movie.videoUrl && showVideo && (
            <VideoPlayer videoUrl={movie.videoUrl} onEnd={onVideoEnd} />
          )}
          <MovieInfo movie={movie} />
        </>
      )}
    </div>
  );
};

export default CarouselItem;
