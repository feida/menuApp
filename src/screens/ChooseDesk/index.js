import React, { Component } from 'react';
import { ScrollView, Dimensions, StyleSheet, View, Text, Image, TouchableOpacity, Platform ,Keyboard,TextInput,Modal,DeviceEventEmitter} from 'react-native';
import CodePush from 'react-native-code-push';
import * as Progress from 'react-native-progress';
import { createAction, NavigationActions, Storage } from '../../utils'
import { connect } from 'react-redux'
import { toastShort } from '../../common/ToastUtil';
import { picData } from '../../common/picData'
import { bindTable, getOrderInfoByTableNumber, menuSyncArticleInfo,getTableNumberByVvid } from '../../services/api';
var {height, width} = Dimensions.get('window');
let codePushOptions = {
  //设置检查更新的频率
  //ON_APP_RESUME APP恢复到前台的时候
  //ON_APP_START APP开启的时候
  //MANUAL 手动检查
  checkFrequency : CodePush.CheckFrequency.ON_APP_RESUME
};
@connect(({ homeStatus, router }) => ({ homeStatus, router }))
class ChooseDesk extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      gesturesEnabled: false,
      header:null
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      progress:0,
      Authorization: false,
      seatNum:'xxx',
      focus:false,
      amount: 0,
      showAmount: 2,
      peopleArray: [{
        active: true,
        value: 2
      },{
        active: false,
        value: 3
      },{
        active: false,
        value: 4
      },{
        active: false,
        value: 5
      },{
        active: false,
        value: 6
      },{
        active: false,
        value: 7
      },{
        active: false,
        value: 8
      },{
        active: false,
        value: 9
      },{
        active: false,
        value: 10
      },{
        active: false,
        //value: 7
      }]
    }

    this.totalData = []
  }

  componentWillMount() {
  }
  componentDidMount() {
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="never" style={{backgroundColor:'#fff'}}>
        <View style={{ backgroundColor: '#152A45',paddingLeft:30,paddingRight:30,paddingTop:24,height:64,flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
          {/*<TouchableOpacity
            onPress={() => {this.props.dispatch(NavigationActions.navigate({ routeName: 'test' }))}}
            style={{position:'absolute',top:32,left:20,}}
          >
            <Text style={{fontSize:20,color:'#fff'}}>测试</Text>
          </TouchableOpacity>*/}
          <Image source={require('../../img/others/logo.png')} style={{width:84,height:37}}/>
          <View style={{flexDirection:'row', position:'absolute',top:32,right:30,}}>
            <TouchableOpacity onPress={() => {this.getMenuSyncArticleInfo()}}>
              <Image source={require('../../img/others/update.png')} style={{width:25,height:25,marginRight:28}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.toSetting()}}>
              <Image source={require('../../img/others/setting.png')} style={{width:24,height:24}}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width:width,height:50,marginTop:10,paddingLeft:30,paddingRight:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#ECECEC'}}>
          <View style={{flexDirection:'row',alignItems:'center',height:50}}>
            <Image source={require('../../img/others/fuwu.png')} style={{width:24,height:24,marginRight:8}}/>
            <Text style={{color:'#787878',fontSize:20}}>请由服务员协助，录入当前座位号及用餐人数</Text>
          </View>
          <TouchableOpacity style={{width:80,height:35,justifyContent:'center',alignItems:'center',borderRadius:8,backgroundColor:'#c0c0c0'}}
                            onPress={this.goToHome.bind(this)}>
            <Text style={{color:'#fff',fontSize:18}}>跳过</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingRight:30,paddingLeft:30,marginTop:15}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../../img/others/dingwei.png')} style={{width:30,height:30,marginRight:8}}/>
            <Text style={{fontSize:24,color:'#333'}}>当前座位号</Text>
          </View>
          <View style={{width:width-60,height:220,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity activeOpacity={1} onPress = {() => {this.refs.textInput.focus();}} style={{width:130,height:130,borderWidth:1,borderColor:'#333',borderRadius:65,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#333',fontSize:30,fontWeight:'bold'}}>{this.state.seatNum}</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingLeft:100,paddingRight:100,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity
              style={{width:220,height:60,borderRadius:8,backgroundColor:'#DB7B67',justifyContent:'center',alignItems:'center'}}
              onPress = {() => {this.refs.textInput.focus();}}
            >
              <Text style={{fontSize:24, color:'#fff'}}>键盘录入</Text>
              <TextInput
                ref = 'textInput'
                autoFocus={this.state.focus}
                keyboardType="number-pad"
                clearTextOnFocus={true}
                caretHidden={true}
                maxLength = {4}
                style={{width:0,height:60, borderColor: 'gray',position:'absolute',top:0,left:0, borderWidth: 0,}}
                onChangeText={(text) => {
                  this.setState({seatNum:text})
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{width:220,height:60,borderRadius:8,backgroundColor:'#DB7B67',justifyContent:'center',alignItems:'center'}}
              onPress={this.pushQrCodePage.bind(this)}
            >
              <Text style={{fontSize:24, color:'#fff'}}>扫码录入</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',marginTop:60}}>
            <Image source={require('../../img/others/yongcan.png')} style={{width:30,height:30,marginRight:8}}/>
            <Text style={{fontSize:24,color:'#333'}}>就餐人数</Text>
          </View>
          <View style={{width:width-60,height:220,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:130,height:130,borderWidth:1,borderColor:'#333',borderRadius:65,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#333',fontSize:30,fontWeight:'bold'}}>{this.state.showAmount} 位</Text>
            </View>
          </View>
          <View style={styles.rewardContent}>
            { this.state.peopleArray.map((item, key) => {
              let itemWidth = (width - 60-(33*5) ) / 5;
              let itemHeight = 50;
              if(key == 9){
                return(
                  <View key={key} style={[styles.rewardOption, {width: itemWidth, height: itemHeight}]}
                        onPress={() => this.peopleNum(item, key)}>

                    <TextInput
                      ref={component => this._textInput = component}
                      onSubmitEditing={this._onSubmitEditing.bind(this)}
                      onEndEditing={this._onPressSubmit.bind(this)}
                      onChange={this._onChange.bind(this)}
                      style={{
                        width: itemWidth-15,
                        height: 50,
                        padding:0,
                        // textAlignVertical: 'top'
                        fontSize:22,
                        textAlign:'center'
                      }}
                      placeholder='其他'
                      keyboardType={'numeric'}
                      maxLength = {2}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#999"
                    />
                  </View>
                )
              }else{
                if (item.active) {
                  return (
                    <TouchableOpacity key={key} style={[styles.rewardOption, styles.activeOption , {width: itemWidth, height: itemHeight}]}
                                      onPress={() => this.peopleNum(item, key)}>
                      <Text style={{color: '#fff',fontSize:24}}>{item.value}位</Text>
                    </TouchableOpacity>
                  )
                } else {
                  return (
                    <TouchableOpacity key={key} style={[styles.rewardOption, {width: itemWidth, height: itemHeight}]}
                                      onPress={() => this.peopleNum(item, key)}>
                      <Text style={{color: '#333',fontSize:24}}>{item.value}位</Text>
                    </TouchableOpacity>
                  )
                }
              }

            }) }
          </View>
          <View style={{marginTop:30,alignItems:'center'}}>
            <TouchableOpacity
              style={{width:width-90,height:50,borderRadius:8,backgroundColor:'#DB7B67',justifyContent:'center',alignItems:'center',}}
              onPress = {this.desetope.bind(this)}
            >
              <Text style={{fontSize:24, color:'#fff'}}>确定</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          visible={this.state.loading}
          transparent={true}
          animationType={'fade'}//none slide fade
          onRequestClose={()=>this.setState({loading:false})}
        >
          <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center',justifyContent:'center'}}>
            <Progress.Circle
              style={{marginBottom:20}}
              progress={this.state.progress}
              size={100} // 圆的直径
              unfilledColor="rgba(255,255,255,1)" // 剩余进度的颜色
              color={"#008aff"} // 颜色
              thickness={6} // 内圆厚度
              showsText={true}//显示进度比文字
              textStyle={{fontSize:16,color:'#fff'}}//设置文字样式
              // indeterminate={this.state.indeterminate}
            />
            <Text style={{fontSize:16,color:'#fff'}}>正在加载菜品数据...</Text>
          </View>
        </Modal>
      </ScrollView>
    );
  }
  _onSubmitEditing(){
    this._textInput.blur();
    Keyboard.dismiss()
  }
  peopleNum(item, index){
    Keyboard.dismiss()
    let peopleArray = this.state.peopleArray
    let resList = []
    let amount = 0
    let showAmount = 0
    let allFlag = true
    peopleArray.map((e, i) => {
      amount = item.value
      showAmount = item.value
      if (i == index) {
        // e.active = !e.active
        e.active = true
      } else {
        e.active = false
      }
      if (e.active) {
        allFlag = false
      }
      resList.push(e)
    })
    if (allFlag) {
      amount = 0
      showAmount = 0
    }
    this.setState({
      amount: amount,
      showAmount: showAmount,
      peopleArray: resList
    })
  }

  _onPressSubmit(event){
    Keyboard.dismiss()
  }

  _onChange(event) {
    let text = event.nativeEvent.text
    let reg = /^\d+(.\d{1,2})?$/
    let amount = this.state.amount
    let showAmount = this.state.amount
    if (reg.test(text)) {
      amount = text
      showAmount = text
    }
    let peopleArray = this.state.peopleArray
    let resList = []
    peopleArray.map((e, i) => {
      e.active = false
      resList.push(e)
    })
    this.setState({amount: amount, showAmount: showAmount, peopleArray: resList})
  }

  //扫码页
  pushQrCodePage(){
    const  {navigation} = this.props;
    console.log('navigation',navigation)
    navigation.navigate('scan',{callback:(backData) => {this.setState({seatNum:backData})},Authorization: this.state.Authorization})
  }

  async goToHome(){
    let tempPicData = await Storage.get('tempPicData')
    if (!tempPicData) {
      toastShort('请更新菜品数据')
      return false
    }
    this.props.dispatch(NavigationActions.navigate({ routeName: 'firstPage' }))
  }
  async desetope() {
    let that = this
    let tempPicData = await Storage.get('tempPicData')
    if (!tempPicData) {
      toastShort('请更新菜品数据')
      return false
    }
    if( this.state.seatNum == 'xxx' || this.state.showAmount == 0){
      toastShort('未选桌号');
      return false
    }

    if (!global.isLink) {
      toastShort('与pos端断开连接，请检查网络')
      return false
    }
    let data = {
      seatNum: that.state.seatNum,
      showAmount: that.state.showAmount,
      isChoose: true,
    }
    let param = {
      tableNumber: this.state.seatNum,
    }
    console.log('param',param)
    pomelo.request(getOrderInfoByTableNumber, param, function(result) {
      console.log("getOrderInfoByTableNumber",result);
      if (result.code == 200 && result.success && result.data == null) {
        that.props.dispatch(createAction('homeStatus/setSeatInfo')(data))
        that.props.dispatch(NavigationActions.navigate({ routeName: 'firstPage' }))
      } else if(result.code == 200 && result.success && result.data) {
        let res = result.data
        let arr = res.order_item_list.concat(res.childreorder_item_list)
        that.props.dispatch(createAction('homeStatus/setAlreadyData')(arr))
        that.props.dispatch(createAction('homeStatus/setSeatInfo')(data))
        that.props.dispatch(NavigationActions.navigate({ routeName: 'alreadyOrder' }))
        that.props.dispatch(createAction('homeStatus/setSecondOrderId')(res.id))
      } else if (result.code == 200 && !result.success && result.data == null) {
        toastShort(result.msg);
      }

    });
  }

  toSetting(){
    this.props.dispatch(NavigationActions.navigate({ routeName: 'settingIp' }))
  }


  pomeloEvent() {
    let that = this
    pomelo.on("event", (evenObj)=>{
      console.log("evenObj", evenObj);
      if(evenObj.data && evenObj.data.type == 'asyncInfo') {
        that.setState({
          progress: (evenObj.data.percent)/100,
          loading: true
        })
        that.totalData.push(evenObj.data.article)
      }
    });
  }

  getMenuSyncArticleInfo(){
    let { ppid } = this.props.homeStatus
    if (!global.isLink) {
      toastShort('与pos端断开连接，请检查网络')
      return false
    }
    this.pomeloEvent()  // 监听菜品推送
    this.totalData = []

    let that = this
    let param = {
      ppid: ppid
    }
    pomelo.request(menuSyncArticleInfo, param, function(result) {
      console.log("menuSyncArticleInfo",result);
      /*let url = 'http://106.15.11.6:3000'
       fetch(url, {
       method: "POST",
       headers: {
       Accept: "application/json",
       "Content-Type": "application/json"
       },
       body: JSON.stringify({
       brandName: '电子菜单',
       shopName: '电子菜单',
       type: '拉取菜品',
       content: JSON.stringify(result)

       })
       }).then((response) => {
       console.log('response',response)
       })*/
      if (result.code == 200 && result.success) {
        that.setState({
          loading: false
        })
        pomelo.removeListener('event')
        if (that.totalData && that.totalData.length == 0) return
        let posPlusType = result.data.posPlusType
        let temp = JSON.stringify(picData);
        let tempArr = JSON.parse(temp);
        let nameData = []
        tempArr.map((v,i) => {
          v.cuisine.map((m,k) => {
            m.history = ''
            m.price = '0'
            m.id = ''
            m.discount = '100'
            m.article_family_id = ''
            m.fans_price = ''
            m.article_type = '1'
            m.is_empty = 0
            m.current_working_stock = '0'
            m.article_unit = ''
            nameData.push(m)
          })
        })
        console.log('that.totalData',that.totalData)
        that.totalData.map((m,k) => {
          var getIndex = that.getArrIndex(nameData,{name: m.name});
          //console.log('ssss',getIndex)
          if(getIndex!= null) {
            nameData[getIndex].price = m.discount < 100 ? (+m.price * +m.discount/100).toFixed(2) : (!posPlusType && m.fans_price > 0 ? m.fans_price : m.price)
            nameData[getIndex].history = m.price
            nameData[getIndex].id = m.id
            nameData[getIndex].discount = m.discount
            nameData[getIndex].article_family_id = m.article_family_id
            nameData[getIndex].article_type = m.article_type
            nameData[getIndex].is_empty = m.is_empty
            nameData[getIndex].current_working_stock = m.current_working_stock
            nameData[getIndex].fans_price = m.fans_price || 0
            nameData[getIndex].article_unit = m.article_unit
          }
        })

        that.props.dispatch(createAction('data/upDate')(tempArr))
        that.props.dispatch(createAction('homeStatus/isPosPlusType')(posPlusType))

        Storage.set('tempPicData',tempArr)
        Storage.set('posPlusType',posPlusType)

      } else if( result.code == 200 && result.msg){
        that.setState({
          loading: false
        })
        toastShort(result.msg)
      }
    });

  }
  getArrIndex(arr, obj) {
    let index = null;
    let key = Object.keys(obj)[0];
    arr.every(function(value, i) {
      if (value[key] === obj[key]) {
        index = i;
        return false;
      }
      return true;
    });
    return index;
  }

}

const styles = StyleSheet.create({
  shadeWrap: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rewardWrap: {
    width: width,
    backgroundColor: '#FFFFFF',
    paddingLeft: 35,
    paddingRight: 35
  },
  rewardContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rewardOption: {
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    marginLeft:16,
    marginTop: 27
  },
  activeOption: {
    borderWidth: 1,
    borderColor: '#DB7B67',
    backgroundColor: '#DB7B67'
  },
  rewardButton: {
    width:143,
    height:38.5,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#ff1744',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  rewardText: {
    fontSize: 16,
    color:'#ff1744'
  },
  textOuter: {
    fontSize: 18,
    color: '#666'
  },
  textInner: {
    fontSize: 24,
    color: '#ff1744'
  }

});
// const App = CodePush( codePushOptions )( ChooseDesk );
export default ChooseDesk;
