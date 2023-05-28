import React from "react";
import NavButton from "./NavButton";

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-row">
      <a
        className="text-2xl font-extrabold no-italic leading-6 text-[#FF4300]"
        href=""
      >
        SPYRO
      </a>

      <div className="flex flex-1 sm:justify-center space-x-4 justify-self-center">
        {[
          ["Classes", "/dashboard"],
          ["Team", "/team"],
          ["About Us", "/projects"],
          ["Gallery", "/reports"],
        ].map(([title, url]) => (
          <a href={url} className="text-base leading-6">
            {title}
          </a>
        ))}
      </div>

      <NavButton />
    </nav>
  );
};

export default Navigation;
