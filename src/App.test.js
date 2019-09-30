import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttribute, testStore } from "./../Utils";
import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />);
  return wrapper;
};

describe("App Component", () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      posts: [
        { title: "Example title 1", body: "Some text" },
        { title: "Example title 2", body: "Some text" },
        { title: "Example title 3", body: "Some text" }
      ]
    };
    wrapper = shallow(<App store={testStore(initialState)} />)
      .childAt(0)
      .dive();
    console.log(wrapper.debug());
  });

  it("Should render without errors", () => {
    const component = wrapper.find(`[data-test='appComponent']`);
    expect(component.length).toBe(1);
  });
});
