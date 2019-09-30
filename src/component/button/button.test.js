import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "./../../../Utils";
import SharedButton from "./index";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Rendering", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });
    it("should render a button", () => {
      const button = findByTestAttribute(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
