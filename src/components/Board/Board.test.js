import React from "react";
import Board from "./Board";
import Cell from "../Cell/Cell";
import { shallow } from "enzyme";

describe("Board", () => {
  it("expect 64 cells inside the board", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find(Cell).length).toBe(64);
  });
});
