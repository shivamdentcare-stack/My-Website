import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import Treatments from "./pages/Treatments";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/treatments" element={<Treatments />} />
          </Routes>
        </Layout>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
