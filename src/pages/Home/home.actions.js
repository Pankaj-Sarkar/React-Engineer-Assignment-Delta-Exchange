import axios from "axios";
import { io } from "socket.io-client";

const socket = io("wss://production-esocket.delta.exchange");

export const getData = (data, setData) => {
    console.log("getData");
    axios.get("https://api.delta.exchange/v2/products")
        .then(res => {
            return res.data;
        })
        .then(res => {
            console.log("res", res);
            const symbols = [];
            setData({ ...data, products: res.result, isLoadingProducts: false});
            // eslint-disable-next-line array-callback-return
            res.result.map(item => {
                // eslint-disable-next-line no-unused-expressions
                symbols.push(item.symbol);
            });
            console.log("symbols", symbols);
            getPrice();
        })
        .catch(err => {
            console.log("err", err);
        });
}

const getPrice = () => {
    socket.on("connect", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
}