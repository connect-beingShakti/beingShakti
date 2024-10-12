import "./Home.css";
// import backgroundImage from "../../assets/img.jpg";
import videoMain from "../../assets/video3.mp4";
import video1 from "../../assets/video1.mp4";
import slideImg from "../../assets/1.jpeg";
import slideImg2 from "../../assets/background3.jpg";
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Slides from "../../components/Slide";

const Home = () => {
  const slide = [
    {
      type: 'video',
      videoSrc: video1,
      title: 'Welcome to Being Shakti',
      subtitle: 'A Journey Within',
      text: 'Discover peace, balance, and your true self.',
    },
    {
      type: 'image',
      bgImage: slideImg2,
      title: 'Welcome to Being Shakti',
      description: 'Discover peace, balance, and your true self.',
    },
    // {
    //   type: 'image',
    //   bgImage: backgroundImage,
    //   title: 'Welcome to Being Shakti',
    //   description: 'Discover peace, balance, and your true self.',
    // },
    // {
    //   type: 'image',
    //   bgImage: slideImg,
    //   title: 'Welcome to Being Shakti',
    //   description: 'Discover peace, balance, and your true self.',
    // },
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(slide);
const [isMobileView, setMobileView] = useState(false);
  useEffect(() => {
    setMobileView(window?.navigator?.userAgentData?.mobile);
    window?.navigator?.userAgentData?.mobile && setSlides([
      {
        type: 'video',
        videoSrc: videoMain,
        title: 'Welcome to Being Shakti',
        subtitle: 'A Journey Within',
        text: 'Discover peace, balance, and your true self.',
      },
      {
        type: 'image',
        bgImage: slideImg,
        title: 'Welcome to Being Shakti',
        description: 'Discover peace, balance, and your true self.',
      },
      
    ])
  }, [])

  return (
    <section
      id="home"
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
