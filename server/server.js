const express = require('express');
const User = require('./models/userSchema')
const app = express();
const mongoose = require('mongoose');
const { signupUser } = require('./models/userModel'); 
const cors = require('cors'); 
const uri = "mongodb+srv://falcogaming2022:SRjTigHFDpCHEiB1@lulucluster.tkzmr.mongodb.net/"

app.use(express.json()); // Middleware to parse JSON data
app.use(cors());

// connect mongoDB
mongoose.connect(uri)
.then(()=> {
    console.log('mongoDB connected!')
})
.catch((error)=> {
    console.log(error);
})

// Define the signup route
app.post('/signup', signupUser);
app.post('/login', async (req, res) => {
    try {
      const { email, Password } = req.body;
      const a = await User.findOne({email});
      console.log(a);

      res.status(200).json({ message: 'Received email and password' }); // Optional response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error processing request' });
    }
  });

// create express server
const PORT = 5000;

app.listen(PORT, ()=> {
    console.log(`server is created at port: ${PORT}`);
});
