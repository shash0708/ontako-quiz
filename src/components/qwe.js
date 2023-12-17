import React from 'react';
import "./custom.css"
function Qwe() {
  const links = [
    'https://www.google.com/',
    'https://www.youtube.com/',
    'https://tailwindui.com',
  ];

  const handleButtonClick1 = () => {
    // Get a random index between 1 and 3
    const randomIndex = Math.floor(Math.random() * 3) + 1;

    // Get the link based on the random index
    const randomLink = links[randomIndex - 1];

    // Redirect to the random link
    window.location.href = randomLink;
  };

  return (
    <div>
      {/* First section */}
      <div className="p-5 bg-white text-xl mt-10 mb-3 font-semibold shadow-md rounded-lg border border-gray-200 transform hover:scale-105 transition-transform">
        <h1>Rounds</h1>
        <div className="flex items-center">
  <div className="flex p-5 text-xl font-semibold">
    <div className="mt-3 text-3xl flex items-center justify-center w-10 h-11 rounded-full bg-red-900 text-white">
      <p class="flex mt-3 items-center justify-center">1</p>
    </div>
  </div>


          <div className="flex-grow p-6 bg-gray-100 rounded-l border font-normal border-gray-200">
            {/* Content inside the black area */}
            <h1>Mcq</h1>
            <div className="flex items-center justify-end  text-white">
              <button
                className="bg-red-900   border border-red-900  shadow-md  hover:bg-white hover:text-red-900 px-4 py-2 rounded-lg "
                onClick={handleButtonClick1}
              >
                Start
              </button>
            </div>
            <div className="flex items-center your-div-class">
              <p>
                Start date: 06 Nov 2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End date: 06 Nov 2023
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="p-5 bg-white text-xl mt-10 mb-3 font-semibold shadow-md rounded-lg border border-gray-200 transform hover:scale-105 transition-transform">
      <div className="flex items-center">
  <div className="flex p-5 text-xl font-semibold">
    <div className="mt-3 text-3xl flex items-center justify-center w-10 h-11 rounded-full bg-red-900 text-white">
      <p class="flex mt-3 items-center justify-center">2</p>
    </div>
  </div>

          <div className="flex-grow p-6 bg-gray-100 rounded-l border font-normal  border-gray-200">
            {/* Content inside the black area */}
            <h1>Coding</h1>
            <div className="flex items-center  text-white justify-end">
              <button
                className="bg-red-900 text-xl shadow-md border border-red-900 hover:bg-white hover:text-red-900 px-4 py-2 rounded-lg transition-all duration-300"
                onClick={handleButtonClick1}
              >
                Start
                  <p>asodfjg</p>
              </button>
              
            </div>
            <div className="flex items-center your-div-class">
              <p>
                Start date: 06 Nov 2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End date: 06 Nov 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qwe;
