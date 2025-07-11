import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Stack, Grid, Paper } from '@mui/material';
import gsap from 'gsap';

// Typewriter effect for the headline
const roles = [
  'Data Structures Enthusiast',
  'Full Stack Developer',
  'AI/ML Explorer',
];

function useTypewriter(words, speed = 120, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && forward) {
      setTimeout(() => setForward(false), pause);
      return;
    }
    if (subIndex === 0 && !forward) {
      setForward(true);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? speed : 40);
    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, words, speed, pause]);

  return words[index].substring(0, subIndex);
}

function PhotoCard() {
  return (
    <Paper
      elevation={6}
      sx={{
        position: 'relative',
        width: { xs: 260, md: 340 },
        height: { xs: 320, md: 400 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 4,
        bgcolor: 'background.paper',
        p: 2,
        mt: { xs: 4, md: 0 }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 12,
          top: 18,
          color: '#4b4be7',
          fontSize: 36,
          fontWeight: 700
        }}
      >
        <svg width="28" height="60" viewBox="0 0 28 60" fill="none"><path d="M2 2L26 30L2 58" stroke="#4b4be7" strokeWidth="4" strokeLinecap="round"/></svg>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: 18,
          top: 18,
          color: '#4b4be7'
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" stroke="#4b4be7" strokeWidth="3"/></svg>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: 10,
          bottom: 10,
          color: '#e84949'
        }}
      >
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
          <circle cx="10" cy="10" r="5" fill="#e84949"/>
          <circle cx="30" cy="10" r="5" fill="#e84949"/>
          <circle cx="50" cy="10" r="5" fill="#e84949"/>
        </svg>
      </Box>
      <Box
        component="img"
        src="/images/Kashyap.jpg"
        alt="Kashyap Trivedi"
        sx={{
          width: { xs: 180, md: 240 },
          height: { xs: 220, md: 300 },
          objectFit: 'cover',
          borderRadius: 2,
          zIndex: 2
        }}
      />
    </Paper>
  );
}

export default function HeroSection() {
  const heroRef = useRef();
  const typewriter = useTypewriter(roles);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <Box
      id="hero"
      ref={heroRef}
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        px: { xs: 2, md: 8 },
        pt: { xs: 6, md: 0 },
        pb: { xs: 4, md: 0 }
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Mobile: Photo above text */}
        <Grid item xs={12} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
          <PhotoCard />
        </Grid>
        {/* Left: Text */}
        <Grid item xs={12} md={7}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h4"
              sx={{
                color: '#3b3b6d',
                fontWeight: 700,
                mb: 0.5,
                fontFamily: "'Oswald', sans-serif"
              }}
            >
              Hi! I am Kashyap Trivedi
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#4b4be7',
                display: 'inline-block',
                fontFamily: "'Oswald', sans-serif",
                mb: 2,
                minHeight: '3.5rem'
              }}
            >
              I am a <span style={{ color: '#4b4be7' }}>{typewriter}|</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                fontWeight: 500,
                mt: 4,
                mb: 3,
                fontFamily: "'Oswald', sans-serif"
              }}
            >
              I&apos;m Kashyap Trivedi, a passionate and versatile software developer pursuing a B.Tech in Information and Communication Technology at DAU, Gujarat.<br />
              I enjoy building full-stack applications and AI-powered tools that are scalable, user-focused, and data-driven. My strength lies in merging strong fundamentals in data structures and algorithms with hands-on development across a wide range of technologies.
            </Typography>
            <Stack direction="row" spacing={2} mt={3} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <Button
                variant="contained"
                href="#contact"
                size="large"
                sx={{
                  px: 3,
                  py: 1,
                  fontWeight: 700,
                  fontSize: '18px',
                  fontFamily: "'Oswald', sans-serif",
                  color: '#fff',
                  backgroundColor: '#e84949',
                  boxShadow: '5px 5px 7px 0px #0000003f',
                  position: 'relative',
                  zIndex: 1,
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#1f1f1f',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 1s',
                    zIndex: -1
                  },
                  '&:hover::before': {
                    transform: 'scaleX(1)'
                  },
                  '&:hover': {
                    color: '#fff'
                  }
                }}
              >
                Hire Me
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="https://drive.google.com/file/d/1IoR_Dp21abnHGCub-wCaqmxWh5ho8Wns/view?usp=sharing"
                target="_blank"
                rel="noopener"
                size="large"
                sx={{
                  fontWeight: 700,
                  px: 4,
                  fontFamily: "'Oswald', sans-serif"
                }}
              >
                Download Resume
              </Button>
            </Stack>
          </Box>
        </Grid>
        {/* Desktop: Photo on right */}
        <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <PhotoCard />
        </Grid>
      </Grid>
    </Box>
  );
}