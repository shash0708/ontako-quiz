import React, { useState } from 'react';

const ExamComponent = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  // Assuming you have an array of links
  const allLinks = ['link1', 'link2', 'link3'];

  // Function to handle login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Function to handle link assignment on button click
  const handleAssignLink = () => {
    // Check if the user is logged in
    if (isLoggedIn) {
      // Get a random link from the array
      const randomIndex = Math.floor(Math.random() * allLinks.length);
      const randomLink = allLinks[randomIndex];

      // Set the selected link in state
      setSelectedLink(randomLink);

      // You can perform any additional actions here, like saving the link for the user
    } else {
      // Handle not logged in scenario
      console.log('User is not logged in');
    }
  };

  return (
    <div>
      {/* Render login button */}
      {!isLoggedIn && <button onClick={handleLogin}>Log In</button>}

      {/* Render MCQ button */}
      {isLoggedIn && <button onClick={handleAssignLink}>MCQ Button</button>}

      {/* Display selected link if available */}
      {selectedLink && (
        <div>
          <p>Selected Link:</p>
          <p>{selectedLink}</p>
        </div>
      )}
    </div>
  );
};

export default ExamComponent;
