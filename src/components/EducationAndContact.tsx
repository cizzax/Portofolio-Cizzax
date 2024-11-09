import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationAndContact: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // State untuk data form dan status pengiriman
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Fungsi untuk menangani perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk menangani pengiriman form ke Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mgvwqzzy", {  // URL Formspree Anda
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form setelah berhasil
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-gradient-to-t from-teal-700 via-gray-800 to-gray-900 text-white flex flex-col items-center pt-12"
    >
      <h2 className="text-4xl font-bold text-teal-500 mb-8 text-center" data-aos="fade-up">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row w-full max-w-6xl px-8 space-y-12 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/2 mt-8 mb-12" data-aos="fade-right">
          <h3 className="text-2xl font-semibold mb-4 text-teal-300">Education</h3>
          <ul className="space-y-4 text-lg border-l-4 border-teal-300 pl-6">
            <li className="flex items-center space-x-3">
              <span className="bg-teal-300 rounded-full h-3 w-3 inline-block"></span>
              <span>SDN Raya Barat 060 (2013- 2019)</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-teal-300 rounded-full h-3 w-3 inline-block"></span>
              <span>Mts Assakinah (2019 - 2022)</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="bg-teal-300 rounded-full h-3 w-3 inline-block"></span>
              <span>SMKN 4 Bandung</span>
            </li>
            <li className="flex items-center space-x-3 pl-6 text-sm">
              <span className="text-teal-300">Rekayasa Perangkat Lunak</span>
            </li>
            <li className="flex items-center space-x-3 pl-6">
              <span>(2022 - Sekarang)</span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h3 className="text-2xl font-semibold mb-4 text-teal-300">Contact</h3>
          <form className="space-y-4 text-gray-800" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-white focus:outline-none shadow-md transition duration-300"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white focus:outline-none shadow-md transition duration-300"
              onChange={handleChange}
              value={formData.email}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-white h-24 focus:outline-none shadow-md transition duration-300"
              onChange={handleChange}
              value={formData.message}
            />
            <button
              type="submit"
              className="w-full bg-teal-600 p-3 rounded-lg text-white font-semibold hover:bg-teal-700 transition"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
        </div>
      </div>

      <div className="flex items-center justify-between w-full max-w-6xl px-8 mt-12 text-teal-50 text-lg space-x-2">
        <div className="flex items-center space-x-3" data-aos="fade-up">
          <span className="material-icons text-2xl">location_on</span>
          <span>Jl. Babakan Ciparay, Bandung</span>
        </div>
        <div className="flex items-center space-x-3" data-aos="fade-up">
          <span className="material-icons text-2xl">email</span>
          <span>fairuzhukama21@gmail.com</span>
        </div>
      </div>

      <div className="w-full bg-gradient-to-t from-gray-800 via-teal-900 py-16 mt-16">
        <div className="flex justify-center space-x-8 text-4xl" data-aos="fade-up">
          <a
            href="https://www.instagram.com/fairuzfrza/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors duration-300"
          >
            <i className="fa fa-instagram" style={{ color: "white" }}></i>
          </a>
          <a
            href="https://github.com/cizzax"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors duration-300"
          >
            <i className="fa fa-github" style={{ color: "white" }}></i>
          </a>
        </div>
        <div className="text-center text-teal-50 mt-4">
          <p>© Original</p>
        </div>
      </div>
    </section>
  );
};

export default EducationAndContact;
