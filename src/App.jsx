import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
// import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from "framer-motion";
// import notfound from "./Pages/404";
import ContactUs from "./Pages/ContactUs";
import NotFoundPage from "./Pages/404";
import Education from "./Pages/Education";
import {
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { SiCouchbase } from "react-icons/si";

const socialLinks = [
  {
    icon: <FaFacebook size={20} />,
    url: "https://www.facebook.com/amuhammadthoriq?locale=id_ID",
  },
  {
    icon: <FaLinkedinIn size={20} />,
    url: "https://www.linkedin.com/in/muhammad-thoriq-ar-rasyid-6354642b6/",
  },
  { icon: <FaGithub size={20} />, url: "https://github.com/thoriqarr21/" },
  {
    icon: <FaInstagram size={20} />,
    url: "https://www.instagram.com/fathi_rhs/",
  },
];
const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Education />
          <Portofolio />
          <ContactUs />
          <footer className="p-4 sm:p-6 rounded-t-xl mt-8">
            <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex space-x-4 sm:space-x-6 text-gray-300">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    aria-label={`Link sosial ${index + 1}`}
                    className="transition-all duration-300 ease-in-out transform hover:scale-110hover:-translate-y-0.5"
                  >
                    <div
                      className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ease-in-out hover:bg-violet-900/40 hover:shadow-lg                      
                                hover:shadow-violet-400/50 hover:border-violet-400/50 hover:text-violet-400"
                    >
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex items-center space-x-2 text-gray-300">
                <div className="bg-white p-1 rounded-md shadow-lg">
                  <SiCouchbase size={24} className="text-[#4D3196]" />
                </div>
                <span className="text-lg font-semibold text-white">
                  ThoriqCodes
                </span>
              </div>

              <span className="text-sm text-gray-300 text-center sm:text-right">
                © 2025 Thoriq Portofolio. All rights reserved.
              </span>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer className="p-4 sm:p-6 rounded-t-xl mt-8">
      <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex space-x-4 sm:space-x-6 text-gray-300">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              aria-label={`Link sosial ${index + 1}`}
              className="transition-all duration-300 ease-in-out transform hover:scale-110hover:-translate-y-0.5"
            >
              <div
                className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ease-in-out hover:bg-violet-900/40 hover:shadow-lg                      
                                hover:shadow-violet-400/50 hover:border-violet-400/50 hover:text-violet-400"
              >
                {link.icon}
              </div>
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-2 text-gray-300">
          <div className="bg-white p-1 rounded-md shadow-lg">
            <SiCouchbase size={24} className="text-[#4D3196]" />
          </div>
          <span className="text-lg font-semibold text-white">Untitled UI</span>
        </div>

        <span className="text-sm text-gray-300 text-center sm:text-right">
          © 2025 Thoriq Portofolio. All rights reserved.
        </span>
      </div>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
