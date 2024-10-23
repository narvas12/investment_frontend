import React from 'react';

const InvestmentStatus = () => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-mono mb-6">Status of our Investments</h2>

        {/* Main Stats Box */}
        <div className="flex flex-col lg:flex-row justify-center items-start space-y-6 lg:space-y-0 lg:space-x-10">
          {/* Volume Box */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Volume</h3>
            <p className="text-2xl font-light mb-4">184,226,680.45 €</p>
            <div className="flex justify-between items-center">
              <div className="text-left">
                <p className="flex items-center text-blue-600 font-medium">
                  <span className="mr-2">🔵</span> Active
                </p>
                <p className="flex items-center text-green-600 font-medium">
                  <span className="mr-2">✅</span> Paid out / Exit
                </p>
                <p className="flex items-center text-red-600 font-medium">
                  <span className="mr-2">❌</span> Failed
                </p>
              </div>
              <div className="text-right">
                <p>118,962,987 €</p>
                <p>25,390,712 €</p>
                <p>39,872,981 €</p>
              </div>
              <div className="text-right ml-4">
                <p>64.6 %</p>
                <p>13.8 %</p>
                <p>21.6 %</p>
              </div>
            </div>
          </div>

          {/* Financing Rounds Box */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Financing Rounds</h3>
            <p className="text-2xl font-light mb-4">336 Rounds</p>
            <div className="flex justify-between items-center">
              <div className="text-left">
                <p className="flex items-center text-blue-600 font-medium">
                  <span className="mr-2">🔵</span> Active
                </p>
                <p className="flex items-center text-green-600 font-medium">
                  <span className="mr-2">✅</span> Paid out / Exit
                </p>
                <p className="flex items-center text-red-600 font-medium">
                  <span className="mr-2">❌</span> Failed
                </p>
              </div>
              <div className="text-right">
                <p>207 Rounds</p>
                <p>41 Rounds</p>
                <p>88 Rounds</p>
              </div>
              <div className="text-right ml-4">
                <p>61.6 %</p>
                <p>12.2 %</p>
                <p>26.2 %</p>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mt-8 bg-yellow-100 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-xl font-semibold mb-4 lg:mb-0">
              Portfolio value of our active rounds
            </p>
            <p className="text-4xl font-light">206,004,734 €</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-semibold">Value increase active portfolio</p>
            <p className="text-green-600 text-2xl font-medium">↑ 73% (+87,041,747 €)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentStatus;
