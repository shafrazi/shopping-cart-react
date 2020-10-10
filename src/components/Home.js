import React from "react";
import heroImage from "../images/hero.jpg";
import discountImage from "../images/discount.jpg";
// import { Container } from "@material-ui/core";

function Home() {
  return (
    <div>
      <img src={heroImage} alt="hero" className="hero-image" />
      <img src={discountImage} alt="discount" className="hero-image" />
    </div>
  );
}
export default Home;
