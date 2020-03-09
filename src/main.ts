import app from "./app";
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

let certificate = fs.readFileSync(path.join(__dirname, '/sslcert/server.cert'), 'utf8');
let privateKey  = fs.readFileSync(path.join(__dirname, '/sslcert/server.key'), 'utf8');

let httpServer = http.createServer(app);
let httpsServer = https.createServer({key: privateKey, cert: certificate}, app);

httpServer.listen(8080, () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        8080,
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

httpsServer.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

