"use client";

import { motion } from "framer-motion";

interface VideoPlayerProps {
  videoUrl: string;
  onEnd: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, onEnd }) => {
  return (
    <motion.video
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      autoPlay
      muted
      onEnded={onEnd}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={videoUrl} type="video/mp4" />
    </motion.video>
  );
};

export default VideoPlayer;
