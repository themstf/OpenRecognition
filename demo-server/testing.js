const express = require("express");
const testing_app = express();

testing_app.get('/api', (req, res) => {
  res.json({ message: 'API ready' });
});

const api_server = require("./server");
testing_app.use("/api", api_server);

const port = process.env.PORT || 4000;
testing_app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
