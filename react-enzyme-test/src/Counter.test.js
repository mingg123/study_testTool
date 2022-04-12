import { mount } from "enzyme";
import Counter from "./Counter";

describe("<Counter/>", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });
  it("increase", () => {
    const wrapper = mount(<Counter />);
    let plusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "+1"
    );
    plusButton.simulate("click");
    plusButton.simulate("click");
    const number = wrapper.find("h2");
    expect(number.text()).toBe("2");
  });
  it("decrease", () => {
    const wrapper = mount(<Counter />);
    let minusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "-1"
    );
    minusButton.simulate("click");
    const number = wrapper.find("h2");
    expect(number.text()).toBe("-1");
  });
});
