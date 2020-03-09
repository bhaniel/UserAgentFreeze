import express = require('express');
import * as homeController from "./controllers/home";
// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

app.use((req, res, next) => {
    next();
});

app.get("/", homeController.index);

export default app;