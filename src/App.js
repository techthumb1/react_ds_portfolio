// src/App.js

import React from "react";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Navbar from "./src/components/Navbar";
import Projects from "./src/components/Projects";
import Skills from "./src/components/Skills";
import Testimonials from "./src/components/Testimonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About />
      <Contact />
      <Navbar />
      <Projects />
      <Skills />
      <Testimonials />
    </main>
  );
}