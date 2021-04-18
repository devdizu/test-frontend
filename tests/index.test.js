import App from "../src/pages/index";
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("Should render App without crashing", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toBeTruthy();
  });
});
