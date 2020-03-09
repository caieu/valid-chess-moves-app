import React from "react";
import Wizard from "./Wizard";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Wizard", () => {
  it("should have 3 steps", () => {
    const wrapper = shallow(<Wizard></Wizard>);
    expect(wrapper.dive().find(".step").length).toBe(3);
  });
});
