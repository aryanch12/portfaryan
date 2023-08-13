const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');

const app = express();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3006', // Replace with your frontend domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolioaryan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Contact schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  message: String,
});
const Contact = mongoose.model('Contact', contactSchema);

// Define API routes
// app.get('/api/submit-contact',(req,res)=>{
//   res.send('hello');
// })
app.post('/api/submit-contact', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    const newContact = new Contact({ name, phone, email, message });
    await newContact.save();
    res.json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
