import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
// import Items, { getServerSideProps } from "../../../src/pages/items";
import IdItem, {
  getStaticProps,
  getStaticPaths,
} from "../../../src/pages/items/[id]";
import itemsService from "../../../src/services/items-service";
import nextImageMock from "../../mock/next-image";
import { itemResponseMock } from "../../mock/items-response-mock";

nextImageMock.mock();
configure({ adapter: new Adapter() });

it("Should render item", () => {
  const wrapper = mount(<IdItem {...itemResponseMock.item} />);
  expect(wrapper).toBeTruthy();
});

describe("getStaticProps and getStaticPaths", () => {
  it("Should get data from id", async () => {
    jest
      .spyOn(itemsService, "getItem")
      .mockImplementation(() => Promise.resolve(itemResponseMock));
    const result = await getStaticProps({ params: { id: "Unit Test" } });
    expect(result.props).toBeDefined();
  });
  it("Should get static paths", async () => {
    const result = await getStaticPaths({ params: { id: "Unit Test" } });
    expect(result.fallback).toStrictEqual("blocking");
  });
});
