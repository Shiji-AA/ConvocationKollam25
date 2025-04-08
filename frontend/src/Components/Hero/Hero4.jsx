import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Hero4() {
  return (
    <section className="w-full h-[300px] flex items-center justify-center bg-gray-700 bg-cover bg-center relative px-4">
      <div className="text-center bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-xl border border-white/20">
        
        {/* Updated Heading Styling */}
        <h2 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500 tracking-wide">
          🎓 Share Your Graduation Journey!
        </h2>

        <p className="mt-3 text-sm sm:text-base text-white leading-relaxed">
          Join the excitement of graduation. Share your day and celebrate your success with family and friends on social media.
        </p>

        <div className="mt-6">
          <ul className="flex justify-center gap-5">
            {[
              { href: "https://www.facebook.com/arciteschooloftechnicaleducation/", icon: faFacebookF, label: "Facebook" },
              { href: "https://www.instagram.com/arcite.in/", icon: faInstagram, label: "Instagram" },
              { href: "https://x.com/arcite_in", icon: faXTwitter, label: "Twitter" },
              { href: "https://www.linkedin.com/company/arc-institute-of-technical-education/", icon: faLinkedin, label: "LinkedIn" },
              { href: "https://www.youtube.com/@arciteschooloftechnicaledu6571", icon: faYoutube, label: "YouTube" },
            ].map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-white transition-transform hover:scale-105"
                >
                  <FontAwesomeIcon icon={icon} size="xs" className="p-2 bg-white/20 text-white rounded-full hover:bg-teal-400 hover:text-white transition-colors" />
                  <span className="text-xs sm:text-sm">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero4;