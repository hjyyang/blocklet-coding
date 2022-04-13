import date from "date-and-time";

 function Digest({ data }: { data: any }) {
	const handleTime = (time: number) => {
		return time ? date.format(new Date(time * 1000), "YYYY-MM-DD HH:mm") : "";
	};
	return (
		<div className="digest">
			<div className="item">
				<div className="title">Hash</div>
				<div className="content" data-test="hash">
					{data.hash}
				</div>
			</div>
			<div className="item">
				<div className="title">Confirmations</div>
				<div className="content">{}</div>
			</div>
			<div className="item">
				<div className="title">Timestamp</div>
				<div className="content">{handleTime(data.time)}</div>
			</div>
			<div className="item">
				<div className="title">Height</div>
				<div className="content">{data.height}</div>
			</div>
			<div className="item">
				<div className="title">Miner</div>
				<div className="content">
					<a href="">Poolin</a>
				</div>
			</div>
			<div className="item">
				<div className="title">Number of Transactions</div>
				<div className="content">{data.n_tx}</div>
			</div>
			<div className="item">
				<div className="title">Difficulty</div>
				<div className="content"></div>
			</div>
			<div className="item">
				<div className="title">Merkle root</div>
				<div className="content">{data.mrkl_root}</div>
			</div>
			<div className="item">
				<div className="title">Version</div>
				<div className="content">{data?.ver ? "0x" + data?.ver.toString(16) : ""}</div>
			</div>
			<div className="item">
				<div className="title">Bits</div>
				<div className="content">{data?.bits?.toLocaleString()}</div>
			</div>
			<div className="item">
				<div className="title">Weight</div>
				<div className="content">{data?.weight?.toLocaleString()} WU</div>
			</div>
			<div className="item">
				<div className="title">Size</div>
				<div className="content">{data?.size ? data?.size?.toLocaleString() + " bytes" : ""}</div>
			</div>
			<div className="item">
				<div className="title">Nonce</div>
				<div className="content">{data?.nonce?.toLocaleString()}</div>
			</div>
			<div className="item">
				<div className="title">Transaction Volume</div>
				<div className="content"></div>
			</div>
			<div className="item">
				<div className="title">Block Reward</div>
				<div className="content">
					{data?.block_index ? (data?.block_index / 100000000).toFixed(8) + " BTC" : ""}
				</div>
			</div>
			<div className="item">
				<div className="title">Fee Reward</div>
				<div className="content">{data?.fee ? (data?.fee / 100000000).toFixed(8) + " BTC" : ""}</div>
			</div>
		</div>
	);
}

export default Digest;
