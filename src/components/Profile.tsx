import React, { useState } from "react";

const Profile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      id="home"
      className="relative min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-teal-700 text-white flex flex-col items-center"
    >
      {/* Konten Profil */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow px-6 w-full mt-20">
        {/* Foto Profil di Sisi Kiri */}
        <div
          className="mt-8 md:mt-0 md:mr-4 flex-shrink-0 md:w-1/2 flex justify-center relative"
          data-aos="fade-left"
        >
          {/* Gambar Profil dengan Efek Hover dan Border */}
          <div
            onClick={openModal}
            className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden relative shadow-2xl transform hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <img
              src="/image/fotosaya.png"
              alt="Foto Profil"
              className="object-cover w-full h-full"
              data-aos="zoom-in"
            />
            {/* Overlay dengan Pencahayaan Lebih Terang */}
            <div className="absolute inset-0 bg-teal-800 opacity-20 hover:opacity-40 transition-opacity duration-300"></div>
            {/* Border dan Highlight di Sekitar Gambar */}
            <div className="absolute inset-0 border-4 border-teal-400 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Teks Profil yang Dipindahkan ke Kanan dan Ditempatkan di Tengah */}
        <div
          className="md:w-1/2 space-y-4 text-center md:text-left flex flex-col justify-center items-center md:items-start md:px-12"
          data-aos="fade-right"
        >
          <h1 className="text-4xl font-semibold leading-snug" data-aos="fade-up">
            Hello, I&apos;m <br />
            <span className="text-teal-400" data-aos="zoom-in">
              Fairuz Hukama Khasyi Firzatullah
            </span>
          </h1>

          <h2
            className="text-2xl font-semibold text-teal-300 mt-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="text-teal-300 animate-text-change">Front-end</span>
          </h2>

          <p
            className="text-lg text-gray-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            I am a student passionate about web development, with foundational
            skills in HTML, CSS, JavaScript, React, Node.js, and MySQL. I’ve
            completed projects like a cashier system and a project MES4N,
            focusing on creating functional, user-friendly experiences. My goal
            is to become a versatile programmer.
          </p>
        </div>
      </div>

      {/* Scroll Down Section */}
      <div
        className="absolute bottom-12 text-center w-full"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <p className="text-lg">Scroll down to see more</p>
        <a
          href="#about"
          className="text-teal-400 text-4xl hover:text-teal-500 transition-colors duration-300"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <span className="inline-block animate-bounce">
            &#8595;
          </span>
        </a>
      </div>

      {/* Modal untuk memperbesar gambar */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src="/image/fotosaya.png"
              alt="Foto Profil Besar"
              className="w-full max-w-3xl rounded-lg shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-teal-500 rounded-full px-3 py-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
