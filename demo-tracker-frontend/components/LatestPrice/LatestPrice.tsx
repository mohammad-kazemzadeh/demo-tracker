import styles from "../LatestPriceSection/LatestPriceSection.module.scss";

import { CurrencyPrice } from "../../types";
import { formatRelativeTime } from "../../utils/relativeTimeFormatter";

type Props = {
  currencyPrice: CurrencyPrice;
};

const LatestPrice = ({ currencyPrice }: Props) => {
  return (
    <div className={`${styles.price}`}>
      {""}
      <span> {currencyPrice.currency}</span>
      <span>{currencyPrice.price}</span>
      <span dir="rtl">
        {formatRelativeTime(new Date(currencyPrice.createdAt).getTime())}
      </span>
    </div>
  );
};

export default LatestPrice;
