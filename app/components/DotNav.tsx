"use client";

interface DotNavProps {
  numDots: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

const DotNav = ({ numDots, activeIndex, onDotClick }: DotNavProps) => (
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
    {Array.from({ length: numDots }).map((_, index) => (
      <button
        key={index}
        onClick={() => onDotClick(index)}
        className={`w-3 h-3 rounded-full ${
          activeIndex === index ? "bg-blue-500" : "bg-gray-400"
        } transition-all`}
      />
    ))}
  </div>
);

export default DotNav;
