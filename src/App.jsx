import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import Image from "./components/Image";

export default function App() {
  return (
    <div className="card">
      <Image />
      <div className="card__container">
        <Info />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}
