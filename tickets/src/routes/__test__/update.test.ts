import request from "supertest";
import mongoose from "mongoose";
import { app } from "../../app";

it("returns a 404 if the provided id does not exist", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .set("Cookie", global.signup())
    .send({ title: "geag3", price: 20 })
    .expect(404);
});

it("returns a 401 if the user is not authenticated", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .send({ title: "geag3", price: 20 })
    .expect(401);
});

it("returns a 401 if the user does not own the ticket", async () => {
  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signup())
    .send({ title: "asgawgg", price: 20 });
});

it("returns a 400 if the user provides an invalid title or price", async () => {});

it("update the ticket provided valid inputs", async () => {});