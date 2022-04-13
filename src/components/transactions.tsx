import { Pagination } from "antd";
import date from "date-and-time";
import React from "react";

interface IProps {
	data: any[];
}

interface IState {
	list: any[];
	total: number;
	page: number;
}
class Testssss extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			list: props.data.slice(0, 5),
			total: Math.ceil(props.data.length / 5),
			page: 1,
		};
	}
	handlePagedChange(page: number, pageSize: number) {
		this.setState({
			page,
			list: this.props.data.slice((page - 1) * 5, page * 5),
		});
	}
	render() {
		const { list, page, total } = this.state;
		return (
			<>
				<div style={{ marginTop: 40 }} className="transactions" data-test="transactions">
					<h2 style={{ marginBottom: 30 }}>Block Transactions</h2>
					{list.map((item: any, index: number) => {
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
											<span data-testid="hash">{item.hash}</span>
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
														<span style={{ marginRight: 10, width: 350 }}>
															{row.script}
														</span>
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
					onChange={this.handlePagedChange.bind(this)}
					pageSize={5}
					current={page}
					showSizeChanger={false}
				/>
			</>
		);
	}
}

export default Testssss;
