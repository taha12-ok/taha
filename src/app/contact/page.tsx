"use client"; // This makes it a Client Component

import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons"; // For brand icons
import { fas } from "@fortawesome/free-solid-svg-icons"; // For solid icons

// Add icons to the library
library.add(fab, fas);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    phone: "",
    occupation: "",
    tahaBlogFeedback: "",
    comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    const phoneNumber = formData.phone; // Use phone number from input
    const message = encodeURIComponent("Hi, I'm coming from TahaBlog!");

    // Open WhatsApp link with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#dde8f4] to-[#e0ecf4] py-10">
      <div className="flex justify-center my-10">
        <h1 className="text-3xl md:text-7xl font-bold text-gray-700">
          <span className="inline-block animate-glow">S</span>
          <span className="inline-block animate-glow [animation-delay:0.3s]">u</span>
          <span className="inline-block animate-glow [animation-delay:0.6s]">b</span>
          <span className="inline-block animate-glow [animation-delay:0.9s]">m</span>
          <span className="inline-block animate-glow [animation-delay:1.2s]">i</span>
          <span className="inline-block animate-glow [animation-delay:1.5s]">t</span>
          <span className="inline-block ml-4"> </span>
          <span className="inline-block animate-glow [animation-delay:2.1s]">T</span>
          <span className="inline-block animate-glow [animation-delay:2.4s]">h</span>
          <span className="inline-block animate-glow [animation-delay:2.7s]">i</span>
          <span className="inline-block animate-glow [animation-delay:3s]">s</span>
          <span className="inline-block ml-4"> </span>
          <span className="inline-block animate-glow [animation-delay:3.6s]">F</span>
          <span className="inline-block animate-glow [animation-delay:3.9s]">o</span>
          <span className="inline-block animate-glow [animation-delay:4.2s]">r</span>
          <span className="inline-block animate-glow [animation-delay:4.5s]">m</span>
          <span className="inline-block ml-4"> </span>
          <span className="inline-block animate-glow [animation-delay:5.1s]">P</span>
          <span className="inline-block animate-glow [animation-delay:5.4s]">l</span>
          <span className="inline-block animate-glow [animation-delay:5.8s]">e</span>
          <span className="inline-block animate-glow [animation-delay:6.1s]">a</span>
          <span className="inline-block animate-glow [animation-delay:6.4s]">s</span>
          <span className="inline-block animate-glow [animation-delay:6.7s]">e</span>
          <span className="inline-block animate-glow [animation-delay:7s]">!</span>
        </h1>
      </div>

      <div className="flex flex-col items-center my-10 p-10">
        {!submitted ? (
          <form
            className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg transition-transform duration-200 hover:shadow-2xl hover:border-1 hover:border-gray-700"
            onSubmit={handleSubmit}
          >
            {/* Form Fields */}
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105"
                placeholder="Your Full Name"
                required
              />
            </div>

            {/* Other form fields... */}
            {/* (Omitted for brevity) */}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-gray-700">
            <h2 className="text-2xl font-bold mb-4">Thank you for your feedback!</h2>
            <p className="text-lg">We appreciate your time and effort. You will be contacted soon.</p>
          </div>
        )}
      </div>

      {/* Follow Me Section */}
      <div className="flex justify-center my-10">
        <h2 className="text-4xl font-bold text-gray-600 animate-running-light">Follow Me</h2>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-20 my-5 m-20 text-gray-500">
        <a href="https://www.facebook.com/profile.php?id=100058576586928&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'facebook']} size="4x" className="hover:text-white transition-colors" />
        </a>
        <a href="https://wa.me/923060484798?text=Hi,%20I'm%20coming%20from%20TahaBlog!" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'whatsapp']} size="4x" className="hover:text-white transition-colors" />
        </a>
        <a href="https://www.instagram.com/tahashabbir12/profilecard/?igsh=OTBpajQ4aXM5Z25l" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'instagram']} size="4x" className="hover:text-white transition-colors" />
        </a>
        <a href="https://github.com/taha12-ok" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} size="4x" className="hover:text-white transition-colors" />
        </a>
        <a href="https://vercel.com/taha-shabbirs-projects" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fas', 'play']} size="4x" className="hover:text-white transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/taha-shabbir-86367525a/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" className="hover:text-white transition-colors" />
        </a>
        <a href="https://telegram.me/923060484798" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'telegram']} size="4x" className="hover:text-white transition-colors" />
        </a>
      </div>
    </div>
  );
}
