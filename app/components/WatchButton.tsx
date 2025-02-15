"use client";

import { motion } from "framer-motion";

export default function WatchButton() {
  return (
    <div>
      <div className="flex gap-8">
        <motion.button
          className="bg-blue-500 rounded-xl font-bold text-white pr-8 pl-8 cursor-pointer flex items-center gap-10 h-14 w-22"
          whileHover={{
            backgroundColor: "hsl(240, 100%, 35%)",
          }}
        >
          Play
        </motion.button>
        <motion.button
          className="bg-orange-500 rounded-xl font-bold text-white p-5 cursor-pointer flex items-center gap-10 h-14 w-22"
          whileHover={{
            backgroundColor: "hsl(5, 100%, 50%)",
          }}
        >
          More Info
        </motion.button>
      </div>
      <div className="pt-5 pl-12">
        <motion.button
          className="bg-gray-500 rounded-xl font-bold text-white p-5 cursor-pointer flex items-center gap-10 h-14 w-22"
          whileHover={{
            backgroundColor: "hsl(0, 0%, 30%)",
          }}
        >
          Watch Later
        </motion.button>
      </div>
    </div>
  );
}
