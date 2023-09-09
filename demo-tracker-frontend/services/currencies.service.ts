import { CurrencyFormData } from "../types";
import axiosInstance from "./axios";

import urls from "./urls.json";

export const PostCreateCurrency = async (data: CurrencyFormData) => {
  try {
    const response = await axiosInstance.post(urls.Currencies, data);
    return response.data;
  } catch (error) {
    console.error("Error creating currency:", error);
    throw error;
  }
};

export const GetCurrencies = async () => {
  try {
    const response = await axiosInstance.get(urls.Currencies);
    return response.data;
  } catch (error) {
    console.error("Error getting currencies:", error);
    throw error;
  }
};
