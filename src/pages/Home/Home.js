import { useEffect, useState } from "react";
import { getData } from "./home.actions";

const Home = () => {
    const [data, setData] = useState({
        products: [],
        isLoadingProducts: true,
        isLoadingMarketPrice: true,
    });

    useEffect(() => {
        getData(data, setData);
    }, []);

    console.log(data);

    return (
        <div>Home</div>
    );
}

export default Home;
