const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
const serviceName = process.env.SERVICE_NAME || "devops-automation-starter";
const startedAt = new Date().toISOString();

app.get("/", (req, res) => {
  res.json({
    message: "DevOps Automation Starter is running",
    service: serviceName,
    environment: process.env.NODE_ENV || "development"
  });
});

app.get("/healthz", (req, res) => {
  res.json({
    status: "ok",
    uptimeSeconds: Math.floor(process.uptime()),
    startedAt
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Service ${serviceName} listening on port ${port}`);
  });
}

module.exports = app;