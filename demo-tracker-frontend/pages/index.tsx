import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import CurrenciesSection from "../components/CurrenciesSection/CurrenciesSection";
import LatestPriceSection from "../components/LatestPriceSection/LatestPriceSection";
import { SocketInstance } from "../lib/socketInstance";
import styles from "../styles/Home.module.css";
import { CurrencyPrice } from "../types";

const MAX_RESULTS = 10;
const Home: NextPage = () => {
  const [latestPrices, setlatestPrices] = useState<CurrencyPrice[]>([]);

  useEffect(() => {
    const socketInstance = SocketInstance.getInstance();
    const socket = socketInstance.getSocket();
    socket.on("priceUpdate", (data: CurrencyPrice) => {
      // console.log("priceUpdate", data);
      setlatestPrices(prev => [data, ...prev].slice(0, MAX_RESULTS));
    });

    return () => {
      socket.off("priceUpdate");
      socket.disconnect();
    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo Tracker</title>
        <meta name="description" content="demo tracker frontend, made by mdk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CurrenciesSection />
        <LatestPriceSection latestCurrencyPrices={latestPrices} />
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Made By Mohammad Kazemzadeh
        </a>
      </footer>
    </div>
  );
};

export default Home;
