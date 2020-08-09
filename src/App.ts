import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import locationRoutes from "./routes/location";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/location", locationRoutes);

export default app;
