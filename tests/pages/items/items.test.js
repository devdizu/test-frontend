import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import Items, { getServerSideProps } from "../../../src/pages/items";
import itemsService from "../../../src/services/items-service";
import nextImageMock from "../../mock/next-image";
import { itemsResponseMock } from "../../mock/items-response-mock";

nextImageMock.mock();
configure({ adapter: new Adapter() });

it("Should render items", () => {
  const wrapper = mount(<Items {...itemsResponseMock} />);
  expect(wrapper).toBeTruthy();
});

describe("Server side props", () => {
  it("Should get props with query params", async () => {
    jest
      .spyOn(itemsService, "getItems")
      .mockImplementation(() => Promise.resolve({ data: itemsResponseMock }));
    const result = await getServerSideProps({ query: { search: "Unit test" } });
    expect(result.props).toBeDefined();
  });
  it("Should get props without query params", async () => {
    jest
      .spyOn(itemsService, "getItems")
      .mockImplementation(() => Promise.resolve({ data: itemsResponseMock }));
    const result = await getServerSideProps({ query: {} });
    expect(result.props).toBeDefined();
  });
});
