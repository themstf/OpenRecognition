// this file will be used to run the whole darn thing when deployed

const express = require("express");
const app = express();

// send frontend app if request is at "/"
// how this works exactly will depend a bit on Louis

const api_server = require("./api-server");
app.use("/api", api_server);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
