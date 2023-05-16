import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

// initialize the server
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
