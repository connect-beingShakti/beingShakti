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

      <section id="services" className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="text-slate-950">
            <h3 className="text-xl md:text-2xl font-medium text-center mb-4 animate-fade-in-up">
              Transformative practices
            </h3>

            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 animate-fade-in-up">
              Guidance for every soul
            </h2>
          </div>
          <div
            className="flex overflow-x-auto snap-mandatory space-x-4"
            role="list"
            aria-label="Services list"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // For Firefox and Internet Explorer
          >
            {items.map((service, index) => (
              <div
                key={index}
                className="snap-center bg-white p-6 rounded-lg shadow-lg w-64 flex-none"
                role="listitem"
              >
                <img
                  src={service.img}
                  alt={`${service.title} image`}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-bold mt-4">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.title}</p>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
