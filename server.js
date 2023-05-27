const app = require("./app");
const connectionMongo = require("./db/connection.js");
const { PORT } = process.env;

const startServer = async () => {
  try {
    await connectionMongo();
    app.listen(PORT, (error) => {
      if (error) console.log(error.message);
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
  }
};

startServer();
