import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import ContentItem from "../../../src/components/detail-item/content-item";
import nextImageMock from "../../mock/next-image";
import { listItemMock } from "../../mock/list-item-mock";

nextImageMock.mock();
configure({ adapter: new Adapter() });

it("Should render content item", () => {
  const wrapper = mount(<ContentItem {...listItemMock} />);
  expect(wrapper).toBeTruthy();
});
