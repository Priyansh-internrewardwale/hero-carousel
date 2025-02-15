"use client";

// components/HeroCarousel.tsx
import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { movies } from "./Movies";
import NavigationButtons from "./NavigationButtons";
import CarouselItem from "./CarouselItem";
import DotNav from "./DotNav";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isManualNavigation, setIsManualNavigation] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout>(null);

  const startSlideTimer = useCallback(() => {
    const currentMovie = movies[currentIndex];

    if (currentMovie.videoUrl) {
      timerRef.current = setTimeout(() => {
        setShowVideo(true);
      }, 3000);
    } else {
      timerRef.current = setTimeout(() => {
        if (!isManualNavigation) {
          emblaApi?.scrollNext();
        }
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, emblaApi, isManualNavigation]);

  const handleVideoEnded = useCallback(() => {
    if (!isManualNavigation) {
      emblaApi?.scrollNext();
    }
  }, [emblaApi, isManualNavigation]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
      setShowVideo(false);
      setIsManualNavigation(false);
    };

    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  useEffect(() => {
    const cleanup = startSlideTimer();
    return () => cleanup();
  }, [currentIndex, startSlideTimer]);

  const handleNavigation = (direction: "prev" | "next") => {
    setIsManualNavigation(true);
    setShowVideo(false);
    if (direction === "prev") {
      emblaApi?.scrollPrev();
    } else {
      emblaApi?.scrollNext();
    }
  };

  // **New handleDotClick function for dot navigation**
  const handleDotClick = (index: number) => {
    emblaApi?.scrollTo(index); // Scrolls to the movie corresponding to the dot clicked
  };

  return (
    <div className="w-full h-[100vh] relative">
      {" "}
      {/* **Added 'relative' to support absolute positioning of dots** */}
      <NavigationButtons
        onPrev={() => handleNavigation("prev")}
        onNext={() => handleNavigation("next")}
      />
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {movies.map((movie, index) => (
            <CarouselItem
              key={movie.id}
              movie={movie}
              isActive={currentIndex === index}
              showVideo={showVideo}
              onVideoEnd={handleVideoEnded}
            />
          ))}
        </div>
      </div>
      <DotNav
        numDots={movies.length} // Number of dots based on the movie length
        activeIndex={currentIndex} // The active movie index
        onDotClick={handleDotClick} // Pass the dot click handler
      />
    </div>
  );
}
