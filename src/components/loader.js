import React from "react";
import { TypeAnimation } from "react-type-animation";
import DubleCircle from '../components/dubleCircle'

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-[99] hidden transition-all duration-1000 justify-center items-center" id="loader-wrapper">
        <TypeAnimation
            className="text-white text-3xl"
                sequence={[

                    "Witaj w Seovileo",
                    2000, //
                ]}
                wrapper="span"
                cursor={true}
            />
            <DubleCircle />
    </div>
  );
};
export default Loader;