import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cityRoutes from "./routes/cities";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/city", cityRoutes);

export default app;
