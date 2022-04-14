import axios from "./axios"

export function blockData(hash: string) {
    return axios({
        method: "GET",
        url: "https://blockchain.info/rawblock/" + hash,
    });
}

export function currentBlock(url: string = "/latestblock") {
    return axios({
        method: "GET",
        url
    })
}