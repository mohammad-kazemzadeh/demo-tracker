import styles from "./CurrenciesSection.module.scss";
import { Currency as CurrencyType } from "../../types";
import Currency from "../Currency/Currency";

type Props = {
  currencies: CurrencyType[];
};

const CurrenciesList = ({ currencies }: Props) => {
  return (
    <div className={`${styles.currencies}`}>
      {currencies?.map(currency => (
        <Currency key={currency.id} currency={currency} />
      ))}
    </div>
  );
};

export default CurrenciesList;
