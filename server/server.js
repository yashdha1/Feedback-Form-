import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { connectDB } from "./lib/db.js";
import cors from "cors";

import submissionForm from "./routes/submissionForm.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// middleware
app.use(express.json({ limit: "10mb" })); // allows express formatting: JSON data.
app.use(cookieParser()); // allows express formatting: Cookies.

app.use(cors({
  origin: "https://yashdhadodff.netlify.app",
  credentials: true,
}));

// Routes
app.use("/api/v1/sf", submissionForm ); 

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

// endpoints...
app.listen(PORT, () => {
  console.log("Server has started successfully!!! at http://localhost:" + PORT);
  connectDB();
});