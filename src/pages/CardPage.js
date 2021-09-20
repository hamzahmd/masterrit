import React from "react";
import Navbar from "../components/Wrapper/Navbar";
import PaySection from "../components/Card/PaySection";
import SecureSection from "../components/Card/SecureSection";
import PayCardSection from "../components/Card/PayCardSection";

const CardPage = () => {
  return (
    <>
      <Navbar />
      <PaySection />
      <SecureSection />
      <PayCardSection />
    </>
  );
};

export default CardPage;
