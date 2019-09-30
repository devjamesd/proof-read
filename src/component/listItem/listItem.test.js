import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "./../../../Utils";
import ListItem from "./index";
import checkPropTypes from "check-prop-types";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProp = {
        title: "Example Title",
        desc: "Some text"
      };
      const propsError = checkPropTypes(
        ListItem.propTypes,
        expectedProp,
        "props",
        ListItem,
        name
      );
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    it("Should render without error", () => {
      const props = {
        title: "Example Title",
        desc: "SOme description"
      };
      const wrapper = shallow(<ListItem {...props} />);
      const component = wrapper.find(`[data-test='listItemComponent']`);
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const props = {
        title: "Example Title",
        desc: "Some description"
      };
      const wrapper = shallow(<ListItem {...props} />);
      const component = wrapper.find(`[data-test='title']`);
      expect(component.length).toBe(1);
    });

    it("Should render a description", () => {
      const props = {
        title: "Example Title",
        desc: "Some description"
      };
      const wrapper = shallow(<ListItem {...props} />);
      const component = wrapper.find(`[data-test='description']`);
      expect(component.length).not.toBe(0);
    });
  });

  describe("Should NOT render", () => {
    const props = {
      desc: "Some text"
    };
    const wrapper = shallow(<ListItem {...props} />);
    const component = wrapper.find(`[data-test='ListItemComponent']`);
    expect(component.length).toBe(0);
  });
});
