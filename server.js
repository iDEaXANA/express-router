const syncSeed = require("./seed");
const app = require("./src/app");
const port = 3000;
// Express Routes

app.listen(port, () => {
  syncSeed();
  console.log(`App listening on port ${port}`);
});
