import React, { useEffect, useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import gsap from 'gsap';

const skills = [
  { name: 'C++', icon: '/images/c.svg' },
  { name: 'Python', icon: '/images/python-5.svg' },
  { name: 'HTML5', icon: '/images/HTML.png' },
  { name: 'CSS3', icon: '/images/CSS.png' },
  { name: 'JavaScript', icon: '/images/Javascript.svg' },
  { name: 'React', icon: '/images/React.png' },
  { name: 'Node.js', icon: '/images/NodeJs.svg' },
  // { name: 'Tailwind', icon: '/images/Tailwind.png' },
  { name: 'Express', icon: '/images/Express.png' },
  { name: 'Git', icon: '/images/Git.svg' },
  { name: 'GitHub', icon: '/images/Github.svg' },
  { name: 'MongoDB', icon: '/images/MongoDB.svg' },
  { name: 'Postgre SQL', icon:'/images/postgresql-icon.svg'}
];

export default function Skills() {
  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    gsap.from(leftRef.current, { x: -60, opacity: 0, duration: 1, ease: 'power3.out' });
    gsap.from(rightRef.current, { x: 60, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
  }, []);

  return (
    <Box
      id="skills"
      sx={{
        width: '100%',
        py: { xs: 4, md: 8 },
        px: { xs: 1, sm: 2, md: 8 },
        bgcolor: 'background.default',
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
        justifyContent="center"
      >
        {/* Left: Title & Description */}
        <Grid item xs={12} md={6}>
          <Box ref={leftRef} sx={{ minWidth: 200 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Poppins', cursive",
                fontWeight: 700,
                color: '#e84949',
                mb: 1,
                fontSize: { xs: '2rem', md: '2.8rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Me and<br />My Tech stack
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: { xs: '1rem', md: '1.3rem' },
                mt: 2,
                color: 'text.primary',
                maxWidth: 600,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              I specialize in building full-stack web applications and data-driven solutions using a wide range of technologies. My programming foundation is strong in C, C++, and Python, with a focus on data structures and algorithms. On the frontend, I work with HTML, CSS, JavaScript, and React, using Tailwind CSS and Bootstrap to create responsive, accessible UIs. For backend development, I use Node.js and Express.js, along with MongoDB and PostgreSQL for database management. I also have experience with scientific and machine learning tools like NumPy, Pandas, Matplotlib, and models such as ARIMA, LSTM, and GRU. I’m comfortable working in Linux environments and frequently use Git, VS Code, and Postman as part of my development workflow.
           
           
            </Typography>
          </Box>
        </Grid>

        {/* Right: Skill Icons */}
        <Grid item xs={12} md={6}>
          <Box
            ref={rightRef}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
              {skills.map(skill => (
                <Grid
                  item
                  xs={4}
                  sm={3}
                  md={3}
                  lg={2}
                  key={skill.name}
                  sx={{ textAlign: 'center' }}
                >
                  <div style={{display:"inline-list-item"}}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      marginBottom: 8,
                      transition: 'transform 0.3s',
                      filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))',
                    }}
                    
                    onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.5)')}
                    onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    {skill.name}
                  </Typography>
                  </div>
                  
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}