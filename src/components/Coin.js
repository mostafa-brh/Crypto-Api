import React from "react";

//Styles
import styles from "./Coin.module.css";

const Coin = ({ data }) => {
  const {
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
    market_cap,
  } = data;
  return (
    <div className={styles.container}>
      <div className={styles.nameImg}>
        <img src={image} alt={name} />
        <span>{name}</span>
      </div>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.price}>$ {current_price.toLocaleString()}</span>
      <span className={price_change_percentage_24h > 0 ? styles.greenPrice: styles.redPrice}>{price_change_percentage_24h.toFixed(2)}</span>
      <span className={styles.market_cap}>$ {market_cap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
