import itemsService from "../../src/services/items-service";

it("Should get Items", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve("Unit Test"),
    })
  );
  const result = await itemsService.getItems();
  expect(result).toStrictEqual("Unit Test");
});

it("Should get Item", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve("Unit Test"),
    })
  );
  const result = await itemsService.getItem();
  expect(result).toStrictEqual("Unit Test");
});
