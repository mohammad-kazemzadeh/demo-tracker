import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  GetCurrencies,
  PostCreateCurrency,
} from "../../services/currencies.service";
import { Currency, CurrencyFormData } from "../../types";
import CurrencyForm from "../CurrencyForm/CurrencyForm";
import CurrenciesList from "./CurrenciesList";
import styles from "./CurrenciesSection.module.scss";
type Props = {};

const CurrenciesSection = (props: Props) => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const result: Currency[] = await GetCurrencies();
        setCurrencies(result);
      } catch (error) {
        toast.error("مشکلی در دریافت ارزها رخ داد!");
      }
    };

    getCurrencies();
  }, []);

  const handleCurrencySubmit = async (currencyFormData: CurrencyFormData) => {
    try {
      const result: Currency = await PostCreateCurrency(currencyFormData);
      setCurrencies(prev => [result, ...prev]);
      if (result) {
        toast.success("ارز مورد نظر با موفقیت ایجاد شد.");
      }
    } catch (error) {
      throw error;
      toast.error("مشکلی رخ داد!");
    }
  };

  return (
    <section className={`${styles.section}`}>
      <div>ارزهای موجود</div>
      <CurrenciesList currencies={currencies} />
      <CurrencyForm handleSubmit={handleCurrencySubmit} />
    </section>
  );
};

export default CurrenciesSection;
