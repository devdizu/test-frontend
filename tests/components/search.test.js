import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import Search from "../../src/components/search";
import { mockNextRouter } from "../mock/next-router";

configure({ adapter: new Adapter() });
const onChangeEvent = { target: { value: "Unit Test" } };

it("Should render search and type input", () => {
  const wrapper = mount(<Search />);
  const inputSearch = wrapper.find("#inputSearch");
  inputSearch.simulate("change", onChangeEvent);
  expect(inputSearch.instance().value).toStrictEqual(
    onChangeEvent.target.value
  );
});

it("Should render search and submit data", () => {
  const wrapper = mount(<Search router={mockNextRouter} />);
  const inputSearch = wrapper.find("#inputSearch");
  const formSearch = wrapper.find("#formSearch");
  inputSearch.simulate("change", onChangeEvent);
  formSearch.simulate("submit");
  expect(inputSearch.instance().value).toStrictEqual(
    onChangeEvent.target.value
  );
  expect(mockNextRouter.push.mock.calls.length).toBe(1);
});