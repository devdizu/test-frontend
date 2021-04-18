import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import ListItem from "../../src/components/list-item";
import nextImageMock from "../mock/next-image";
import { listItemMock } from "../mock/list-item-mock";

nextImageMock.mock();
configure({ adapter: new Adapter() });

it("Should render list item", () => {
  const wrapper = mount(<ListItem {...listItemMock} />);
  expect(wrapper).toBeTruthy();
});
