import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Home1 from "./components/Home1/Home1";
import Home10 from "./components/Home10/Home10";
import Home2 from "./components/Home2/Home2";
import Home3 from "./components/Home3/Home3";
import Home4 from "./components/Home4/Home4";
import Home5 from "./components/Home5/Home5";
import Home7 from "./components/Home7/Home7";
import Home8 from "./components/Home8/Home8";
import Home9 from "./components/Home9/Home9";

export default function App() {
  return (
    <div className="">
      <Home1/>
      <Home2/>
      <Home3/>
      <Home4/>
      <Home10/>
      <Home5/>
      <Home8/>
      <Home9/>
      <Home7/>
      <Contact/>
      <Faq/>
      <Footer/>
    </div>
  );
}
