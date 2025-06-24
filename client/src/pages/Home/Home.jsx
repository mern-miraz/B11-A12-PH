import React from "react";
import Slider from "../../components/Slider";
import LatestCourses from "../../components/LatestCourses";
import PopularCourses from "../../components/PopularCourses";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <main className="bg-base-100">
      <Slider />
      <LatestCourses />
      <PopularCourses />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
};

export default Home;
