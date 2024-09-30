import { useState } from "react";
import services1 from "../../assets/service1.jpg";
import services2 from "../../assets/service2.jpg";
import services3 from "../../assets/service3.jpg";
import services4 from "../../assets/buddhaM.jpg";

const Services = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [items, setItems] = useState([
    {
      title: "Meditation classes",
      description:
        "Discover mindfulness and tranquility through guided meditation sessions.",
      img: services1,
    },
    {
      title: "Past life regression",
      description:
        "Explore the mysteries of your soul with past life regression therapy.",
      img: services2,
    },
    {
      title: "Energy healing",
      description:
        "Restore balance and harmony with energy healing techniques.",
      img: services3,
    },
    {
      title: "Life couch",
      description:
        "Helps individuals make progress in their lives by guiding them to clarify their goals, overcome obstacles, and achieve personal and professional growth. ",
      img: services4,
    },
    // Add more items as needed
  ]);

  const handleScroll = (direction) => {
    const carousel = document.getElementById("carousel");
    const scrollAmount = carousel.clientWidth;

    if (direction === "left") {
      carousel.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      carousel.scrollLeft += scrollAmount;
    }
  };

  const handleRangeChange = (e) => {
    const newPosition = e.target.value;
    const carousel = document.getElementById("carousel");
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const scrollLeft = (maxScrollLeft * newPosition) / 100;
    carousel.scrollLeft = scrollLeft;
    setScrollPosition(newPosition);
  };
  return (
    <>
      <section
        id="services"
        className="relative bg-fixed bg-cover bg-black bg-center h-screen"
      >
        <div className="relative h-full bg-white flex justify-center items-center text-white">
          <div className="container m-12">
            <div className="text-slate-950">
              <h3 className="text-xl md:text-2xl font-medium text-center mb-4 animate-fade-in-up">
                Transformative practices
              </h3>

              <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 animate-fade-in-up">
                Guidance for every soul
              </h2>
            </div>
            <div className="absolute w-full h-full bg-slate-950 left-0 top-1/2"></div>
            {/* Carousel with items */}
            <div className="relative flex items-center">
              {/* Left Button */}
              <button
                onClick={() => handleScroll("left")}
                className="absolute left-0 z-10 bg-gray-900 hover:bg-gray-700 text-white p-3 rounded-full"
              >
                ◀
              </button>

              <div
                id="carousel"
                className="flex space-x-4 scrollbar-hide p-4 animate-fade-in-up snap-x snap-mandatory overflow-hidden"
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[300px] max-w-[300px] bg-white text-black p-4 rounded-lg shadow-md transition-transform hover:scale-105 snap-center"
                  >
                    <img
                      src={item.img}
                      alt={`Service ${index + 1}`}
                      className="h-40 w-full object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-base">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Right Button */}
              <button
                onClick={() => handleScroll("right")}
                className="absolute right-0 z-10 bg-gray-900 hover:bg-gray-700 text-white p-3 rounded-full"
              >
                ▶
              </button>
            </div>

            {/* Range Slider */}
            <input
              type="range"
              min="0"
              max="100"
              value={scrollPosition}
              onChange={handleRangeChange}
              className="mt-6 w-11/12 bg-gray-200 h-2 rounded-lg appearance-none cursor-pointer relative"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
