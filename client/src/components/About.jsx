import React, { useEffect, useRef } from 'react';
import { Box, Typography, Avatar, Chip, Stack, LinearProgress } from '@mui/material';
import gsap from 'gsap';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'GSAP', level: 70 },
];

export default function About() {
  const aboutRef = useRef();

  useEffect(() => {
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <Box
      id="about"
      ref={aboutRef}
      sx={{
        py: 8,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 6,
        px: 2,
      }}
    >
      <Avatar
        src="/assets/profile.jpg"
        alt="Kashyap Trivedi"
        sx={{ width: 140, height: 140, mb: { xs: 2, md: 0 } }}
      />
      <Box>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          I’m a passionate Full Stack Developer with experience in building scalable web applications using React, Node.js, and modern JavaScript frameworks. I love solving problems and learning new technologies.
        </Typography>
        <Typography variant="subtitle1" fontWeight={500} mb={1}>
          Skills
        </Typography>
        <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
          {skills.map(skill => (
            <Chip key={skill.name} label={skill.name} color="primary" variant="outlined" />
          ))}
        </Stack>
        <Box>
          {skills.map(skill => (
            <Box key={skill.name} mb={1}>
              <Typography variant="caption">{skill.name}</Typography>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{ height: 8, borderRadius: 5, mb: 0.5 }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}