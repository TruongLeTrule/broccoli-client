import React from "react";
import IntroSection from "../components/introSection";
import StepOneSection from "../components/stepOneSection";
import StepTwoSection from "../components/stepTwoSection";
import StepThreeSection from "../components/stepThreeSection";

const Landing = () => {
  console.log("Landing component rendered");
  return (
    <>
      <IntroSection />
      <StepOneSection />
      <StepTwoSection />
      <StepThreeSection />
    </>
  );
};

export default Landing;
