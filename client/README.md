### Step 1: Set Up the Project Structure

1. **Create the Project Directory:**
   ```bash
   mkdir mern-portfolio
   cd mern-portfolio
   ```

2. **Initialize the Backend:**
   ```bash
   mkdir backend
   cd backend
   npm init -y
   npm install express mongoose cors dotenv
   ```

3. **Initialize the Frontend:**
   ```bash
   cd ..
   npx create-react-app frontend
   cd frontend
   npm install @mui/material @emotion/react @emotion/styled gsap axios
   ```

### Step 2: Set Up the Backend

1. **Create the Server:**
   In the `backend` directory, create a file named `server.js`:

   ```javascript
   const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   const dotenv = require('dotenv');

   dotenv.config();

   const app = express();
   const PORT = process.env.PORT || 5000;

   // Middleware
   app.use(cors());
   app.use(express.json());

   // MongoDB Connection
   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => console.log('MongoDB connected'))
       .catch(err => console.log(err));

   // Sample Route
   app.get('/api/portfolio', (req, res) => {
       res.json({ message: 'Welcome to my portfolio API' });
   });

   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
   ```

2. **Create a `.env` file:**
   In the `backend` directory, create a `.env` file and add your MongoDB connection string:

   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

3. **Run the Backend:**
   ```bash
   node server.js
   ```

### Step 3: Set Up the Frontend

1. **Create Components:**
   In the `frontend/src` directory, create a folder named `components` and add the following files:

   - `Header.js`
   - `Portfolio.js`
   - `Contact.js`
   - `Footer.js`

   **Example of `Header.js`:**
   ```javascript
   import React from 'react';
   import { AppBar, Toolbar, Typography, Button } from '@mui/material';
   import { gsap } from 'gsap';

   const Header = () => {
       React.useEffect(() => {
           gsap.from('.header', { duration: 1, y: -50, opacity: 0 });
       }, []);

       return (
           <AppBar position="static" className="header">
               <Toolbar>
                   <Typography variant="h6">My Portfolio</Typography>
                   <Button color="inherit">Home</Button>
                   <Button color="inherit">Portfolio</Button>
                   <Button color="inherit">Contact</Button>
               </Toolbar>
           </AppBar>
       );
   };

   export default Header;
   ```

2. **Create the Main App Component:**
   In `frontend/src/App.js`, import and use the components:

   ```javascript
   import React from 'react';
   import Header from './components/Header';
   import Portfolio from './components/Portfolio';
   import Contact from './components/Contact';
   import Footer from './components/Footer';

   const App = () => {
       return (
           <div>
               <Header />
               <Portfolio />
               <Contact />
               <Footer />
           </div>
       );
   };

   export default App;
   ```

3. **Implement the Portfolio Component:**
   In `Portfolio.js`, fetch data from the backend:

   ```javascript
   import React, { useEffect, useState } from 'react';
   import { Container, Typography } from '@mui/material';
   import axios from 'axios';

   const Portfolio = () => {
       const [projects, setProjects] = useState([]);

       useEffect(() => {
           const fetchProjects = async () => {
               const response = await axios.get('http://localhost:5000/api/portfolio');
               setProjects(response.data);
           };
           fetchProjects();
       }, []);

       return (
           <Container>
               <Typography variant="h4">My Projects</Typography>
               {/* Render projects here */}
           </Container>
       );
   };

   export default Portfolio;
   ```

4. **Implement the Contact Component:**
   In `Contact.js`, create a simple contact form.

5. **Implement the Footer Component:**
   In `Footer.js`, add your footer content.

### Step 4: Styling and Animations

1. **Add Material UI Styles:**
   Use Material UI components to style your portfolio. You can customize the theme as needed.

2. **Add GSAP Animations:**
   Use GSAP to animate components as they enter the viewport or on user interactions.

### Step 5: Deploy Your Application

1. **Deploy the Backend:**
   You can deploy your backend using services like Heroku, DigitalOcean, or Render.

2. **Deploy the Frontend:**
   Use services like Vercel, Netlify, or GitHub Pages to deploy your React app.

### Conclusion

This guide provides a basic structure for creating a MERN stack portfolio website. You can expand upon this by adding more features, such as user authentication, a more complex database schema, and additional pages or sections to showcase your work. Don't forget to customize the design and animations to reflect your personal style!