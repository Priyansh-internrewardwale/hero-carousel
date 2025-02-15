"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrev,
  onNext,
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-between px-4">
      <motion.button
        onClick={onPrev}
        className="p-2 z-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        whileHover={{ backgroundColor: "white", color: "black" }}
      >
        <ChevronLeft size={24} />
      </motion.button>
      <motion.button
        onClick={onNext}
        className="p-2 z-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        whileHover={{ backgroundColor: "white", color: "black" }}
      >
        <ChevronRight size={24} />
      </motion.button>
    </div>
  );
};

export default NavigationButtons;
