import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import fileUpload from "express-fileupload";
import { createRouteHandler } from "uploadthing/express";
import { uploadRouter } from "./uploadthing";

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use("/api/uploadthing", (req, res, next) => {
  console.log("Files:", req.files);
  console.log("Request Headers:", req.headers);
  console.log("Request Query:", req.query);
  next();
}, createRouteHandler({
  router: uploadRouter,
  config: {
    token: process.env.UPLOADTHING_TOKEN,
  },
}));

app.use("/", (_, res) => {
  res.status(200).json({
    message: "Uploadthing server is running",

  })
})

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
})
