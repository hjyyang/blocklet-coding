import React from "react";
import Digest from "../components/digest";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Digest />", () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(
			<Digest
				data={{
					fee: 0,
					hash: "",
					time: 0,
					addr: "",
					bits: 0,
					size: 0,
					ver: 0,
					weight: 0,
					nonce: 0,
					mrkl_root: "",
					block_index: 0,
					height: 0,
				}}
			/>
		);
	});

	it("digest component render", () => {
		expect(wrapper.find('[data-test="hash"]').length).toBe(1);
		wrapper.setProps({
			data: {
				fee: 0,
				hash: "test",
				time: 0,
				addr: "",
				bits: 0,
				size: 0,
				ver: 0,
				weight: 0,
				nonce: 0,
				mrkl_root: "",
				block_index: 0,
				height: 0,
			},
		});
		expect(wrapper.find('[data-test="hash"]').text()).toEqual("test");
	});
});
