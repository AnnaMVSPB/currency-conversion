import { converterAT } from '../actionType/converterAT';

const initialState = {currencies:['AMD','GBP','USD','TRY','CNY','AUD'], exchangeRates: {} };

function currencyReducer(state = initialState, action) {

  switch (action.type) {
    case converterAT.EXCHANGE_RATES_INIT:
      console.log(action.payload.Valute)
      return { ...state, exchangeRates: action.payload.Valute};

    case converterAT.CURRENCY_CONVERSION:
      const copiExchangeRates = { ...state.exchangeRates}
      let courseRatio = 0
      for (let key in copiExchangeRates) {
        if (key === action.payload.currency) {
          courseRatio = copiExchangeRates[key].Value * Number(action.payload.sum)
        }
      }
      
      return { ...state, courseRatio }

    default:
      return state;
  }
};


export default currencyReducer;
