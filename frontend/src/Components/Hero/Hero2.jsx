import React from "react";
import qrcode from "../../assets/newQR.png";

function Hero2() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-gray-200 border border-gray-200"> 
      <div className="flex flex-col items-center justify-center text-center px-8 py-6 md:py-10 lg:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-6xl bg-white p-10 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 border border-gray-100">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl text-teal-800 drop-shadow-lg pb-8">
            📸 Get Your Own <br/>Photos
          </h2>
            <p className="text-lg text-gray-800 font-light mb-6 leading-relaxed font-sans">
              Instantly access your event photos with our advanced face recognition technology. 🤖✨
            </p>
            <p className="text-lg text-gray-900 font-semibold italic font-mono">🚀 "Just scan and go!"</p>
          </div>

          {/* QR Code Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="p-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-xl shadow-lg border-1 border-teal-900 transform hover:rotate-3 transition duration-300">
              <img
                src={qrcode}
                alt="QR Code"
                className="w-64 h-64 object-cover rounded-lg shadow-xl border-2 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;