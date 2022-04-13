import React from "react";
import Digest from "../components/digest";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Digest />", () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(<Digest data />);
	});

	it("digest component render", () => {
		expect(wrapper.find('[data-test="hash"]').length).toBe(1);
		wrapper.setProps({ data: { hash: "test" } });
		expect(wrapper.find('[data-test="hash"]').text()).toEqual("test");
	});
});
