import styles from "./LatestPriceSection.module.scss";
import { CurrencyPrice } from "../../types";
import CurrencyPriceTable from "../CurrencyPriceTable/CurrencyPriceTable";

type Props = {
  latestCurrencyPrices: CurrencyPrice[];
};

const LatestPriceSection = ({ latestCurrencyPrices }: Props) => {
  return (
    <section className={`${styles.section}`}>
      <div>قیمت های لحظه‌ای</div>
      <CurrencyPriceTable currencyPrices={latestCurrencyPrices} />
    </section>
  );
};

export default LatestPriceSection;
