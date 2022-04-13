import React from "react";
import App from "../App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
	let wrapper: any;
	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it("app component", () => {
		expect(wrapper.find('[data-test="app"]').length).toBe(1);
	});

	it("input component content change", () => {
		const inputEl = wrapper.find('[data-test="input"]');
		expect(inputEl.length).toBe(1);
		expect(inputEl.prop("value")).toEqual("");
		inputEl.simulate("change", {
			target: {
				value: "test",
			},
		});
		expect(wrapper.find('[data-test="input"]').prop("value")).toBe("test");
	});

});
