import React, { useState } from "react";
import { useEffect } from "react";

//API
import { getURL } from "../services/api";

//Component
import Loader from "./Loader";
import Coin from "./Coin";

//Styles
import styles from "./Landing.module.css";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getURL();
      console.log(data);
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const searcheHandler = (event) => {
    setSearch(event.target.value);
  };

  const searcheCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={searcheHandler}
      />
      <br></br>
      <br></br>
      {coins.length ? (
        <div className={searcheCoins.length && styles.coinsBox}>
          {searcheCoins.map((coin) => (
            <Coin key={coin.id} data={coin} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Landing;
