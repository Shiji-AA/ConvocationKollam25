import { useEffect, useRef } from "react";
import architect from "../../assets/image1.jpg";
import hr from "../../assets/image2.jpg";
import edu from "../../assets/image3.jpg";
import edu1 from "../../assets/image5.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero1() {
  const imgRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    imgRefs.forEach((imgRef) => {
      gsap.fromTo(
        imgRef.current,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );

      gsap.fromTo(
        imgRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative bg-white py-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-gray-900 drop-shadow-lg pb-8">
          ARCITE Convocation Ceremonies
        </h2>
      </div>

      {/* Grid Layout with 4 columns on large screens */}
      <div className="max-w-7xl px-2 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {[
          {
            img: architect,
            ref: imgRefs[0],
            link: "https://www.youtube.com/watch?v=jU_S7eio_J4",
            title: "Convocation Ceremony 2021-22",
          },
          {
            img: hr,
            ref: imgRefs[1],
            link: "https://www.youtube.com/watch?v=7sZ7w8NV2V4",
            title: "Convocation Ceremony 2022-23",
          },
          {
            img: edu,
            ref: imgRefs[2],
            link: "https://www.youtube.com/watch?v=xtgDPJaDJaU",
            title: "Convocation Ceremony 2023-24",
          },
          {
            img: edu1,
            ref: imgRefs[3],
            link: "https://www.youtube.com/watch?v=xtgDPJaDJaU",
            title: "Convocation Ceremony Kochi 2024-25",
          },
        ].map(({ img, ref, link, title }, index) => (
          <div
            key={index}
            className="group relative text-center bg-white rounded-2xl shadow-lg p-5 overflow-hidden transform transition-all duration-500 hover:scale-105"
          >
            <div className="bg-white rounded-lg shadow-md p-3 border border-gray-300">
              <a href={link} className="block" target="_blank" rel="noopener noreferrer">
                <img
                  ref={ref}
                  className="w-full h-56 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt={title}
                />
              </a>
            </div>
            <div className="mt-4">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-semibold text-black group-hover:text-gray-500 transition-colors">
                  {title}
                </h3>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero1;
