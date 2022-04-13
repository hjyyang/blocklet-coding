import axios from "./axios"

export function blockData(hash: string) {
    return axios({
        method: "GET",
        url: "https://blockchain.info/rawblock/" + hash,
    });
}