import "./Home.css";
// import backgroundImage from "../../assets/img.jpg";
import videoMain from "../../assets/video3.mp4";
import video1 from "../../assets/footerVid.mp4";
import vid from "../../assets/vid.mp4";
// import videoMain from "../../assets/videoMain.mp4";
import slideImg from "../../assets/1.jpeg";
import slideImg2 from "../../assets/background3.jpg";
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Slides from "../../components/Slide";
import mobiImg3 from "../../assets/img3.png";
import imgNew from "../../assets/imgNew.jpg";

const Home = () => {
  const slide = [
    {
      type: 'video',
      videoSrc: video1,
      title: 'Welcome to Being Shakti',
      subtitle: 'A Journey Within',
      text: 'Discover peace, balance, and your true self',
    },
    {
      type: 'image',
      bgImage: imgNew,
      title: 'Embrace Your Divine Energy',
      description: 'Connect with the universal flow of energy that exists within and around you. By recognizing your divine essence, you can achieve true harmony and peace.',
    },
    {
      type: 'image',
      bgImage: slideImg2,
      title: 'Unlock the Power Within',
      description: 'Discover the immense potential that lies within you. Through self-awareness and mindful practices, tap into your inner strength to lead a more empowered life.',
    },
    {
      type: 'video',
      videoSrc: vid,
      title: 'Align with the Universes Rhythm',
      subtitle: 'Find balance by aligning your energy with the natural rhythm of the universe. When you move in harmony with the cosmos, you experience more ease and flow in your life.',
      text: 'Discover peace, balance, and your true self',
    },
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(slide);
  // State variables for touch tracking
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  
  useEffect(() => {
    window.innerWidth <= 768 && setSlides([
      {
        type: 'video',
        videoSrc: videoMain,
        title: 'Welcome to Being Shakti',
        subtitle: 'A Journey Within',
        text: 'Discover peace, balance, and your true self',
      },
      {
        type: 'image',
        bgImage: mobiImg3,
        title: '',
        description: '',
      },
      {
        type: 'image',
        bgImage: slideImg2,
        title: 'Unlock the Power Within',
        description: 'Discover the immense potential that lies within you. Through self-awareness and mindful practices, tap into your inner strength to lead a more empowered life.',
      },
      {
        type: 'image',
        bgImage: slideImg,
        title: 'Align with the Universes Rhythm',
        description: 'Find balance by aligning your energy with the natural rhythm of the universe. When you move in harmony with the cosmos, you experience more ease and flow in your life.',
      },
    ])
  }, [])

  // Swipe functionality
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    setEndX(touch.clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      // Swipe left
      nextSlide();
    } else if (endX - startX > 50) {
      // Swipe right
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
     onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative bg-fixed bg-cover bg-center h-screen overflow-hidden mt-4"
      style={{
        backgroundImage: slides[currentSlide].type === 'image'
          ? `url(${slides[currentSlide].bgImage})`
          : 'none',
      }}
    >
      <Slides setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} slides={slides} />
    </section>
  );
};

export default Home;
