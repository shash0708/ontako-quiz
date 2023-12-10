import React from 'react';

function Card() {
  return (
    
    <div className="p-4 bg-white mt-10 mb-3 shadow-md rounded-lg border border-gray-200">
  
      <div className='flex items-center'>
        <img
          className="h-40 w-auto"
          src="assests/poster.jpg"
          alt="Your Company"
        />
        <div className='flex-1 p-5 text-xl font-semibold'>
          <h1>SRKR C&DS Phase 2 Test</h1>
          <div className='mt-2 text-xs font-sans'>
            <p>Association of Computer Engineers</p>
          </div>
        </div>
        <div className='ml-2 p-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
          </svg>
        </div>
        <div className='mt-1 text-xs font-semibold'>
        <p>Last date for registration</p>
       
            <p>31 Oct 2024</p>
          </div>
       
      </div>
    </div>
  );
}

export default Card;
