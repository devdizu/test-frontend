import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import TitleItem from "../../../src/components/detail-item/title-item";
import { listItemMock } from "../../mock/list-item-mock";

configure({ adapter: new Adapter() });

it("Should render title item", () => {
  const wrapper = mount(<TitleItem {...listItemMock} />);
  expect(wrapper).toBeTruthy();
});
