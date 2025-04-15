import { useRef, useEffect, useState } from "react";
import hero from "../../assets/hero1.jpg";
import cnvLogo from "../../assets/cnvWhite.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faUserGraduate,
  faBookOpen,
  faMapMarkerAlt,
  faClock,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [startCount, setStartCount] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(80);

  const heroRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top 80%",
      onEnter: () => setStartCount(true),
    });
  }, []);

  useEffect(() => {
    if (startCount) {
      const yearsInterval = setInterval(() => {
        setYearsCount((prev) => (prev < 10 ? prev + 1 : prev));
      }, 100);

      const studentsInterval = setInterval(() => {
        setStudentsCount((prev) => (prev < 10 ? prev + 1 : prev));
      }, 100);

      const coursesInterval = setInterval(() => {
        setCoursesCount((prev) => (prev < 100 ? prev + 1 : prev));
      }, 50);

      return () => {
        clearInterval(yearsInterval);
        clearInterval(studentsInterval);
        clearInterval(coursesInterval);
      };
    }
  }, [startCount]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(bgRef.current, { scale: 1.3, duration: 2, ease: "power2.out" });
    tl.from(
      heroRef.current,
      { opacity: 0, y: 100, duration: 1.5, ease: "power2.out" },
      "-=1.5"
    );
    tl.from(
      textRef.current.children,
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
      },
      "-=1"
    );
  });

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <span className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-80"></span>
      </div>

      <div className="mt-20 relative w-full max-w-2xl text-center px-4 sm:px-6 z-10">
        <div ref={textRef} className="text-white">
          <div className="flex justify-center">
          <img
  src={cnvLogo}
  alt="CNV Logo"
  className="w-56 h-auto sm:w-72 md:w-96 pt-10 mx-auto"
/>

          </div>

          <p className="mt-4 text-base sm:text-lg md:text-2xl text-white pt-4 text-center px-2">
            HONOURING BATCHES OF THE YEAR 2024-2025
          </p>

          <div className="mt-4 text-white text-sm sm:text-base font-medium flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-2 text-center">
  <div className="flex items-center gap-1">
    <FontAwesomeIcon icon={faMapMarkerAlt} />
    <a
      href="https://g.co/kgs/61LY6A7"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      Location
    </a>
  </div>
  <div className="flex items-center gap-1">
    <FontAwesomeIcon icon={faCalendarAlt} />
    <span>Date: May 18, 2025 (Sunday)</span>
  </div>
  <div className="flex items-center gap-1">
    <FontAwesomeIcon icon={faClock} />
    <span>Time: 3:00 PM</span>
  </div>
</div>


          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8 pb-6 px-4">
            {[
              {
                icon: faAward,
                count: yearsCount,
                label: "Years of Excellence",
              },
              {
                icon: faUserGraduate,
                count: studentsCount,
                label: "Students Trained",
                suffix: "k+",
              },
              {
                icon: faBookOpen,
                count: coursesCount,
                label: "Industrial Courses",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center text-left space-x-4"
              >
                <FontAwesomeIcon icon={item.icon} size="2x" color="white" />
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {item.count}
                    {item.suffix || "+"}
                  </div>
                  <p className="text-white text-sm md:text-base font-medium mt-1">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10 z-10">
        <a
          href="https://forms.gle/QxZFTJKKXCnhyMr26"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 bg-teal-600 text-white text-lg rounded-xl shadow-lg hover:bg-white hover:text-black transition">
            Register Now
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
