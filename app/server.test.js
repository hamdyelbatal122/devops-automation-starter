const test = require("node:test");
const assert = require("node:assert/strict");

const app = require("./server");

test("GET / returns starter metadata", async () => {
  const server = app.listen(0);
  const { port } = server.address();

  const response = await fetch(`http://127.0.0.1:${port}/`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.service !== undefined, true);
  assert.equal(body.message.includes("DevOps Automation Starter"), true);

  server.close();
});

test("GET /healthz returns healthy status", async () => {
  const server = app.listen(0);
  const { port } = server.address();

  const response = await fetch(`http://127.0.0.1:${port}/healthz`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.status, "ok");
  assert.equal(typeof body.uptimeSeconds, "number");

  server.close();
});
