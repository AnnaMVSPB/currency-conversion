import { converterAT } from '../actionType/converterAT';


export const converterCurrencyAC = () => {
  return {
    type: converterAT.EXCHANGE_RATES_FETCH,
  };
};


export const convertingAC = (payload) => {
  return {
    type: converterAT.CURRENCY_CONVERSION,
    payload,
  };
};
