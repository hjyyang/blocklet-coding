import { Form, Input, Button, message, Empty } from "antd";
import { blockData } from "./lib/index";
import { useState } from "react";
import Digest from "./components/digest";
import Transactions from "./components/transactions";

export interface IDisgestData {
	[key: string]: any;
	fee: number;
	hash: string;
	time: number;
	addr: string;
	bits: number;
	size: number;
	ver: number;
	weight: number;
	nonce: number;
	mrkl_root: string;
	block_index: number;
    height: number;
}

export default function App() {
	const [hash, setHash] = useState("");
	const [data, setData] = useState<null | { tx: any[] }>(null);
	const [loading, setLoading] = useState(false);
	const [disgestData, setDisgestData] = useState<IDisgestData>({
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
        height: 0
	});

	const onFinish = (values: any) => {
		setLoading(true);
		blockData(hash)
			.then((res) => {
				setData(res.data);
				Object.keys(disgestData).forEach((item) => {
					disgestData[item] = res.data[item];
				});
				disgestData.addr = "";//res.data.tx[0]
			})
			.catch(() => {
				message.error("Please enter the correct HSAH");
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div
			className="app-container"
			style={{ maxWidth: 1200, margin: "auto", padding: "20px 20px 40px" }}
			data-test="app"
		>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				autoComplete="off"
				style={{ padding: 30 }}
				data-test="form"
			>
				<Form.Item
					label="Block Hash"
					name="hash"
					rules={[{ required: true, message: "Please enter your Block Hash!" }]}
				>
					<Input
						placeholder="Please enter your Block Hash"
						value={hash}
						onChange={(e) => setHash(e.target.value)}
						data-test="input"
					/>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" data-test="btn" htmlType="submit" loading={loading}>
						Search
					</Button>
				</Form.Item>
			</Form>
			{data ? (
				<>
					<Digest data={disgestData} />
					<Transactions data={data?.tx} />
				</>
			) : (
				<Empty />
			)}
		</div>
	);
}
