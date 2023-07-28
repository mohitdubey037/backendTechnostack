import express from "express";
import morgan from "morgan";
import cors from "cors";

import router from "./router/router.js";

import mongodb from "mongodb";

/** import connection file */
import connect from "./database/conn.js";

const app = express();

/** app middlewares */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

/** routes */
app.use("/api", router); /** apis */

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

/** start server only when we have valid connection */
//connect to mongodb
const port = 8000;

connect()
  .then(() => {
    try {
      // Start the server
      app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      });
    }
    catch(err) {
      console.error("Cannot connect to the server");
    }
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB");
  });
