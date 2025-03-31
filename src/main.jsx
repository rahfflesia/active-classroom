import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./UI/LandingPage/Navbar";
import Video from "./UI/LandingPage/Video";
import Info from "./UI/LandingPage/Info";
import Steps from "./UI/LandingPage/Steps";
import Banner from "./UI/LandingPage/Banner";
import Footer from "./UI/LandingPage/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Video />
    <Info />
    <Steps />
    <Banner />
    <Footer />
  </StrictMode>
);
