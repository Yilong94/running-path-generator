import express from "express";
import path from "path";

const CLIENT_BUILD_RELATIVE_PATH = "../../client/build";

const app = express();

// Middleware for parsing body of incoming request and exposing it on req.body
app.use(express.json());

// Middleware for serving static files in directory specified
// If static file not found, it will pass control to the next middleware
app.use(express.static(path.join(__dirname, CLIENT_BUILD_RELATIVE_PATH)));

app.get("/hello-world", (req, res) => {
  res.send("Hello from the backend");
});

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, `${CLIENT_BUILD_RELATIVE_PATH}/index.html`)
  );
});

const port = process.env.PORT || 3001;

app.listen(port);
console.log(`App is listening on port ${port}`);
