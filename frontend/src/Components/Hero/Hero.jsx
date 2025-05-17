import { useRef, useEffect, useState } from "react";
import hero from "../../assets/hero1.jpg";
import cnvLogo from "../../assets/cnvWhite.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sunand from "../../assets/sunand.jpg";
import guest from '../../assets/guest2.jpg';
import vishnunath from '../../assets/vishnunath.jpg'
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

      <div className="mt-10 relative w-full max-w-2xl text-center px-4 sm:px-6 z-10">
        <div ref={textRef} className="text-white">
        

        <div className="flex justify-center mt-8 sm:mt-6 px-4">
  <img
    src={cnvLogo}
    alt="CNV Logo"
    className="w-56 sm:w-64 md:w-80 lg:w-96 h-auto"
  />
</div>



          <p className="mt-4 text-base sm:text-lg md:text-2xl text-white pt-4 text-center px-2">
            HONOURING BATCHES OF THE YEAR 2024-2025
          </p>



     {/* Location and Date Section */}
     <div className="mt-2 text-white text-xs md:text-base font-small flex items-center justify-center space-x-4">
  <div className="flex items-center space-x-1">
    <FontAwesomeIcon icon={faMapMarkerAlt} />
    <a href="https://g.co/kgs/61LY6A7" target="_blank" rel="noopener noreferrer" className="underline">Location</a>
  </div>
  <div className="flex items-center space-x-1">
    <FontAwesomeIcon icon={faCalendarAlt} />
    <span>Date: May 18, 2025 (Sunday)</span>
  </div>
  <div className="flex items-center space-x-1">
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


{/* Dignitary section - moved outside the max-w-2xl */}
{/* Dignitary Section */}
<div className="mt-16 px-4 z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center">
  {/* Chief Guest */}
  <div className="bg-white/10 p-6 rounded-3xl shadow-2xl w-full sm:w-2/3 lg:w-1/2 hover:scale-105 transition-transform duration-300">
    <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 border-4 border-white shadow-lg p-1 bg-gray-900/50 overflow-hidden">
      <img
        src={vishnunath}
        alt="Mr. P. C. Vishnunadh"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <p className="text-2xl sm:text-3xl font-bold text-white mb-2">
      Mr. P. C. Vishnunadh
    </p>
    <p className="text-sm md:text-base text-gray-300 leading-tight">
      Chief Guest<br />Member of the Kerala Legislative Assembly
    </p>
  </div>

  {/* Other Guests */}
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
    {/* Guest 1 */}
    <div className="bg-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl text-center hover:scale-105 transition-transform duration-300">
      <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-md p-1 bg-gray-900/50 overflow-hidden">
        <img
          src={sunand}
          alt="Mr. Sunand K Pillai"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <p className="text-2xl font-semibold text-white mb-2">
        Mr. Sunand K Pillai
      </p>
      <p className="text-sm text-gray-300 leading-tight">
        Director,<br />
        Bullswag Builders India Pvt Ltd
      </p>
    </div>

    {/* Guest 2 */}
    <div className="bg-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl text-center hover:scale-105 transition-transform duration-300">
      <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-md p-1 bg-gray-900/50 overflow-hidden">
        <img
          src={guest}
          alt="Dr. Gouri Mohan L"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <p className="text-2xl font-semibold text-white mb-2">
        Dr. Gouri Mohan L
      </p>
      <p className="text-sm text-gray-300 leading-tight">
        Principal,<br />
        TKM Institute of Technology, Karuvelil
      </p>
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
