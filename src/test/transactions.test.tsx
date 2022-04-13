import React from "react";
import Transactions from "../components/transactions";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new Adapter() });

describe("<Transactions />", () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(<Transactions data={[]} />);
	});

	it("transactions component render", () => {
		expect(wrapper.find('[data-test="transactions"]').length).toBe(1);
	});

	it("transactions component render without data", () => {
		const wrapper = shallow(<Transactions data={[]} />);

		expect(wrapper.find('[data-testid="hash"]').length).toBe(0);
	});

	it("transactions component data rendering", () => {
		const data = [
			{
				hash: "25e4fb7042fc25fe98582adf598357e3b0bc60021cd80de628599512abb63598",
				ver: 1,
				vin_sz: 1,
				vout_sz: 4,
				size: 329,
				weight: 1208,
				fee: 0,
				relayed_by: "0.0.0.0",
				lock_time: 2390244852,
				tx_index: 5355406891307691,
				double_spend: false,
				time: 1608620982,
				block_index: 662463,
				block_height: 662463,
				inputs: [
					{
						sequence: 4294967295,
						witness: "01200000000000000000000000000000000000000000000000000000000000000000",
						script:
							"03bf1b0a04ba9be15f2f706f6f6c696e2e636f6d2f746170726f6f742f626970392fef058602302864a933f742f80698085311c191d861002dd7010000000000",
						index: 0,
						prev_out: {
							tx_index: 0,
							value: 0,
							n: 4294967295,
							type: 0,
							spent: true,
							script: "",
							spending_outpoints: [{ tx_index: 5355406891307691, n: 0 }],
						},
					},
				],
				out: [
					{
						type: 0,
						spent: true,
						value: 641583560,
						spending_outpoints: [{ tx_index: 1501575876861430, n: 2 }],
						n: 0,
						tx_index: 5355406891307691,
						script: "a9149837b6ca944b36f71b94d19cf1e1acd17972642487",
						addr: "3FZsNnE2PJfhaAeRRtsNijm9WpCv4xvkkz",
					},
					{
						type: 0,
						spent: false,
						value: 0,
						spending_outpoints: [],
						n: 1,
						tx_index: 5355406891307691,
						script: "6a24b9e11b6ddccb4730dd13ee44cc9eed1ab57357dd3af7a65667b0a86e96f9cd41d33216b1",
					},
					{
						type: 0,
						spent: false,
						value: 0,
						spending_outpoints: [],
						n: 2,
						tx_index: 5355406891307691,
						script: "6a24aa21a9edd346b25a5a0045ee3dece08ca6d0a45c4ff70d73e1f871c9675933511adcb498",
					},
					{
						type: 0,
						spent: false,
						value: 0,
						spending_outpoints: [],
						n: 3,
						tx_index: 5355406891307691,
						script:
							"6a2952534b424c4f434b3af4f39b1d084072e4e00dfeef19004ace6c3b4b75698998be9d14762c002d3588",
					},
				],
			},
		];
		const wrapper = shallow(<Transactions data={data} />);

		expect(wrapper.find('[data-testid="hash"]').text()).toEqual(data[0].hash);
	});
});
