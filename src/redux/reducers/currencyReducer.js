import { converterAT } from '../actionType/converterAT';

const initialState = { exchangeRates: [] };

function currencyReducer(state = initialState, action) {

  switch (action.type) {
    case converterAT.EXCHANGE_RATES_INIT:
      let arr = []
      console.log(action.payload)
      for (let key in action.payload.Valute) {
        arr.push(action.payload.Valute[key])
      }
      return { ...state, exchangeRates: arr };

    case converterAT.CURRENCY_CONVERSION:
      const copiExchangeRates = [...state.exchangeRates]
      let courseRatio = 0
       copiExchangeRates.map(currencie => {
        if (currencie.CharCode === action.payload.currency) {
          return courseRatio = Number(action.payload.sum) * currencie.Value
        }
      })
      return { ...state, courseRatio }

    default:
      return state;
  }
};


export default currencyReducer;
