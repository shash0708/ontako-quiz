import React from 'react';


function Qwe() {
  const handleButtonClick1 = () => {
    // Replace '/your-redirect-path' with the actual path you want to redirect to
    window.location.href = 'https://tailwindui.com/components#pricing';
  };
  const handleButtonClick2= () => {
    // Replace '/your-redirect-path' with the actual path you want to redirect to
    window.location.href = 'https://tailwindui.com/components#pricing';
  };

  return (
    <div>    
      <div className="p-5 bg-white text-xl mt-10 mb-3 font-semibold shadow-md rounded-lg border  border-gray-200">
      <h1>Rounds</h1>
      <div className='flex items-center'>
        <div className='flex p-5 text-xl font-semibold'>
          <div className="mt-3 text-lg flex items-center justify-center w-10 h-10 rounded-full bg-red-900 text-white relative text-xs">
            <p>1</p>
          </div>
        </div>
        <div className="flex-grow p-9 bg-gray-100 rounded-l border font-normal border-gray-200">
          {/* Content inside the black area */}
          <h1>Mcq</h1>
          <div className='flex items-center justify-end  '>
            <button className="bg-red-900 shadow-md  border border-red-900 hover:bg-white text-white hover:text-red-900  px-4 py-2 rounded-lg"
             onClick={handleButtonClick1}>Start</button>
          </div>
          <div className='flex items-center '>
            <p>Start date: 06 Nov 2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  End date: 06 Nov 2023</p>
          </div>
        
        </div>

        
      </div>
     
    </div>
    <div className="p-5 bg-white text-xl mt-10 mb-3 font-semibold shadow-md rounded-lg border border-gray-200">
     
     <div className='flex items-center'>
       <div className='flex p-5 text-xl font-semibold'>
         <div className="mt-3 text-lg flex items-center justify-center w-10 h-10 rounded-full bg-red-900 text-white relative text-xs">
           <p>2</p>
         </div>
       </div>
       <div className="flex-grow p-9 bg-gray-100 rounded-l border font-normal border-gray-200">
         {/* Content inside the black area */}
         <h1>Coding</h1>
         <div className='flex items-center justify-end  '>
           <button className="bg-red-900 text-xl shadow-md  border border-red-900 hover:bg-white text-white hover:text-red-900  px-4 py-2 rounded-lg"
            onClick={handleButtonClick2}
            >Start</button>
         </div>
         <div className='flex items-center '>
           <p>Start date: 06 Nov 2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  End date: 06 Nov 2023</p>
         </div>
       
       </div>

       
     </div>
   </div>
    </div>

  );
}

export default Qwe;
