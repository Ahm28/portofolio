'use client';
import NavbarComponent from "./Components/Navbar";
import Heroes from "./Components/Heroes";
import { ThemeProvider } from "@material-tailwind/react";
import AboutSection from "./Components/About";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="bg-[#010008]">
        <div className="absolute flex top-[-10%] items-center justify-center w-full blur-[200px] opacity-25">
            <div className="backdrop-blur-[20rem] z-0"></div>
            <div className="bg-[#5B8FB9] w-4/5 h-[394px] rounded-[50%] blur-3xl -z-10"></div>
        </div>
        
        <NavbarComponent />

        <Heroes />
        <AboutSection />
      </div>
    </ThemeProvider>
  );
}
