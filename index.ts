import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ ok: true });
});

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("OK");
});

const port = process.env.PORT ? Number(process.env.PORT) : 8080;

if (process.env.VERCEL !== "1") {
  app.listen(port, () => {
    console.log(`botserver listening on http://localhost:${port}`);
  });
}

export default app;
