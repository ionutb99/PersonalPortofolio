import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Intro } from "./components/intro/Intro";
import { Navbar } from "./components/navbar/Navbar";
import { Portofolio } from "./components/portofolio/Portofolio";
import { Skills } from "./components/skills/Skills";
import "./App.css";
import { WorkingOn } from "./components/workingOn/WorkingOn";
import { ArrowUpward } from "@material-ui/icons";
import ScrollTimeline from "./helpers/scrollTimeline/ScrollTimeline";
import useScroll from "./helpers/useScroll/useScroll";
import { Certifications } from "./components/certifications/Certifications";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { showScrollButton, scrollToTop } = useScroll();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/certifications" element={<Certifications />} />
          <Route
            path="/PersonalPortofolio"
            element={
              <>
                <ScrollTimeline />
                <Navbar />
                <Intro />
                <Skills />
                <Portofolio />
                <WorkingOn />
                <Contact />
                {showScrollButton && (
                  <div className="scroll-to-top" onClick={scrollToTop}>
                    <ArrowUpward />
                  </div>
                )}
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
