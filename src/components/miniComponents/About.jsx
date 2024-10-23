import React from "react";
import PARTNER_1 from '../../assets/images/partner-1.webp'
import PARTNER_2 from '../../assets/images/partner-2.png'
import PARTNER_3 from '../../assets/images/partner-3.jpeg'
import PARTNER_4 from '../../assets/images/partner-4.webp'
import PARTNER_5 from '../../assets/images/partner-5.webp'
import PARTNER_6 from '../../assets/images/partner-6.webp'
import PARTNER_7 from '../../assets/images/partner-7.png'
import PARTNER_8 from '../../assets/images/partner-8.webp'

const AboutUs = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-[#fffcd1] via-[#bfddff] via-[#ccffca] via-[#f7b4b4] to-[#c3ffbd] overflow-hidden">
      {/* Partners Section */}
      

      {/* Existing About Us Section */}
      <section className="relative flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://www.videvo.net/videvo_files/converted/2016_11/preview/160828_Fireworks_01_1080p.mp414571.webm"
            type="video/mp4"
          />
        </video>

        {/* Overlay for the video to darken it */}
        <div className="absolute inset-0 opacity-50 z-1 text-black"></div>

        {/* Content of the About Us Section */}
        <div className="relative z-10 max-w-6xl mx-auto p-6 sm:p-10 lg:p-16 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-black">
            Investing in innovation together
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-light mb-6 text-black">
            Companisto is the investment platform for startups and growth companies. Business
            angels and investors participate in groundbreaking innovations, promising companies,
            and ideas that write history through venture capital. As a fintech company, we stand
            for lean processes, specialized knowledge, and efficient solutions. We are the driver
            of innovation in the field of professional online corporate finance. In a diverse society,
            we assume responsibility for the founding culture in Germany and Europe.
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-black">
            Pioneering Spirit
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-light mb-6 text-black">
            Pioneering spirit as we understand it is the uncompromising urge and determination
            to explore new paths to success. Pioneers take risks. Not everyone achieves their goal.
            But those who succeed have the potential to create great things. Pioneering spirit
            develops in outstanding teams and through special personalities. Promising business ideas
            arise from creativity, assertiveness, and initiative. The ability to turn these ideas into
            product or process innovations makes it possible to open up new markets. This is the
            cornerstone for the successful companies of tomorrow. Companisto is the partner of pioneers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            {/* SVG Decorative Icons */}
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
              </svg>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l2 7h7l-5 4 2 7-7-5-7 5 2-7-5-4h7z" />
              </svg>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m8-7H4" />
              </svg>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-lg sm:text-xl lg:text-2xl font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300">
              Join Our Journey
            </button>
          </div>
        </div>

        {/* Bottom SVG Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg className="w-full h-32 lg:h-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,320L48,288C96,256,192,192,288,154.7C384,117,480,107,576,112C672,117,768,139,864,170.7C960,203,1056,245,1152,234.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl text-left font-thin mb-6">Our Partners</h2>
          <div className="flex justify-center items-center flex-wrap gap-8 mb-6">
            {/* Partner Logos */}
            <img src={PARTNER_1} alt="Partner 1" className="h-12" />
            <img src={PARTNER_2} alt="Partner 2" className="h-12" />
            <img src={PARTNER_3} alt="Partner 3" className="h-12" />
            <img src={PARTNER_4} alt="Partner 4" className="h-12" />
            <img src={PARTNER_5} alt="Partner 5" className="h-12" />
            <img src={PARTNER_6} alt="Partner 6" className="h-12" />
            <img src={PARTNER_7} alt="Partner 7" className="h-12" />
            <img src={PARTNER_8} alt="Partner 8" className="h-12" />
          </div>
        </div>
      </section>

      {/* Investment Platform Section */}
      <section className="relative flex items-center justify-center h-80 shadow-md">
        <div className="text-center max-w-2xl mx-auto py-12">
          <h2 className="text-4xl font-bold mb-4">Companisto – The Investment Platform</h2>
          <p className="text-lg mb-6">
            Register now to get full access to all company profiles.
          </p>
          <button className="px-8 py-3 bg-red-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-red-600 transition-all duration-300">
            {/* <Link to="/register" className="">Sign Up</Link>
             */}
          </button>
        </div>
      </section>

      {/* Please Note Section */}
      <section className="py-4 ">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-md text-gray-600">
            The acquisition of the offered securities and investments is associated with
            considerable risks and can lead to the complete loss of the invested assets.
            The expected yield is not guaranteed and may be lower. Whether it is a security
            or an asset investment can be seen in the description of the investment opportunity.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
