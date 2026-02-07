import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./routes/routes.js";

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(router);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server rodando na porta ${PORT}`);
});
