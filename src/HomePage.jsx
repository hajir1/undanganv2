import React from "react";

import Particles from "./Particle";
const HomePage = () => {
  const skeletonArray = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className="bgPrimary w-full md:w-1/2">
      <div className="w-full flex">
        <div className="satu">
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="dua">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="tiga">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="empat">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="lima">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="enam">
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="tujuh">
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="lapan">
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="mbilan">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="sepuluh">
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="sebelas">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="duabelas">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="tigabelas">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="empatbelas">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="limabelas">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="enambelas">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="tujuhbelas">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="lapanbelas">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="mbilanbelas">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="duapuluh sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="duasatu sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="duadua sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="duatiga sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="duaempat sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="dualima sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="duaenam sm:hidden">
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="duatujuh sm:hidden">
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="dualapan sm:hidden">
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="duambilan sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="tigapuluh sm:hidden">
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>{" "}
        <div className="tigasatu sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="tigadua sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="tigatiga sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="tigaempat sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="tigalima sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="tigaenam sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="tigatujuh sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
        <div className="tigalapan sm:hidden">
          {" "}
          {skeletonArray.map((item, index) => (
            <Particles key={index} />
          ))}
        </div>
      
        
      </div>{" "}
      <div className="w-full h-60 relative">
        <h1 className="title">16</h1>
        <h1 className="quote text-[4rem] max-[355px]:text-[3rem]">Sweet Sixteen</h1>
      </div>
      <div className="w-full -translate-y-4 relative flex flex-col items-center max-[355px]:-translate-y-0 max-[355px]:mt-5">
        <h1 className="uppercase text-center text-gray-200 text-[0.9rem] font-sans">
          please join us in celebrating
        </h1>
        <h1 className="uppercase text-center text-gray-50 text-2xl mt-8 tracking-widest font-semibold">
          abigail 16th birthday
        </h1>
        <h1 className="uppercase text-center text-gray-200 text-[0.9rem] mt-5 w-[70%] tracking-widest">
          saturday ,september 22 , 2024 at 3 o'clock in the afternoon
        </h1>
        <h1 className="uppercase text-center text-gray-200 text-[0.9rem] mt-5 w-[60%] font-sans tracking-widest">
          1234 , street address city , state , zip
        </h1>
        <h1 className="uppercase text-center text-gray-200 text-[0.9rem] mt-5 w-[60%] font-sans tracking-widest">
          rsvp by august 22 , 2024 to sarah 123.456.7890
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
