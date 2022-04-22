const app = require("../app");
const mongoose = require("mongoose");
const supertest = require("supertest");

beforeAll((done) => {
  mongoose.connect("mongodb://localhost:27017/favTest", () => done());
});

afterAll((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

let token = "";

test("POST /api/user/", async () => {
  const data = {
    email: "moranrosales23@hotmail.com",
    password: "123456",
  };

  await supertest(app)
    .post("/api/user/")
    .send(data)
    .expect(201)
    .then(async (response) => {
      expect(response.body.message).toEqual("User created");
      expect(response.body.data._id).toBeDefined();
      expect(response.body.data.email).toBe(data.email);
    });
});
