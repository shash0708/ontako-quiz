import React from 'react';
import "./custom.css"
function Card() {
 
  return (
    
    <div className="p-4 bg-white mt-10 mb-3 shadow-md rounded-lg border border-gray-200 transition-transform transform hover:scale-105">
      <div className="flex items-center">
        <img
          className="h-40 w-auto imp"
          src="assests/poster.jpg"
          alt="Your Company"
        />
        <div className="flex-1 p-5 text-xl font-semibold your-div-class">
          <h1>
            Ontako Phase 1 Test
          </h1>
          <div className="mt-2 text-xs font-sans">
            <p className="custom-text">Association of Computer Engineers</p>
          </div>
        </div> 
        
        <div className="your-div-class">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
  <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
</svg>
    <div className="text-lg font-semibold">
        <p style={{ margin: 0 }}>Total Time</p>
        <p style={{ margin: 0 }}>1:00:00 hr</p>
    </div>
</div>

      </div>
    </div>
  );
}

export default Card;
