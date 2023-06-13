

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require("./backend/routes/users.js");
const authRoutes = require('./backend/routes/auth.js');
const connection = require('./backend/config/ConncetDB.js');
 

async function startServer() {

 await connection(); 
  
  app.use(express.json());
  app.use(cors());


  app.use('/api/users', userRoutes);
  app.use('/api/auth', authRoutes);
  const port = process.env.PORT;


  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

startServer();



