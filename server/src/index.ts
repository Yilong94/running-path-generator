import express from "express";

const app = express();

app.get("/hello-world", (req, res) => {
  res.send("Hello from the backend");
});

const port = process.env.PORT || 3001;
app.listen(port);
console.log(`App is listening on port ${port}`);
