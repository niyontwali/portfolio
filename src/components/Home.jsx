import React from "react";
import Profile from "./Profile";

/* =============================================
Landing Page Function Component
This is the home page component to be rendered
as the landing page view
============================================== */

const Home = () => {
  return (
    <div className="lg:pt-16 pt-4 lg:mb-28 mb-4">
      <Profile />
    </div>
  );
};

export default Home;
