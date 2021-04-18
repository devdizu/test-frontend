import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import Header from "../../src/components/header";

configure({ adapter: new Adapter() });

it("Should render header route with no Title", () => {
  const wrapper = mount(<Header searchQuery="Unit Test"/>);
  expect(wrapper).toBeTruthy();
});
