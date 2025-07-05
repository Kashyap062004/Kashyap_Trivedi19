import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; // <-- Add this line
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const muiTheme = useMemo(() => theme(darkMode), [darkMode]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Navbar toggleTheme={() => setDarkMode(dm => !dm)} darkMode={darkMode} />
      <HeroSection />
      <Skills />
      <Projects />
      {/* <Resume /> */}
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
}

export default App;