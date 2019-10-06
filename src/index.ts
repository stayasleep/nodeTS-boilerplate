import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

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
} else {
    const serverless = require('serverless-http');
    const handler = serverless(app);
    module.exports.handler = async (event: any, context: any) => {
        // you can do other things here
        const result = await handler(event, context);
        // and here
        return result;
    };}
