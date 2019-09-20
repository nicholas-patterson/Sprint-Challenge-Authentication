const request = require("supertest");
const server = require("../api/server");

describe("jokes-router.js", () => {
  describe("GET /", () => {
    it("should return 401 because user is not logged in", async () => {
      const middleware = await request(server).get("/api/jokes");

      expect(middleware.status).toBe(401);
    });

    it("returns JSON", async () => {
      const res = await request(server).get("/api/jokes");

      expect(res.type).toMatch(/json/i);
    });
  });
});
