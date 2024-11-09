import React, { useEffect } from "react";
import { initAOS } from "./utils/aosInit"; // Mengimpor fungsi inisialisasi AOS
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ProjectsAndSkills from "./components/ProjectAndSkills";
import EducationAndContact from "./components/EducationAndContact";

function App() {
  useEffect(() => {
    initAOS(); // Memanggil fungsi inisialisasi AOS
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-gray-900 to-teal-800 text-white">
      <Navbar />
      <main className="flex flex-col items-center">
        <Profile />
        <ProjectsAndSkills />
        <EducationAndContact />
      </main>
    </div>
  );
}

export default App;
