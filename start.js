const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Define the port you want your server to listen on
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  // Send the HTML file as response
  res.sendFile(path.join(__dirname, 'demo', 'new.html'));
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});