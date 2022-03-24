import { takeEvery, put, call } from 'redux-saga/effects';
import {converterAT } from './actionType/converterAT'

async function fetchJson(path, options = {}) {
  const responce = await fetch(path, {
    ...options,
  });
  const data = await responce.json();
  return data;
}


function* fetchApi() {
  try {
   const response = yield call(fetchJson, 'https://www.cbr-xml-daily.ru/daily_json.js')
    
  yield put({type:converterAT.EXCHANGE_RATES_INIT ,payload:response});
 
  } catch (e) {
    yield put((alert('Connection error')));
  }
}


export function* myWatcher() {
  yield takeEvery(converterAT.EXCHANGE_RATES_FETCH, fetchApi);

}

export default myWatcher;
