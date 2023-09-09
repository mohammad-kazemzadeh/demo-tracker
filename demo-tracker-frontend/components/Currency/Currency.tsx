import styles from "./Currency.module.scss";

import { Currency } from "../../types";

type Props = {
  currency: Currency;
};

const Currency = ({ currency }: Props) => {
  return (
    <div className={`${styles.currency}`}>
      <span title={currency.name}>{`نام: ${currency.name}`}</span>
      <span
        title={currency.description}
      >{`توضیحات: ${currency.description}`}</span>
      <span title={currency.email}>{`ایمیل: ${currency.email}`}</span>
    </div>
  );
};

export default Currency;
