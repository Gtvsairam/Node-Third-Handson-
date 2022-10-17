const express = require("express");

const port = 9000;
const app = express();

const middleware1 = (req, res, next) => {
  console.log("middleware1");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("middleware2");
  next();
};
app.use(middleware1);
app.get("/", (req, res) => {
  res.send("Hello People!!");
});

app.get("/Home", (req, res) => {
  res.send("<h1>Welcome to Home Page<h1>");
});

app.get("/Details", middleware2, (req, res) => {
  res.send("<h1> This is middleware</h1> <p>Middleware is software that provides common services and capabilities to applications outside of what’s offered by the operating system. Data management, application services, messaging, authentication, and API management are all commonly handled by middleware.Middleware helps developers build applications more efficiently. It acts like the connective tissue between applications, data, and users.</p> ");
});

app.get("/Contact", middleware2, (req, res) => {
  res.send("<h1>Contact Us</h1>");
});

app.listen(port);