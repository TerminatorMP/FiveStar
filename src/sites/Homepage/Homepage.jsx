import React from "react";
import Navigation from "../../layout/Navigation/Navigation";
import Hero from "../../layout/Hero/Hero";
import Welcome from "./Welcome";
import Unique from "./Unique";
import Benefits from "./Benefits";


export default function Homepage() {
  return(
      <>
        <Navigation />
        <Hero />
        <Welcome />
        <Unique />
        <Benefits />
      </>
  );
}