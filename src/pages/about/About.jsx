import aboutImage from "../../assets/aboutImg.jpeg";
import "./About.css";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="relative py-16 bg-gray-100 flex flex-col md:flex-row items-center"
      >
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 px-6 md:px-12 flex flex-col items-start">
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
          <a
            href="#contact"
            className="m-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Right Side: Image */}
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
