import aboutImage from "../../assets/aboutImg.jpeg";
import img from "../../assets/goldenbuddha.png";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="about" className="text-slate-950 flex flex-col md:flex-row items-center justify-between px-6 py-6 md:py-12">
        {/* Left Section with Title, Subtitle, and Description */}
        <div className="w-full md:w-1/2 p-6 ">
          {/* Description Text with Background Image */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Discover your inner self
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Embark on a spiritual journey
            </h1>
            <p className="text-lg md:text-xl mb-8">
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

            <ui className="text-lg md:text-xl mb-8">
              <p className="my-2">
                Blessed to learn spiritual science like

              </p>
              <p className="my-2">
                Kriya Kundalini Yoga.

              </p>
              <p className="my-2">
                Basic innerwork, advance inner work level 1 and level 2
              </p>
              <p className="my-2">
                Certifide Seven Chakra Healing and Balancing
              </p>
              <p className="my-2">
                Certifide specilalist in Life  / Twinflames Coaching Master Reiki Healer upto level 4 Sanjeevani Healing level 1
              </p>
            </ui>

          </div>
          <div className="mt-10">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg "
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="w-full md:w-1/2  px-6 md:px-12">
          <img
            src={img}
            alt="About"
            className="w-full h-auto rounded-lg shine"
          />
          {/* <div className="shineContainer">
            <div className="shine">
              asfasfasdad
            </div>
          </div> */}
        </div>
      </section>

      <section className="bg-indigo-100 text-slate-950 flex flex-col md:flex-row items-center justify-between px-6 py-6 md:py-12">

        {/* Right Section with Image */}
        <div className="w-full md:w-1/2  px-6 md:px-12">
          <h2 className="text-3xl md:text-4x2 mb-4 font-bold">
            Experiencing the twin flame journey and helping those who are on this path, offering direction to those who needs:
          </h2>
          <ui className="text-lg md:text-xl mb-8">
            <p className="my-2">
              Facing/ stuck in twin flame journey.
            </p>
            <p className="my-2">
              How to remove blockages or to find out blockages because of which they are not moving forward in their journey.
            </p>
            <p className="my-2">
              To create balanced and conscious life
            </p>
            <p className="my-2">
              Tools to forgive people.
            </p>
            <p className="my-2">
              How to change the perception to see better and happy life
            </p>
          </ui>
        </div>
        <div className="w-full md:w-1/2  px-6 md:px-12">
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
