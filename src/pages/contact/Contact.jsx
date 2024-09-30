import { useEffect, useState } from "react";
import axios from 'axios';

const Contact = () => {
  // State for form fields
  const serviceId = "service_2c8hh1j";
  const templetId = "template_bve8ihk";
  const publicKey = "FuzuYq-Wruwr7a2hb";
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const templetParams = {
    service_id: serviceId,
    template_id: templetId,
    user_id: publicKey,
    template_params: {
      from_name: formData.firstName + " " + formData.lastName,
      from_email: formData.email,
      to_name: formData.email,
      phone: formData.phone,
      message: formData.message,
    }
  }

  // Send email using EmailJS
 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.consent)
      newErrors.consent = "You must agree to store your submission";
    return newErrors;
  };

  const sendEmail = async ()=>{
    try{
      const resp = await axios.post("https://api.emailjs.com/api/v1.0/email/send", templetParams);
      console.log("resp>>>>", resp);
    }catch(e){
      console.log("e", e)
    }
  }

  const  handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid
      sendEmail();
      setIsSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    setIsFormValid(!Object.keys(errors).length | false);
  }, [errors])

  return (
    <section
      id="contact"
      className="relative py-16 bg-white flex flex-col md:flex-row items-center overflow-hidden"
    >
      {/* Left Side: Contact Form */}
      <div className="w-full md:w-1/2 border-r-stone-900 px-6 md:px-12 flex flex-col items-start animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-semibold mb-1 text-gray-800">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-1">
            <label htmlFor="firstName" className="block text-gray-700 mb-2">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full p-3 bg-white text-gray-700 border rounded-lg ${errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-1">
            <label htmlFor="lastName" className="block text-gray-700 mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full p-3 bg-white text-gray-700 border rounded-lg ${errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 bg-white text-gray-700 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-1">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 bg-white text-gray-700 border rounded-lg ${errors.phone ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div className="mb-1">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 bg-white text-gray-700 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <div className="mb-1">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={handleChange}
              className="mr-2 bg-white"
            />
            <p htmlFor="consent" className="text-gray-700">
              I allow this website to store my submission so they can respond to
              my inquiry.
            </p>
            {errors.consent && (
              <p className="text-red-500 text-sm">{errors.consent}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            Submit
          </button>
        </form>
        {isSubmitted && (
          <p className="text-green-500 mt-4">
            Your message has been sent successfully!
          </p>
        )}
      </div>

      {/* Right Side: Google Map and Contact Details */}
      <div className="w-full md:w-1/2 px-6 md:px-12 flex flex-col items-center animate-fade-in-up">
        <div className="mb-6 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.279332692654!2d-122.41941858468033!3d37.77492967975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5d7e839b%3A0x406c39d68b86d0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-700 mb-2">Email: info@beingshakti.com</p>
          <p className="text-gray-700 mb-2">
            Location: 123 Spiritual Lane, Peace City
          </p>
          <p className="text-gray-700 mb-2">Open Hours:</p>
          <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
          <p className="text-gray-700">Sunday: Closed</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
