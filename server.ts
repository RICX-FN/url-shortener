import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./src/routes/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
