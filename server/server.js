const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in Starting Server!");
  } else {
    console.log("Server Started on PORT : ", PORT);
  }
});
