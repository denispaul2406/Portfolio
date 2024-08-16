import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { motion } from 'framer-motion';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0D47A1',
    },
    secondary: {
      main: '#FF5722',
    },
    background: {
      default: '#F5F5F5',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const transition = { duration: 0.5, ease: 'easeInOut' };

function App() {
  // State for Menu handling
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Denis Paul
          </Typography>
          <Button
            color="inherit"
            onClick={(event) => handleMenuClick(event, 'home')}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={(event) => handleMenuClick(event, 'about')}
          >
            About
          </Button>
          <Button
            color="inherit"
            onClick={(event) => handleMenuClick(event, 'projects')}
          >
            Projects
          </Button>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={(event) => handleMenuClick(event, 'contact')}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      {/* Main Menu Items */}
      <Menu
        id="menu-home"
        anchorEl={anchorEl}
        open={activeMenu === 'home'}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}><Link href="#introduction" color="inherit" underline="none">Introduction</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}><Link href="#education" color="inherit" underline="none">Education</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}><Link href="#experience" color="inherit" underline="none">Experience</Link></MenuItem>
      </Menu>

      <Menu
        id="menu-about"
        anchorEl={anchorEl}
        open={activeMenu === 'about'}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}><Link href="#skills" color="inherit" underline="none">Skills</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}><Link href="#education" color="inherit" underline="none">Education</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}><Link href="#experience" color="inherit" underline="none">Experience</Link></MenuItem>
      </Menu>

      <Menu
        id="menu-projects"
        anchorEl={anchorEl}
        open={activeMenu === 'projects'}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}><Link href="#projects" color="inherit" underline="none">Android App Development</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}><Link href="#projects" color="inherit" underline="none">Attendance Management System</Link></MenuItem>
      </Menu>

      <Menu
        id="menu-contact"
        anchorEl={anchorEl}
        open={activeMenu === 'contact'}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}><Link href="mailto:denispaul2601@gmail.com" color="inherit" underline="none">Email</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}><Link href="tel:+918126599673" color="inherit" underline="none">Phone</Link></MenuItem>
        <MenuItem onClick={handleMenuClose}><Link href="#contact" color="inherit" underline="none">Address</Link></MenuItem>
      </Menu>

      <Container>
        <Box my={4}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition}>
            <Typography variant="h2" component="h1" gutterBottom>
              Denis Paul
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Computer Science (Hons) Student at RV University
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: <Link href="mailto:denispaul2601@gmail.com">denispaul2601@gmail.com</Link> | Phone: +91 8126599673
            </Typography>
          </motion.div>
        </Box>

        <Box id="introduction" my={4}>
          <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={transition}>
            <Typography variant="h4" component="h2" gutterBottom>
              Introduction
            </Typography>
            <Typography variant="body1" gutterBottom>
              Hello! I am Denis Paul, a Computer Science student at RV University. 
              I am passionate about web and mobile application development, and have a strong interest in machine learning.
            </Typography>
          </motion.div>
        </Box>

        <Box id="education" my={4}>
          <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={transition}>
            <Typography variant="h4" component="h2" gutterBottom>
              Education
            </Typography>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">RV University, Bengaluru, India</Typography>
              <Typography variant="body1">B.Sc (Hons) Computer Science, Expected Graduation: July 2026</Typography>
              <Typography variant="body2">1st Year CGPA: 9.22</Typography>
              <Typography variant="body2">2nd Year CGPA: 9.56</Typography>
            </Paper>
          </motion.div>
        </Box>

        <Box id="experience" my={4}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition}>
            <Typography variant="h4" component="h2" gutterBottom>
              Experience
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6">UC Berkeley (Remote) — Intern [Autograding Automation]</Typography>
                  <Typography variant="body2">July 2023 - September 2023</Typography>
                  <Typography variant="body1">Developed a custom automation script to optimize the autograding process for Collab Notebook.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6">ERPNEXT, Bengaluru — Intern [College ERP]</Typography>
                  <Typography variant="body2">January 2024 - April 2024</Typography>
                  <Typography variant="body1">Developed and managed a college ERP system, handling both frontend and backend development.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6">Geographical Indication Products Marketplace, Bengaluru — Developer</Typography>
                  <Typography variant="body2">June 2024 - July 2024</Typography>
                  <Typography variant="body1">Designed and implemented both frontend and backend components for the marketplace application.</Typography>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Box>

        <Box id="projects" my={4}>
          <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={transition}>
            <Typography variant="h4" component="h2" gutterBottom>
              Projects
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6">Android App Development</Typography>
                  <Typography variant="body2">Technologies: Ionic React, Python Flask, Render, SQLite</Typography>
                  <Typography variant="body1">Created an app providing quotes and maintaining an emotions journal.</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6">Attendance Management System</Typography>
                  <Typography variant="body2">Technologies: React, Node.js, Google Console</Typography>
                  <Typography variant="body1">Built and hosted a web-based prototype for managing attendance.</Typography>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Box>

        <Box id="skills" my={4}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition}>
            <Typography variant="h4" component="h2" gutterBottom>
              Skills
            </Typography>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="body1">Languages: Java, Python, C, JavaScript, TypeScript, Kotlin, SQL, HTML, CSS</Typography>
              <Typography variant="body1">Technologies: Firebase, MongoDB, Netlify, Render, React, Node.js, Ionic, SQLite, MySQL, MariaDB, Flask, Django, ERPNext, Frappe</Typography>
              <Typography variant="body1">Mobile Development: Kotlin, Java, React Native, Figma, Adobe XD, API Integration, Performance Optimization, SQLite</Typography>
              <Typography variant="body1">Machine Learning: TensorFlow, Keras, PyTorch, scikit-learn, pandas, NumPy, Model Building, Hyperparameter Tuning, Model Evaluation</Typography>
            </Paper>
          </motion.div>
        </Box>

        <Box id="contact" my={4}>
          <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={transition}>
            <Typography variant="h4" component="h2" gutterBottom>
              Contact
            </Typography>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="body1">Email: <Link href="mailto:denispaul2601@gmail.com">denispaul2601@gmail.com</Link></Typography>
              <Typography variant="body1">Phone: +91 8126599673</Typography>
              <Typography variant="body1">Address: 56, Jageshwar Dham, Bareilly, Uttar Pradesh -243122</Typography>
            </Paper>
          </motion.div>
        </Box>

        <footer>
          <Typography variant="body2" color="textSecondary" align="center">
            &copy; 2024 Denis Paul. All rights reserved.
          </Typography>
        </footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
