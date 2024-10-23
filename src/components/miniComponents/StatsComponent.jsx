import React from "react";
import CountUp from "react-countup";

const FactCounter = () => {
  return (
    <div className="bg-gray-100 py-56 rounded-sm">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-mono mb-10">Interesting Facts</h1>
        <div className="grid md:grid-cols-4">
          {/* Fact 1 */}
          <div className="bg-white text-black p-4 shadow-lg">
            <span className="block text-4xl md:text-3xl lg:text-4xl font-semibold text-[#bb2d1a]">
              <CountUp end={161466} duration={2.5} />
            </span>
            <p className="mt-4 text-xl">Investors</p>
          </div>

          {/* Fact 2 */}
          <div className="bg-white text-black p-4 shadow-lg">
            <span className="block text-5xl md:text-3xl lg:text-4xl font-semibold text-[#13ad20]">
              <CountUp end={256619080} duration={2.5} />
            </span>
            <p className="mt-4 text-xl">Investment Commitments in €</p>
          </div>

          {/* Fact 3 */}
          <div className="bg-white text-black p-4 shadow-lg">
            <span className="block text-5xl md:text-3xl lg:text-4xl font-semibold text-[#41024D]">
              <CountUp end={366} duration={2.5} />
            </span>
            <p className="mt-4 text-xl">Financing Rounds</p>
          </div>

          {/* Fact 4 */}
          <div className="bg-white text-black p-4 shadow-lg">
            <span className="block text-5xl md:text-3xl lg:text-4xl font-semibold text-[#d3c01b]">
              <CountUp end={200} duration={2.5} />
            </span>
            <p className="mt-4 text-xl">Team Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactCounter;
