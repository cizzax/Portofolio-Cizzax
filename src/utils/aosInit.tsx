import AOS from "aos";
import "aos/dist/aos.css";

export const initAOS = () => {
  AOS.init({
    duration: 1000, // Durasi animasi (ms)
    once: false,      // Animasi hanya sekali saat elemen muncul
  });
};
