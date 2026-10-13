import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";
import Process from "./components/Process/Process";
import Tools from "./components/Tools/Tools";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Work />
        <Process />
        <Tools />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
