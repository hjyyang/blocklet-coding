import { Pagination } from "antd";
import { useEffect, useState } from "react";
import date from "date-and-time";

export default function Transactions({ data }: { data: any }) {
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [list, setList] = useState([]);

	useEffect(() => {
		if (data && data.tx) {
			setTotal(Math.ceil(data.tx.length / 5));
			setList(data.tx.slice((page - 1) * 5, page * 5));
		}
	}, [data]);

	const handlePagedChange = (page: number, pageSize: number) => {
		setPage(page);
		setList(data.tx.slice((page - 1) * 5, page * 5));
	};
	return (
		<>
			<div style={{ marginTop: 40 }} className="transactions">
				<h2 style={{ marginBottom: 30 }}>Block Transactions</h2>
				{list.map((item: any) => {
					return (
						<div className="item" key={item.hash} style={{ marginBottom: 50 }}>
							<div className="row margin30">
								<div className="col">
									<div className="title">Fee</div>
									<div className="content">
										<span>{(item?.fee / 100000000).toFixed(8)} BTC</span>
										<span>
											({item.block_height / 1000} sat/B - {item.weight / 1000} sat/WU -{" "}
											{item.size} bytes)
										</span>
									</div>
								</div>
								<div className="col">
									<div className="title hide">Amount</div>
									<div className="content btn" style={{ marginLeft: "auto" }}>
										<span>{(item?.fee / 100000000).toFixed(8)} BTC</span>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="title">Hash</div>
									<div className="content">
										<span>{item.hash}</span>
									</div>
								</div>
								<div className="col">
									<div className="title hide">Date</div>
									<div className="content" style={{ marginLeft: "auto" }}>
										<span>{date.format(new Date(item.time * 1000), "YYYY-MM-DD HH:mm")}</span>
									</div>
									;
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="title hide">From</div>
									<div>
										{item.inputs.map((row: any, index: number) => {
											return (
												<div className="content" style={{ display: "flex" }} key={index}>
													<span
														style={{ marginRight: 10, width: "100%" }}
														className="width270"
													>
														{row.script}
													</span>
													<div>{(row?.prev_out.value / 100000000).toFixed(8)} BTC</div>
												</div>
											);
										})}
									</div>
								</div>
								<div className="col">
									<div className="title hide">To</div>
									<div className="content" style={{ marginLeft: "auto" }}>
										{item.out.map((row: any, index: number) => {
											return (
												<div className="to" style={{ display: "flex" }} key={index}>
													<span style={{ marginRight: 10, width: 350 }}>{row.script}</span>
													<span>{(row?.value / 100000000).toFixed(8)} BTC</span>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<Pagination
				style={{ marginBottom: 40 }}
				total={total}
				hideOnSinglePage={true}
				onChange={handlePagedChange}
				pageSize={5}
				current={page}
                showSizeChanger={false}
			/>
		</>
	);
}
