import aboutImage from "../../assets/aboutImg.jpeg";
import img from "../../assets/goldenbuddha.png";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-24 #ffedd5">
        {/* Left Section with Title, Subtitle, and Description */}
        <div className="w-full md:w-1/2 p-6 relative">
          {/* Description Text with Background Image */}
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
              Discover your inner self
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Embark on a spiritual journey
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Join us in exploring the depths of your spirit. Our services are
              designed to help you find balance, peace, and fulfillment. Being
              Shakti offers a unique platform in Patna for those eager to delve
              into spirituality, meditation, and yoga. Here, you can begin your
              journey of self-healing, release negative energies, and explore the
              mysteries of past lives. Whether you&apos;re searching for inner peace,
              wanting to cleanse from negativity, or curious about the spiritual
              realm, Being Shakti provides the guidance, resources, and practices
              to help you connect with your true self.
            </p>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 rounded-lg h-1/2 top-1/2 sm:h-auto sm:top-0"
              style={{ backgroundImage: `url(${img})` }}
              role="img"
              aria-label="background description img"
            >
            </div>
            <ui className="text-lg md:text-xl mb-8 text-gray-700">
              <li>
                Blessed to learn spiritual science like

              </li>
              <li>
                Kriya Kundalini Yoga.

              </li>
              <li>
                Basic innerwork, advance inner work level 1 and level 2
              </li>
              <li>
                Certifide Seven Chakra Healing and Balancing
              </li>
              <li>
                Certifide specilalist in Life  / Twinflames Coaching Master Reiki Healer upto level 4 Sanjeevani Healing level 1
              </li>
            </ui>

          </div>
          <div className="m-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg "
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-6 md:px-12">
          <img
            src={aboutImage}
            alt="About"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default About;
