const request = require("supertest");
const server = require("../api/server");

describe("auth-router.js", () => {
  describe("/register", () => {
    // it("should return 201 status for creating user", async () => {
    //   const res = await request(server)
    //     .post("/api/auth/register")
    //     .send({ username: "testing123", password: "password" });
    //   expect(res.status).toBe(201);
    // });
    // it("should return status 500 if username already exist", async () => {
    //   const res = await request(server)
    //     .post("/api/auth/register")
    //     .send({ username: "testing123", password: "password" });
    //   expect(res.status).toBe(500);
    // });
  });

  describe("/login", () => {
    // it("should return status 200 if logged in successfully", async () => {
    //   const res = await request(server)
    //     .post("/api/auth/login")
    //     .send({ username: "testing123", password: "password" });
    //   expect(res.status).toBe(200);
    // });
    // it("should return status 400 if credentials are invalid", async () => {
    //   const res = await request(server)
    //     .post("/api/auth/login")
    //     .send({ username: "testing123", password: "passwordsadd" });
    //   expect(res.status).toBe(400);
    // });
  });
});
