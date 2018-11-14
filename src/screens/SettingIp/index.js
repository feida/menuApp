import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Platform, Dimensions, TextInput} from 'react-native';
import { connect } from 'react-redux'
import { createAction, NavigationActions, Storage } from '../../utils'
import pomelo from '../../utils/pomelo-client/index';
import {toastShort} from '../../common/ToastUtil';
var {height, width} = Dimensions.get('window');
@connect(({ router }) => ({ router }))
class SettingIp extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      ip:'',
      header: null,
      gesturesEnabled: false
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      ip:''
    };
    this.count = 0
    this.reconnectTime = null
    this.isJump = false
    this.click = true
  }
  componentWillMount() {
    this.getIp()
  }


  render() {
    let color = {
      bg: '#d8d8d8',
      font: '#8b8b8b'
    }
    let color1 = {
      bg: '#DB7B67',
      font: '#fff'
    }
    let ip = this.state.ip
    return (
      <ScrollView keyboardShouldPersistTaps="never" style={{flex:1}}>
        <Image source={require('../../img/others/ip_bg.png')} style={{height:height,width:width}}/>
        <View style={styles.container}>
          {/*<View style={styles.header}>*/}
            {/*<TouchableOpacity activeOpacity={1} onPress={ this._goBack.bind(this)}>*/}
              {/*<Text style={{color:'#fff',fontSize:18}}>返回</Text>*/}
            {/*</TouchableOpacity>*/}
          {/*</View>*/}
          <View style={styles.wrap}>
            <Text style={{fontSize:24,color:'#fff',}}>欢迎使用Resto+智能菜单</Text>
            <View style={{marginTop:122,width:463,marginBottom:128}}>
              <Text style={{fontSize:15,color:'#fff',marginBottom:25}}>NewPOS-IP地址：</Text>
              <TextInput
                ref = 'textInput'
                keyboardType="number-pad"
                clearButtonMode="while-editing"
                style={{width:463,height:44,paddingLeft:20,color:'#fff',borderColor:'#fff', backgroundColor:'rgba(255,255,255,0.30)',borderRadius:5,borderWidth:1}}
                onChangeText={(text) => this.setState({ip:text})}
                value={this.state.ip}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{width:178,height:44,justifyContent:'center',alignItems:'center',borderRadius:5,backgroundColor: ip!= '' ? color1.bg : color.bg}}
              onPress={() => {this.goToChooseDesk()}}
            >
              <Text style={{color:ip!= '' ? color1.font : color.font,fontSize:15}} >开始使用</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
  async pomeloInit(){
    let that = this
    let ip =  await Storage.get('ip')
    console.log('ip',ip)
    let port = '3050'
    pomelo.init({
      host: ip,
      port: 3050,
      log: true
    },function () {
      //clearInterval(that.reconnectTime)
      global.isLink = true
      that.isJump = true
      that.click = true
      that.count = 0
      let ppid = (new Date()).getTime()
      that.props.dispatch(createAction('homeStatus/setPpid')(ppid))
      console.log('settingIP连上')
    }, function () {
      that.count ++
      console.log('settingIP断开连接', )
      global.isLink = false
      that.setInt()
    })
  }



  setInt() {
    if (this.count < 10){
      this.pomeloInit()
    }
    // this.reconnectTime = setInterval(() => {
    //
    // },1500)
  }

  async goToChooseDesk(){
    if(this.state.ip == '') {
      //this.props.dispatch(NavigationActions.navigate({ routeName: 'Root' }))
      return false
    }
    if(!this.click) {
      return false
    }
    this.click = false
    let ip = this.state.ip
    let historyIp = await Storage.get('ip')
    Storage.set('ip',ip)
    if(!global.isLink){
      this.pomeloInit()
    } else if(ip != historyIp && global.isLink) {
      this.pomeloInit()
    } else if (ip == historyIp && global.isLink) {
      this.isJump = true
    }
    setTimeout(() => {
      if(this.isJump){
        this.props.dispatch(NavigationActions.navigate({ routeName: 'Root' }))
      }else {
        toastShort('连接失败，请检查IP地址或网络！')
      }
    },1000)
    setTimeout(() => {
      this.click = true
    },3000)
  }
  _goBack() {
    const {navigate,goBack,state} = this.props.navigation;
    goBack();
  }

  async getIp() {
    let ip = await Storage.get('ip')
    this.setState({
      ip: ip ? ip : ''
    })
  }

}



const styles = StyleSheet.create({
  container:{
    flex:1,
    position:'absolute',
    top:0,
    bottom:0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header:{
    height:50,
    backgroundColor:'#000',
    opacity:0.5,
    paddingTop:24,
    paddingLeft:30,
    justifyContent:'center'
  },
  wrap:{
    width:width,
    height: 415,
    backgroundColor:'rgba(0,0,0,0)',
    alignItems:'center'
  }
});

export default SettingIp;
