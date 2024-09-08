import express from "express";
import mongoose from "mongoose";
import status from "http-status";

import config from "./config";
import routes from "./routes";

const app = express();
const port = config.PORT || 5555;

async function main() {
  await mongoose
    .connect(config.MONGO_URI)
    .then(() => {
      app.use(express.urlencoded({ extended: true }));
      app.use(express.json({ limit: "25mb" }));

      app.use("/", routes);

      app.use((_req, res) => {
        res.status(status.NOT_FOUND).json("NOT FOUND! 🤷‍♂️");
      });

      app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
      });
    })
    .catch((err) => console.log(err));
}

main();
