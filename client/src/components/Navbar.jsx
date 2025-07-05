import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link as ScrollLink } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Resume', to: 'resume' },
  { label: 'Contact', to: 'contact' },
];

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? 'primary' : 'transparent',
    style: { background: trigger ? '#fff' : 'transparent', transition: '0.3s' },
  });
}

export default function Navbar({ toggleTheme, darkMode }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <ElevationScroll>
      <AppBar position="relative" sx={{ boxShadow: 0, bgcolor: 'background.paper' }}>
        <Toolbar>
  <Typography variant="h2" sx={{ flexGrow: 1, fontWeight: 700 }}>
    <span style={{ fontFamily: 'Ultra, serif', fontSize: '100px' }}>K</span>
    ashyap Trivedi
  </Typography>

          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navLinks.map(link => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                style={{ textDecoration: 'none' }}
              >
                <Button color="inherit">{link.label}</Button>
              </ScrollLink>
            ))}
            <IconButton onClick={toggleTheme} color="inherit">
              <Brightness4Icon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List>
                {navLinks.map(link => (
                  <ListItem button key={link.to} onClick={() => setDrawerOpen(false)}>
                    <ScrollLink
                      to={link.to}
                      smooth
                      duration={500}
                      offset={-70}
                      style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}
                    >
                      <ListItemText primary={link.label} />
                    </ScrollLink>
                  </ListItem>
                ))}
                <ListItem>
                  <IconButton onClick={toggleTheme} color="inherit">
                    <Brightness4Icon />
                  </IconButton>
                </ListItem>
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}