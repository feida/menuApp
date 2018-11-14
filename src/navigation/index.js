import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  StatusBar,
  Text,
  View,
  AppState
} from 'react-native';
import { TabNavigator, StackNavigator , addNavigationHelpers} from 'react-navigation';
import { createAction, NavigationActions, Storage } from '../utils'
import pomelo from '../utils/pomelo-client/index';

import Home from '../screens/Home'                 // 菜品页
import Launch from '../screens/Launch'             // 启动页
import SettingIp from '../screens/SettingIp'       // IP设置
import ChooseDesk from '../screens/ChooseDesk'     // 选择座位
import OrderPage from '../screens/OrderPage'       // 下单页
import AlreadyOrder from '../screens/AlreadyOrder' // 订单详情
import Search from '../screens/Search'             // 搜索
import FirstPage from '../screens/FirstPage'       // 首页
import Scan from '../screens/QrCode/Scan'          // 扫码


import Test from '../screens/Test'          // 测试
import { connect } from 'react-redux';

const MainNavigator = StackNavigator({
  launch: {screen:Launch},
  settingIp: {screen:SettingIp},
  Root: {screen:ChooseDesk},
  home: {screen:Home},
  orderPage: {screen:OrderPage},
  alreadyOrder: {screen:AlreadyOrder},
  search: {screen:Search},
  firstPage: {screen:FirstPage},
  scan:{screen:Scan},

  //test:{screen:Test},
})


@connect(({ app, router }) => ({ app, router }))
class Router extends Component {
  constructor(props) {
    super(props);
    //设置一个标记，表示从后台进入前台的时候，处理其他逻辑
    this.flage = false
    this.count = 0
    this.reconnectTime = null
  }

  componentDidMount(){
    AppState.addEventListener('change',this._handleAppStateChange);
    //this.pomeloInit()
  }

  _handleAppStateChange = (nextAppState)=>{

    if (nextAppState!= null && nextAppState === 'active') {
      console.log('前台')
      if (!global.isLink) {
         this.pomeloInit();
      }
      //如果是true ，表示从后台进入了前台 ，请求数据，刷新页面。或者做其他的逻辑
      if (this.flage) {
        //这里的逻辑表示 ，第一次进入前台的时候 ，不会进入这个判断语句中。
        // 因为初始化的时候是false ，当进入后台的时候 ，flag才是true ，
        // 当第二次进入前台的时候 ，这里就是true ，就走进来了。

        //测试通过
        // alert("从后台进入前台");

        // 这个地方进行网络请求等其他逻辑。
      }
      this.flage = false ;
    }else if(nextAppState != null && nextAppState === 'background'){
      this.flage = true;
      global.isLink = false
      console.log('后台')
    }

  }
  async pomeloInit(){
    let that = this
    let ip = await Storage.get('ip')
    if (!ip) return
    console.log('ip',ip)
    let port = '3050'
    pomelo.init({
      host: ip,
      port: 3050,
      log: true
    },function () {
      global.isLink = true
      that.count = 0
      let ppid = (new Date()).getTime()
      that.props.dispatch(createAction('homeStatus/setPpid')(ppid))
      console.log('连上')
    },function () {
      console.log('断开连接')
      global.isLink = false
      that.count++
      that.setInt()
    })


  }

  setInt() {
    if(this.count< 10) {
      this.pomeloInit()
    }
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  render() {
        const { dispatch, router } = this.props
        const navigation = addNavigationHelpers({ dispatch, state: router })
        return (
          <MainNavigator navigation={navigation}/>
        )

    }


}
export default Router
export function routerReducer(state, action = {}) {
    return MainNavigator.router.getStateForAction(action, state)
}

