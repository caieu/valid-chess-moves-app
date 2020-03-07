import React from "react";
import Cell from "./Cell";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Cell", () => {
  it("should call onClick function", () => {
    const click = jest.fn();
    const wrapper = shallow(<Cell onClick={click}></Cell>);
    wrapper.simulate("click");
    expect(click).toHaveBeenCalled();
  });
});
