import { Form, Input, Button, message, Empty } from "antd";
import { blockData } from "./lib/index";
import React, { useState } from "react";
import Digest from "./components/digest";
import Transactions from "./components/transactions";

export default function App() {
	const [hash, setHash] = useState("");
	const [data, setData] = useState(null);

	const onFinish = (values: any) => {
		blockData(hash)
			.then((res) => {
				setData(res.data);
			})
			.catch(() => {
				message.error("Please enter the correct HSAH");
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
					<Button type="primary" data-test="btn" htmlType="submit">
						Search
					</Button>
				</Form.Item>
			</Form>
			{data ? (
				<>
					<Digest data={data} />
					<Transactions data={data} />
				</>
			) : (
				<Empty />
			)}
		</div>
	);
}
