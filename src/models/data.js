/**
 * Created by chintec on 2018/1/23.
 */
import { createAction, NavigationActions, Storage } from '../utils'
import {picData, orderData} from '../common/picData';
let dataStr = JSON.stringify(picData);
let a = JSON.parse(dataStr);
let dataStr1 = JSON.stringify(orderData);
let b = JSON.parse(dataStr1);
export default {
  namespace: 'data',
  state: {
    data: a,  //picData
    orderData: b,
    isPay:false,
    isOrder: false,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *upDate({ payload }, { call, put }) {
      yield put({type:'updateState',payload:{ data: payload}})
    },
    *upDateOrderData({ payload }, { call, put }) {
      yield put({type:'updateState',payload:{ orderData: payload}})
    },
    *payMoney({ payload }, { call, put }) {
      yield put({type:'updateState',payload:{ isPay: payload}})
    },
    *makeOrder({ payload }, { call, put }) {
      yield put({type:'updateState',payload:{ isOrder: payload}})
    },
  },
  subscriptions: {

  },
}
