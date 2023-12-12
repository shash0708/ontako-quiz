// Home.js
import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import Card from "../Card";
import Qwe from "../qwe";
import "../custom.css"; // Import custom CSS

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <div className="flex flex-col md:flex-row mt-4 items-center justify-between">
        {/* Your other navbar content */}
        <p className="icon-button  md:mr-10 text-2xl">
      
        </p>
        <button className="icon-button" onClick={handleLogout}>
          {/* ... Your logout button content ... */}
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
        </button>
      </div>

      {/* Content */}
      <div className="content-container">
        <Card className="fadeIn" /> {/* Apply the fadeIn animation */}
        <Qwe className="fadeIn" /> {/* Apply the fadeIn animation */}
      </div>
    </div>
  );
};

export default Home;
