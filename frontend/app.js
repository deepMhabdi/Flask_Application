// Import express framework
const express = require("express");

// Import axios for HTTP requests
const axios = require("axios");

// Import body-parser to read form data
const bodyParser = require("body-parser");

// Create express app
const app = express();

// Define frontend port
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to show HTML form
app.get("/", (req, res) => {
  res.send(`
    <h2>Send Data to Flask Backend</h2>
    <form method="POST" action="/submit">
        <input type="text" name="data" placeholder="Enter some data" required />
        <button type="submit">Submit</button>
    </form>
  `);
});

// Handle form submission
app.post("/submit", async (req, res) => {
  // Read data entered in form
  const formData = req.body.data;

  try {
    // Send POST request to Flask backend
    const response = await axios.post(
      "http://localhost:5001/submit",
      {
        data: formData, // JSON payload
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Display Flask response on browser
    res.send(`
      <h3>Response from Flask Backend</h3>
      <p><b>Data Received:</b> ${response.data.data_received.data}</p>
      <a href="/">Go Back</a>
    `);
  } catch (error) {
    // Error handling
    res.send("Error communicating with Flask backend");
  }
});

// Start frontend server
app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
