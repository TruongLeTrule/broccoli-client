import React from "react";
import Hero from "../components/Hero";
import StepOneSection from "../components/stepOneSection";
import StepTwoSection from "../components/stepTwoSection";
import StepThreeSection from "../components/stepThreeSection";

const Landing = () => {
  console.log("Landing component rendered");
  return (
    <>
      <Hero />
      <StepOneSection />
      <StepTwoSection />
      <StepThreeSection />
    </>
  );
};

export default Landing;
