const dotenv = require("dotenv");
const app = require("./app.js");

// CONFIGURATION
dotenv.config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
