import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./pages/Home";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders home page", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Home).length).toBe(1);
  });
});
