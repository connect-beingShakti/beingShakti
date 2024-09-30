import logo from "../assets/logo3.png";

const Header = () => {
  return (
    <>
      {/* <!-- Header --> */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* <!-- Logo --> */}
          <div className="text-2xl font-bold text-neutral-950 flex items-center justify-between">
            <img src={logo} className="m-2 w-[64px]"/>
            <span>
              Being Shakti
            </span>
          </div>

          {/* <!-- Menu --> */}
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li>
                <a
                  href="#home"
                  className="text-gray-700 hover:text-neutral-950 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-neutral-950 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-neutral-950 transition-colors"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-neutral-950 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* <!-- Mobile Menu Button --> */}
            <div className="md:hidden">
              <button id="menuBtn" className="text-gray-700 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </nav>

          {/* <!-- Mobile Menu (Hidden by default) --> */}
          <div id="mobileMenu" className="md:hidden hidden">
            <ul className="flex flex-col space-y-4 mt-4">
              <li>
                <a href="#home" className="block text-gray-700 hover:text-neutral-950">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-gray-700 hover:text-neutral-950"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block text-gray-700 hover:text-neutral-950"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-gray-700 hover:text-neutral-950"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
