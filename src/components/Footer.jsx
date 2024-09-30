const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          {/* <!-- Footer Content --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Logo & Description --> */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-blue-400">Being Shakti</h2>
              <p className="mt-4 text-gray-300">
                Empowering you through mindfulness, wellness, and growth. Stay
                connected with us for inspiring services and updates.
              </p>
            </div>

            {/* <!-- Quick Links --> */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Social Media --> */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.56c-.88.39-1.82.66-2.82.78 1.01-.6 1.79-1.54 2.16-2.66-.95.56-2.01.97-3.13 1.19-.9-.96-2.18-1.56-3.59-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.77.13 1.14-4.09-.2-7.71-2.16-10.14-5.13-.42.72-.67 1.55-.67 2.44 0 1.69.86 3.18 2.18 4.05-.8-.03-1.55-.25-2.2-.61v.06c0 2.37 1.68 4.35 3.91 4.8-.41.11-.85.16-1.3.16-.32 0-.63-.03-.93-.09.64 2 2.49 3.45 4.67 3.49-1.72 1.35-3.88 2.16-6.23 2.16-.4 0-.8-.02-1.19-.07 2.22 1.42 4.85 2.25 7.68 2.25 9.21 0 14.25-7.63 14.25-14.25 0-.22-.01-.44-.02-.66.98-.71 1.83-1.6 2.5-2.62z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.75 0H4.25C1.9 0 0 1.9 0 4.25v15.5C0 22.1 1.9 24 4.25 24h15.5C22.1 24 24 22.1 24 19.75V4.25C24 1.9 22.1 0 19.75 0zM7.53 20H3.47V9h4.06v11zm-2.03-12.53c-1.29 0-2.33-1.04-2.33-2.33S4.21 3.8 5.5 3.8s2.33 1.04 2.33 2.33-1.04 2.33-2.33 2.33zm14.03 12.53h-4.06v-5.53c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.43-2.12 2.92V20h-4.06V9h3.9v1.5h.05c.54-1.03 1.86-2.12 3.84-2.12 4.1 0 4.86 2.7 4.86 6.23V20z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.994 4.78c-.885.39-1.833.653-2.827.773a4.971 4.971 0 002.186-2.739 9.934 9.934 0 01-3.131 1.196A4.916 4.916 0 0017.374 3c-2.725 0-4.928 2.21-4.928 4.928 0 .39.05.767.125 1.134-4.099-.2-7.718-2.17-10.147-5.14-.426.727-.666 1.571-.666 2.475 0 1.71.866 3.213 2.188 4.093-.801-.028-1.555-.247-2.188-.61v.063c0 2.378 1.69 4.37 3.924 4.825a4.932 4.932 0 01-2.215.084c.63 1.95 2.437 3.376 4.59 3.42a9.897 9.897 0 01-6.108 2.11c-.4 0-.79-.028-1.172-.067a14.033 14.033 0 007.563 2.218c9.072 0 14.035-7.52 14.035-14.04 0-.213-.01-.427-.023-.639A9.936 9.936 0 0024 4.778z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Footer Bottom --> */}
          <div className="mt-8 text-center text-gray-500">
            <p>&copy; 2024 Being Shakti. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
