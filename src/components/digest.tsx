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

	const handleDifficulty = (bits: number) => {
		if (!bits || bits <= 0) return "";
		const hexBits = bits.toString(16);
		const creationBlock = "0x00000000FFFF0000000000000000000000000000000000000000000000000000";
		const before = 64 - parseInt(hexBits.slice(0, 2), 16) * 2;
		const after = 64 - before - (hexBits.length - 2);
		const currentHash =
			"0x" + new Array(before).fill(0).join("") + hexBits.slice(2) + new Array(after).fill(0).join("");

		const difficulty = ((creationBlock as unknown) as number) / ((currentHash as unknown) as number);
		return Number(difficulty.toFixed(2)).toLocaleString();
	};

	return (
		<>
			<h2>Block {data.height}</h2>
			<p>
				This block was mined on December {new Date(1608620982 * 1000).getDate()},{" "}
				{new Date(1608620982 * 1000).getFullYear()} at{" "}
				{new Date(1608620982 * 1000).getHours() > 12
					? new Date(1608620982 * 1000).getHours() - 12
					: new Date(1608620982 * 1000).getHours()}
				:
				{new Date(1608620982 * 1000).getMinutes() > 9
					? new Date(1608620982 * 1000).getMinutes()
					: "0" + new Date(1608620982 * 1000).getMinutes()}{" "}
				PM GMT+8 by Poolin. It currently has 69,321 confirmations on the Bitcoin blockchain.
			</p>
			<p>
				The miner(s) of this block earned a total reward of {data.block_reward} ($258,324.44). The reward
				consisted of a base reward of {data.block_reward} ($258,324.44) with an additional{" "}
				{(data?.fee / 100000000).toFixed(8) + " BTC"} ($6,854.30) reward paid as fees of the {data.n_tx}{" "}
				transactions which were included in the block. The Block rewards, also known as the Coinbase reward,
				were sent to this <a href={"https://www.blockchain.com/btc/address/" + data.addr}>address</a>.
			</p>
			<p>
				A total of {data.transaction_volume} ($12,668,368.74) were sent in the block with the average
				transaction being {data.transaction_volume} ($13,890.76). Learn more about how blocks work.
			</p>
			<div className="digest" style={{ marginTop: 40 }}>
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
					<div className="content">{handleDifficulty(data.bits)}</div>
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
					<div className="content">{data.transaction_volume}</div>
				</div>
				<div className="item">
					<div className="title">Block Reward</div>
					<div className="content">{data.block_reward}</div>
				</div>
				<div className="item">
					<div className="title">Fee Reward</div>
					<div className="content">{data?.fee ? (data?.fee / 100000000).toFixed(8) + " BTC" : ""}</div>
				</div>
			</div>
		</>
	);
}

export default Digest;
