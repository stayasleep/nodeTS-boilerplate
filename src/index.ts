import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import path from "path";

/**
 * Initialize configuration
 */
dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();

/**
 * Middleware
 */
app.use(bodyParser.json());

/**
 * Controllers
 */
app.get("/", (req, res) => {
    res.send("Goodbye, world");
});

/**
 * Server
 */
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`);
    });
}
