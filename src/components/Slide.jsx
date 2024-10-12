import { useEffect } from "react";
const Slides = (props) => {
    const {setCurrentSlide, currentSlide, slides} = props;
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slides every 5 seconds
    
        return () => clearInterval(interval);
      }, [slides.length]);
    
      const handleDotClick = (index) => {
        setCurrentSlide(index);
      };
    

    return<>
     {/* Overlay */}
     <div className="absolute inset-0 bg-black opacity-50"></div>

{/* Slide Content */}
<div className="relative h-full flex justify-center px-28 items-center text-white">
  {slides[currentSlide].type === 'video' ? (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={slides[currentSlide].videoSrc}
      autoPlay
      loop
      muted
    />
  ) : null}

  {/* Text Content */}
  <div className="relative z-10 text-center animate-fade-in-up px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-5xl font-bold mb-4">
      {slides[currentSlide].title}
    </h2>
    <p className="text-lg md:text-2xl mb-6">
      {slides[currentSlide].type === 'video'
        ? slides[currentSlide].subtitle
        : slides[currentSlide].description}
    </p>
  </div>
</div>

{/* Dotted Navigation */}
<div className="absolute bottom-5 w-full flex justify-center items-center space-x-2 z-10">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => handleDotClick(index)}
      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
        index === currentSlide ? 'bg-white' : 'bg-gray-500'
      }`}
    ></button>
  ))}
</div></>
}

export default Slides;