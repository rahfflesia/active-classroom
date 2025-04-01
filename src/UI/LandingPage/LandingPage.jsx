import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./landingPage.css";
import Navbar from "./Navbar";
import Video from "./Video";
import Info from "./Info";
import Steps from "./Steps";
import Banner from "./Banner";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Video />
      <Info />
      <Steps />
      <Banner />
      <Footer />
    </>
  );
}

export default LandingPage;
