const app = require("../app");
const mongoose = require("mongoose");
const supertest = require("supertest");
require("dotenv").config({ path: ".env.test" });
beforeAll((done) => {
  mongoose.connect("mongodb://localhost:27017/favTest", () => done());
});

afterAll((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

let token = "";

test("Create User -> POST /api/user/", async () => {
  const data = {
    email: "moranrosales23@hotmail.com",
    password: "A123456s@",
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

test("Error Create User -> POST /api/user/", async () => {
  const data = {
    email: "moranrosales23@hotmail.com",
  };

  await supertest(app).post("/api/user/").send(data).expect(400);
});

test("Login -> POST /auth/local/login", async () => {
  const data = {
    email: "moranrosales23@hotmail.com",
    password: "A123456s@",
  };

  await supertest(app)
    .post("/auth/local/login/")
    .send(data)
    .expect(200)
    .then((response) => {
      expect(response.body.data).toBeDefined();
      token = response.body.data;
    });
});

test("Error Login -> POST /auth/local/login", async () => {
  const data = {
    email: "moranrosales23@hotmail.com",
    password: "A123456s@-",
  };
  await supertest(app).post("/auth/local/login/").send(data).expect(404);
});

test("Get User -> GET /api/user/", async () => {
  await supertest(app)
    .get("/api/user/")
    .set("Authorization", `Bearer ${token}`)
    .expect(200)
    .then(async (response) => {
      expect(response.body.data.length).toBe(1);
    });
});

test("Create List of Favorites -> POST /api/favs/", async () => {
  const data = {
    name: "Nombre de lista",
    favs: [
      {
        title: "Nombre de favorito",
        description: "descripcion del favorito",
        link: "www.mi-favorito.com",
      },
      {
        title: "Otro nombre de favorito",
      },
    ],
  };

  await supertest(app)
    .post("/api/favs/")
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .expect(201)
    .then(async (response) => {
      expect(response.body.message).toEqual("Fav created");
      expect(response.body.data._id).toBeDefined();
      expect(response.body.data.name).toBe(data.name);
      expect(response.body.data.favs.length).toBe(2);
    });
});

test("Error Create List of Favorites -> POST /api/favs/", async () => {
  const data = {
    name: "",
    favs: [
      {
        title: "Nombre de favorito",
        description: "descripcion del favorito",
        link: "www.mi-favorito.com",
      },
      {
        title: "Otro nombre de favorito",
      },
    ],
  };

  await supertest(app)
    .post("/api/favs/")
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .expect(400);
});

test("Get List of Favorites -> GET /api/favs/", async () => {
  await supertest(app)
    .get("/api/favs/")
    .set("Authorization", `Bearer ${token}`)
    .expect(200)
    .then(async (response) => {
      expect(response.body.data.length).toBe(1);
    });
});

test("Delete List of Favorites -> DELETE /api/favs/:id", async () => {
  const data = {
    name: "Nombre de prueba 2 ",
    favs: [
      {
        title: "Nombre de favorito 2",
        description: "descripcion del favorito 2",
        link: "www.mi-favorito.com",
      },
    ],
  };
  let id = "";
  await supertest(app)
    .post("/api/favs/")
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .expect(201)
    .then(async (response) => {
      expect(response.body.message).toEqual("Fav created");
      expect(response.body.data._id).toBeDefined();
      expect(response.body.data.name).toBe(data.name);
      expect(response.body.data.favs.length).toBe(1);
      id = response.body.data._id;
    });

  await supertest(app)
    .delete("/api/favs/" + id)
    .set("Authorization", `Bearer ${token}`)
    .expect(200);
});
