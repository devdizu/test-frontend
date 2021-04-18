import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import Breadcrumb from "../../src/components/breadcrumb";

configure({ adapter: new Adapter() });

it("Should render breadcrum route with no Title", () => {
  const wrapper = mount(<Breadcrumb category="Casas" />);
  expect(wrapper.find("div").instance().innerHTML).toStrictEqual("Casas");
});

it("Should render breadcrum route with Title", () => {
  const wrapper = mount(<Breadcrumb category="Casas" title="Casa Grande" />);
  expect(wrapper.find("div").instance().innerHTML).toStrictEqual("Casas / Casa Grande");
});
