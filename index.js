const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: "Welcome to the Government Exam Portal!",
    endpoints: ["/jobs", "/results", "/admit-cards"] 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});