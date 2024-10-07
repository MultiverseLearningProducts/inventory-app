import { Items } from "././routes";

// CRUD Tests
describe("CRUD Tests", () => {
  it("should create a new item", async () => {
    const response = await request(app)
      .post("/items")
      .send({ name: "Mens sport Tshirt" });
    expect(response.status).toBe(201);
    expect(response.body.name).toBe("Mens sport Tshirt");
  });
  it("should fetch all items", async () => {
    const response = await request(app).get("/items");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
  it("should update an item", async () => {
    const newItem = await Items.create({ name: "Women's sport pants" });
    const response = await request(app)
      .put(`items/${newItem.id}`)
      .send({ name: "Women's sport pants" });
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Women's sport pants");
  });
  it("should delete an item", async () => {
    const newItem = await Items.create({ name: "Women's sport pants" });
    const response = await request(app).delete(`/items/${newItem.id}`);
    expect(response.status).toBe(204);
  });
});
