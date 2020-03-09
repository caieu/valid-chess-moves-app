import React from "react";
import Board from "./Board";
import Cell from "../Cell/Cell";
import { shallow, mount } from "enzyme";

describe("Board", () => {
  it("expect 64 cells inside the board", () => {
    const wrapper = shallow(<Board possibleMoves={[]} />);
    expect(wrapper.find(Cell).length).toBe(64);
  });

  it("expect to find the highlighted cells", () => {
    const wrapper = mount(<Board possibleMoves={["A2", "B3", "C5"]}></Board>);
    expect(wrapper.find(".highlight").length).toBe(3);
  });
  it("expect to find all dark and light cells", () => {
    const wrapper = mount(<Board possibleMoves={[]}></Board>);
    expect(wrapper.find(".light-color").length).toBe(32);
    expect(wrapper.find(".dark-color").length).toBe(32);
  });
});
