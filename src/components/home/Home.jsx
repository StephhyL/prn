import React from "react";
// import from other components
import Header from "./Header";
import Category from "./Category";

// import styling
import "../../stylesheets/css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <Header />
      </div>
      <div className="catLayout">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Home;
