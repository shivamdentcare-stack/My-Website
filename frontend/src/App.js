import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import CategoryPage from "./pages/CategoryPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route
              path="/cosmetic-dentistry"
              element={
                <CategoryPage
                  title="Cosmetic Dentistry"
                  subtitle="Smile makeovers, veneers, whitening and digital smile design — crafted to bring out your best smile."
                  category="cosmetic"
                />
              }
            />
            <Route
              path="/general-dentistry"
              element={
                <CategoryPage
                  title="General Dentistry"
                  subtitle="Routine procedures, root canals, dentures and braces to keep every smile healthy."
                  category="general"
                />
              }
            />
            <Route
              path="/surgical-dentistry"
              element={
                <CategoryPage
                  title="Surgical Dentistry"
                  subtitle="Implants, extractions and oral surgery performed with precision and care."
                  category="surgical"
                />
              }
            />
            <Route
              path="/emergency-care"
              element={
                <CategoryPage
                  title="Diagnostic & Emergency Care"
                  subtitle="Round-the-clock support for dental emergencies — pain relief, trauma management and more."
                  category="general"
                />
              }
            />
          </Routes>
        </Layout>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
