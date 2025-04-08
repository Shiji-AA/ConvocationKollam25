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
import johnMathew from "../../assets/johnMathew.jpeg";
import sinte from "../../assets/sinte.jpeg";

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
      className="relative w-screen min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <span className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-80"></span>
      </div>

      <div className="relative w-full max-w-2xl text-center px-6 z-10">
        <div ref={textRef} className="text-white">
          <div className="flex justify-center">
            <img src={cnvLogo} alt="CNV Logo" className="w-83 h-52 pt-20" />
          </div>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white pt-5">
            HONOURING BATCHES OF THE YEAR 2024-2025
          </p>

          <div className="mt-2 text-white text-xs md:text-base font-small flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <a
                href="https://maps.app.goo.gl/VPp9NgjZCtstoxZ28"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Location
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>Date: May 9, 2025 (Friday)</span>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faClock} />
              <span>Time: 3:00 PM</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 lg:space-x-8 pt-8 pb-6 space-y-6 sm:space-y-0">
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
                data-aos="fade-up"
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

      {/* Dignitary section - moved outside the max-w-2xl */}
      <div className="mt-8 w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 z-10">
        {/* Dignitary 1 */}
        <div className="flex-1 bg-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl text-center transition-transform duration-300 hover:scale-105">
          <div className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-white shadow-md p-1 bg-gray-900/50 overflow-hidden">
            <img
              src={johnMathew}
              alt="John Mathew Sebastian"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="text-2xl font-semibold text-white mb-2">
            Mr. John Mathew Sebastian
          </p>
          <p className="text-sm md:text-sm text-gray-300 leading-tight">
            DGM & Head of Talent Acquisition & Employee Experience,<br/> V-Guard
            Industries Ltd
          </p>
        </div>

        {/* Dignitary 2 */}
        <div className="flex-1 bg-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl text-center transition-transform duration-300 hover:scale-105">
          <div className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-white shadow-md p-1 bg-gray-900/50 overflow-hidden">
            <img
              src={sinte}
              alt="Sinte P A"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="text-2xl font-semibold text-white mb-2">
            Mr. Sinte P A
          </p>
          <p className="text-sm md:text-sm text-gray-300 leading-tight">
            Sub Inspector of Police,
            <br />
            Kadavantra Police Station, Kochi
          </p>
        </div>
      </div>

      <div className="mt-10 mb-10 z-10">
  <a href="https://forms.gle/jUqeQh2dYrk5aq5u9" target="_blank" rel="noopener noreferrer">
    <button className="px-6 py-3 bg-teal-600 text-white text-lg rounded-xl shadow-lg hover:bg-white hover:text-black transition">
      Register Now
    </button>
  </a>
</div>

    </section>
  );
}

export default Hero;
