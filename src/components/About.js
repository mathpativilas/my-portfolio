import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen   bg-gradient-to-b from-gray-800 to-black text-white  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I have more than 3 years of experience as a developer and specialize
          in building user-friendly, responsive websites.In my previous role , I
          was responsible for developing and implementing the company’s website
          design. I have a strong understanding of front-end development and am
          proficient in using HTML, CSS, and JavaScript,React js,Material
          Ui,Bootstrap. I am a motivated and creative individual who is always
          looking for new ways to improve my skills. I am passionate about web
          development and enjoy working on projects that challenge me to think
          outside the box.
        </p>
        <div>
          <h2 className="text-1xl sm:text-2xl font-bold text-white  pt-5">
            Basic Information
          </h2>

          <div className="pt-5">
            <h2 className=" text-xl">
              Full Name : Vilas Revansiddhayya Mathpati <br />
              Email : atechy.vilas@gmail.com <br /> Phone: +971543742090 <br />{" "}
              Age : 26 <br /> Adress : Al quadesia tiger Building,Sharjah,UAE.{" "}
              <br />
              Languages : English,Hindi,Marathi,Kannada
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
