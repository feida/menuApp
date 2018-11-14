/**
 * Created by chintec on 2018/1/23.
 */
import { createAction, NavigationActions, Storage } from '../utils'

export default {
  namespace: 'homeStatus',
  state: {
    show:false,
    seatInfo: {   //座位信息
      seatNum: '',
      showAmount: null,
      isChoose: false,
    },
    secondOrder: false, //是否是第二次下单
    secondOrderId: '', //第二次下单主ID
    alreadyData: [], // 已下单数据
    isTempCart: false, // 是否未选座位 临时cart
    posPlusType: 0,  // 是否开启粉丝价
    ppid: '', //用于拉取数据的参数
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *isShow({ payload }, { call, put }) {
      yield put(createAction('updateState')({ show: true }))
    },
    *noShow({ payload }, { call, put }) {
      yield put(createAction('updateState')({ show: false }))
    },
    *setSeatInfo({ payload }, { call, put }) {
      yield put({type:'updateState',payload:{ seatInfo: payload}})
    },
    *setSecondOrder({ payload }, { call, put }) {
      yield put({type:'updateState',payload:{ secondOrder: payload}})
    },
    *setSecondOrderId({ payload }, { call, put }) {
      yield put({type:'updateState',payload:{ secondOrderId: payload}})
    },
    *setAlreadyData({ payload }, { call, put }) {
      yield put({type:'updateState',payload:{ alreadyData: payload}})
    },
    *isTempCart({ payload }, { call, put }) {
      yield put({type:'updateState',payload:{ isTempCart: payload}})
    },
    *isPosPlusType({ payload }, { call, put }) {
      yield put({type:'updateState',payload:{ posPlusType: payload}})
    },
    *setPpid({ payload }, { call, put }) {
      yield put({type:'updateState',payload:{ ppid: payload}})
    },
  },
  subscriptions: {

  },
}
