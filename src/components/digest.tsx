import date from "date-and-time";
import type { IDisgestData } from "../App";

function Digest({ data }: { data: IDisgestData }) {
	const handleTime = (time: number) => {
		return time ? date.format(new Date(time * 1000), "YYYY-MM-DD HH:mm") : "";
	};
	const handleCopy = (hash: string) => {
		var aux = document.createElement("input");
		aux.setAttribute("value", hash);
		document.body.appendChild(aux);
		aux.select();
		document.execCommand("copy");
		document.body.removeChild(aux);
	};
	return (
		<div className="digest">
			<div className="item">
				<div className="title">Hash</div>
				<div className="content" data-test="hash">
					<span>{data.hash}</span>
					<svg
						onClick={() => handleCopy(data.hash)}
						viewBox="0 0 384 512"
						height="14px"
						width="14px"
						style={{ marginLeft: 5, cursor: "pointer" }}
					>
						<path d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"></path>
					</svg>
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
					<a href={"https://www.blockchain.com/btc/address/" + data.addr}>Poolin</a>
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
