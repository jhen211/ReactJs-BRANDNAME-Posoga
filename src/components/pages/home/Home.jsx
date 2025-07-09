import React from "react";
import Header from "../../partials/Header";
import Hero from "./hero/Hero";
import Features from "./features/Features";
import Testimonials from "./testimonials/Testimonials";
import Pricing from "./pricing/Pricing";

import Footer from "../../partials/Footer";
import Cta from "../../partials/Cta";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
