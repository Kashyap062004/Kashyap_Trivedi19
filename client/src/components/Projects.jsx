import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Stack, useTheme,Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import gsap from 'gsap';
const getImage = (img) => `/images/${img}`;
// ...projects array and getImage function...
const projects = [
  {
    number: '01',
    title: 'Newsly - Personalized AI News Aggregator',
    description: 'Built a full-stack MERN app for personalized news with Email/OTP login, Google OAuth, and AI-based summarization, translation, chatbot, and daily digests.',
    techIcons: [
      'React.png', 'NodeJs.svg', 'Express.png', 'MongoDB.svg', 'Tailwind.png', 'mistral-color.svg', 'razorpayicon.svg'
    ],
    image: 'newsly.png',
    github: 'https://github.com/Kashyap062004/Newsly',
    live: '',
    align: 'right'
  },
  {
    number: '02',
    title: 'Time Series Forecasting of AQI',
    description: 'Used ARIMA, SARIMA, and deep learning models (RNN, LSTM, GRU) to forecast air quality in Gandhinagar. Achieved R²=0.82 with GRU after EMD preprocessing.',
    techIcons: [
      'python.png', 'Matplotlib.svg', 'Pandas.svg',  'tensorflow-svgrepo-com.svg'
    ],
    image: 'aqi-project.png',
    github: 'https://github.com/Kashyap062004/Time-Series-Forecasting-of-Air-Quality-Index.git',
    live: '',
    align: 'left'
  },
  {
    number: '03',
    title: 'Staff Grid - Employee Management Tool',
    description: 'Full-stack dashboard for managing employee attendance, salary, leave, and profiles. Features include login system, audit logging, and secure data access.',
    techIcons: [
      'React.png', 'NodeJs.svg', 'Express.png', 'MongoDB.svg', 'Tailwind.png', 'MaterialUI.svg'
    ],
    image: 'staffgrid.png',
    github: 'https://github.com/KashyapTrivedi19/G17_StaffGrid',
    live: 'https://staff-grid.vercel.app',
    align: 'right'
  },
  {
    number: '04',
    title: 'Indian Premier League Database',
    description: 'A database project to analyze IPL team/player performance and support ticket booking using PostgreSQL with ER diagrams and DDL scripts.',
    techIcons: [
      'postgresql-icon.svg',
    ],
    image: 'ipl-db.png',
    github: 'https://github.com/Kashyap062004/Indian-Premier-League-Database',
    live: '',
    align: 'left'
  }
];
export default function Projects() {
  const cardsRef = useRef([]);
  const theme = useTheme();

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <Box
      id="projects"
      sx={{
        bgcolor: theme.palette.background.default,
        py: { xs: 4, md: 8 }
      }}
    >
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: theme.palette.mode === 'dark' ? '#e84949' : '#e84949',
          fontFamily: "'Poppins', cursive",
          fontWeight: 700,
          mb: 6,
          fontSize: { xs: '2.5rem', md: '4rem' }
        }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          maxWidth: 1400,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 6, md: 12 },
          px: { xs: 1, md: 0 }
        }}
      >
        {projects.map((project, idx) => (
          <Box
            key={project.title}
            ref={el => (cardsRef.current[idx] = el)}
            sx={{
              position: 'relative',
              width: '100%',
              minHeight: { xs: 300, md: 400 },
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: 6,
              backgroundImage: `url(${getImage(project.image)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mx: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: project.align === 'right' ? 'flex-start' : 'flex-end',
              '&:after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                bgcolor: theme.palette.mode === 'dark'
                  ? 'rgba(10,10,10,0.7)'
                  : 'rgba(31,31,31,0.6)',
                zIndex: 1
              },
              '&:before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #22293a, #22293abe, #22293a7c)'
                  : 'linear-gradient(45deg, #343d68, #343d68be, #343d687c)',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'all 0.4s',
                zIndex: 2
              },
              '&:hover:before': {
                transform: 'scaleX(1)'
              },'&:hover .project-number': {
                display: 'block',
                transform: 'scale(1.5)'
              },
              mb: 2
            }}
          >
            {/* Project Number */}
            <Typography className="project-number"
              sx={{
                position: 'absolute',
                top: { xs: 10, md: 30 },
                [project.align === 'right' ? 'right' : 'left']: { xs: 10, md: 30 },
                fontSize: { xs: 60, md: 120 },
                fontWeight: 700,
                color: theme.palette.mode === 'dark' ? '#fff' : '#fff',
                opacity: { xs: 0.2, md: 0.15 },
                zIndex: 3,
                userSelect: 'none',
                pointerEvents: 'none',
                display:'none',
                
              }}
            >
              {project.number}
            </Typography>
            {/* Content */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 4,
                width: { xs: '100%', md: '60%' },
                ml: project.align === 'right' ? { xs: 0, md: 8 } : 0,
                mr: project.align === 'left' ? { xs: 0, md: 8 } : 0,
                p: { xs: 2, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: project.align === 'right' ? 'flex-start' : 'flex-end'
              }}
            >
              {/* Tech Icons */}
              <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
                {project.techIcons.map(icon => (
                  <Box
                    key={icon}
                    component="img"
                    src={getImage(icon)}
                    alt={icon.replace(/\..+$/, '')}
                    sx={{
                      width: 40,
                      height: 40,
                      background: theme.palette.background.paper,
                      borderRadius: 2,
                      p: 0.5,
                      mr: 0.75,
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.5)'
                      }
                    }}
                  />
                ))}
              </Stack>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: '#fff',
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 1,
                  textShadow: '2px 2px 8px #222'
                }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#fff',
                  fontStyle: 'italic',
                  fontSize: { xs: '1rem', md: '1.3rem' },
                  mb: 2,
                  maxWidth: 600,
                  textShadow: '1px 1px 6px #222'
                }}
              >
                {project.description}
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ fontWeight: 600, px: 3, borderRadius: 2 }}
                >
                  Read More
                </Button>
                {project.github && (
                  <Button
                    href={project.github}
                    target="_blank"
                    rel="noopener"
                    startIcon={<GitHubIcon />}
                    sx={{
                      bgcolor: '#fff',
                      color: '#222',
                      '&:hover': { bgcolor: '#e84949', color: '#fff' }
                    }}
                  >
                    GitHub
                  </Button>
                )}
                {project.live && (
                  <Button
                    href={project.live}
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchIcon />}
                    sx={{
                      bgcolor: '#fff',
                      color: '#222',
                      '&:hover': { bgcolor: '#e84949', color: '#fff' }
                    }}
                  >
                    Live
                  </Button>
                )}
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}