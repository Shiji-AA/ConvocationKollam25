import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 relative">
      <div className="text-sm font-light"> {/* Reduced text size here */}
        © All Rights Reserved 2025 <br />
        <span className="text-lg font-medium ">
        ARCITE Educational Solutions Pvt Ltd
        </span>
      </div>
      {/* Thick Teal Underline */}
      <div className="w-32 h-1 bg-teal-500 mx-auto mt-3"></div>
    </footer>
  );
}

export default Footer;