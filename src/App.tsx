import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { DivisionsGrid } from "./components/DivisionsGrid";
import { MissionScroll } from "./components/MissionScroll";
import { Leadership } from "./components/Leadership";
import { Journals } from "./components/Journals";
import { NewsCTA } from "./components/NewsCTA";
import { Footer } from "./components/Footer";
import DivisionDetail from "./pages/DivisionDetail";
import AboutUs from "./pages/AboutUs";

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <DivisionsGrid />
      <MissionScroll />
      <Leadership />
      <Journals />
      <NewsCTA />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/divisions/:id" element={<DivisionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
