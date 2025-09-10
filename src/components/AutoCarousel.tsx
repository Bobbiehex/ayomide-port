import { ReactNode } from "react";

interface AutoCarouselProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const AutoCarousel = ({ children, speed = 10, className = "" }: AutoCarouselProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex space-x-6 auto-scroll"
        style={{
          animation: `autoScroll ${speed}s linear infinite`,
        }}
      >
        {children}
        {/* Duplicate children for seamless loop */}
        {children}
        {/* Triple duplicate to ensure all skills are always visible */}
        {children}
      </div>
    </div>
  );
};

export default AutoCarousel;