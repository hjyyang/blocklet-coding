import { blockData } from "../lib/index";

it("get block data successful", async () => {
	await expect(blockData("00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa")).resolves.toMatchObject({
		data: {},
	});
}, 7000);

it("get block data failure", async () => {
	await expect(blockData("test")).rejects.toThrow();
}, 7000);