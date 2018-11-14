import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Platform, Dimensions,FlatList,Modal} from 'react-native';
import QRCode from 'react-native-qrcode';
import { toastShort } from '../../common/ToastUtil';
import { createAction, NavigationActions, Storage } from '../../utils'
import { connect } from 'react-redux';
import { picData, orderData} from '../../common/picData';
import { bindTable, getOrderInfoByTableNumber, menuSyncArticleInfo, getVvidByTableNumber, getOrderStateByTableNumber } from '../../services/api';
var {height, width} = Dimensions.get('window');
let a = require('../../img/loading/002.png')
const loadingImg = {
  a: require('../../img/loading/001.png'),
  b: require('../../img/loading/002.png'),
  c: require('../../img/loading/003.png'),
  d: require('../../img/loading/004.png'),
  e: require('../../img/loading/005.png')
}
@connect(({ homeStatus, router, data }) => ({ homeStatus, router, data }))
class AlreadyOrder extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      gesturesEnabled: false,
      header: null
    };
  };
  constructor (props){
    super(props)
    this.state = {
      orderData: [],
      flag:1,
      loading:false,
      visibility:false,
      totalPrice:0,
      totalCount:0,
      vvid:'',
      isPay: true,
      servicePrice: 0,
      customerCount: 0
    }
  }

  getOrder() {
    let { seatInfo } = this.props.homeStatus
    let that = this
    let param = {
      tableNumber: seatInfo.seatNum,
    }
    pomelo.request(getOrderInfoByTableNumber, param, function(result) {
      console.log("getOrderInfoByTableNumber",result);
      if(result.code == 200 && result.success && result.data) {
        let data = result.data
        let arr = data.order_item_list.concat(data.childreorder_item_list)
        that.props.dispatch(createAction('homeStatus/setAlreadyData')(arr))
        that.setState({
          orderData: arr,
          totalPrice: data.payOrderMoney.toFixed(2),
          totalCount: data.articleCount,
          servicePrice: data.servicePrice,
          customerCount: data.customerCount,
        })
      } else if( result.code == 200 && result.msg) {
        toastShort(result.msg)
      }
    });
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.getOrder()

  }


  render() {
    let imgSource = loadingImg.a
    if(this.state.flag === 2) {
      imgSource = loadingImg.b
    } else if(this.state.flag === 3) {
      imgSource = loadingImg.c
    } else if(this.state.flag === 4) {
      imgSource = loadingImg.d
    } else if(this.state.flag === 5) {
      imgSource = loadingImg.e
    }
    let { seatInfo } = this.props.homeStatus
    let list = this.state.orderData && this.state.orderData.map((m,k) => {
      return(
        <View key={k} style={{height:48,width:(width-120)/2,flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{width:140,fontSize:14, color:'#152A45'}}>{m.article_name}</Text>
            <Text style={{fontSize:14, color:'#152A45'}}>￥{m.unit_price}</Text>
          </View>
          <View style={{width:100,justifyContent:'center',alignItems:'flex-end',}}>
            <Text style={{fontSize:16,color: '#152A45',}}>{m.count} 份</Text>
          </View>
        </View>
      )
    })
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
        <View style={{ backgroundColor: '#152A45',paddingTop:24,height:64, justifyContent:'center',alignItems:'center'}}>
          <Image source={require('../../img/others/logo.png')} style={{width:84,height:37}}/>
          <TouchableOpacity
            style={{position:'absolute',top:32,right:20,}}
            onPress={() => {this.resetToChoose()}}
          >
            <Image source={require('../../img/others/kaitai.png')}
                   style={{width:24,height:24,}}
            />
          </TouchableOpacity>
        </View>
        <View style={{height:64,paddingLeft:20,paddingRight:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#E5EAF0'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image style={{width:30,height:30,marginRight:10}} source={require('../../img/others/finish.png')}/>
            <Text style={{fontSize:24, color:'#152A45'}}>订单详情</Text>
            <Text style={{fontSize:18, color:'#152A45',marginLeft:20}}>{seatInfo.seatNum}号桌</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:24, color:'#152A45'}}>￥{this.state.totalPrice}</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:58}}>
              <Text style={{fontSize:18, color:'#152A45'}}>共计</Text>
              <Text style={{fontSize:24, color:'#152A45',marginLeft:10,marginRight:10}}>{this.state.totalCount}</Text>
              <Text style={{fontSize:18, color:'#152A45'}}>份</Text>
            </View>
          </View>
        </View>
        <View style={{flex:1}}>
          <ScrollView>
            <View style={{paddingLeft:20,paddingRight:20}}>

              <View style={{width:width-40,borderTopWidth:1,borderBottomWidth:1,borderColor:'#eee',flexWrap: 'wrap',flexDirection:'row',justifyContent:'space-between'}}>
                {list}
              </View>
              {this.state.customerCount > 0 &&
              (<View style={{width:width-40,borderTopWidth:1,borderBottomWidth:1,borderColor:'#eee',flexWrap: 'wrap',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{height:48,width:(width-120)/2,flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{width:140,fontSize:14, color:'#152A45'}}>服务费</Text>
                    <Text style={{fontSize:14, color:'#152A45'}}>￥{(this.state.servicePrice/this.state.customerCount).toFixed(0)}</Text>
                  </View>
                  <View style={{width:100,justifyContent:'center',alignItems:'flex-end',}}>
                    <Text style={{fontSize:16,color: '#152A45',}}>{this.state.customerCount}位</Text>
                  </View>
                </View>
              </View>)
              }
            </View>
          </ScrollView>
        </View>
        {
          this.state.isPay ?
            (
              <View style={{height:49,position:'absolute',left:0,bottom:0,flexDirection:'row'}}>
                <TouchableOpacity
                  style={{width:460,backgroundColor:'#E5EAF0',flexDirection:'row',justifyContent:'center',alignItems:'center'}}
                  onPress={this.goBack.bind(this)}
                >
                  <Text style={{fontSize:20,color:'#152A45'}}>继续点餐</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{width:308,backgroundColor:'#DB7B67',flexDirection:'row',justifyContent:'center',alignItems:'center'}}
                  onPress={this.payMent.bind(this)}
                >
                  <Text style={{fontSize:20,color:'#fff'}}>买单</Text>
                </TouchableOpacity>
              </View>
            )
            :
            (
              <TouchableOpacity onPress={() => {this.resetToChoose()}} style={{width: width,height:49,position:'absolute',left:0,bottom:0,justifyContent:'center',alignItems:'center',backgroundColor:'#DB7B67'}}>
                <Text style={{fontSize:20,color:'#fff'}}>开台</Text>
              </TouchableOpacity>
            )
        }

        <Modal
          visible={this.state.visibility}
          transparent={true}
          animationType={'fade'}//none slide fade
          onRequestClose={()=>this.setState({visibility:false})}
        >
          <TouchableOpacity activeOpacity={1} onPress={()=>this.setState({visibility:false})} style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center',}}>
            <View style={{width:width,height:438,position:'absolute',left:0,bottom:0,alignItems:'center'}}>
              <View style={{width:250,height:250,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                <QRCode
                  value={this.state.vvid}
                  size={200}
                  bgColor='#000'
                  fgColor='#fff'/>
              </View>
              <Text style={{fontSize:18,color:'#fff',marginTop:40}}>请用微信或支付宝扫码屏幕上二维码进行买单</Text>
            </View>
          </TouchableOpacity>
        </Modal>
        <Modal
          visible={this.state.loading}
          transparent={true}
          animationType={'fade'}//none slide fade
          onRequestClose={()=>this.setState({loading:false})}
        >
          <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center',}}>
            <Image source={imgSource} style={{width:496,height:416,marginTop:225}}/>
          </View>
        </Modal>
      </View>
    );
  }




  async goBack() {
    if (!global.isLink) {
      toastShort('与pos端断开连接，请检查网络')
      return false
    }
    let { data } = this.props.data
    let { seatInfo } = this.props.homeStatus
    let param = {
      tableNumber: seatInfo.seatNum
    }
    let that = this
    let tempPicData = await Storage.get('tempPicData')
    pomelo.request(getOrderStateByTableNumber, param, function(result) {
      console.log("getOrderStateByTableNumber",result);
      if(result.code == 200 && result.success && result.data) {
        let dataStr1 = JSON.stringify(orderData);
        let b = JSON.parse(dataStr1);
        that.props.dispatch(createAction('data/upDateOrderData')(b))
        if(tempPicData) {
          that.props.dispatch(createAction('data/upDate')(tempPicData))
        }
        that.props.dispatch(createAction('homeStatus/setSecondOrder')(true))
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'home'}),
          ]
        })
        setTimeout(() => {
          that.props.navigation.dispatch(resetAction)
        },1000)
      }else if( result.code == 200 && result.success && !result.data) {
        that.setState({
          isPay: false
        })
      }
    });


  }

  payMent() {
    if (!global.isLink) {
      toastShort('与pos端断开连接，请检查网络')
      return false
    }
    let { seatInfo } = this.props.homeStatus
    let that = this
    let param = {
      tableNumber: seatInfo.seatNum
    }
    pomelo.request(getOrderStateByTableNumber, param, function(result) {
      console.log("getOrderStateByTableNumber",result);
      if(result.code == 200 && result.success && result.data) {
        pomelo.request(getVvidByTableNumber, param, function(result) {
          console.log("getVvidByTableNumber",result);
          if(result.code == 200 && result.success ) {
            that.setState({
              vvid: result.data,
              visibility:true
            })
          }else if( !result.success && result.msg) {
            toastShort(result.msg)
          }
        });
      }else if( result.code == 200 && result.success && !result.data) {
        that.setState({
          isPay: false
        })
      }
    });

  }

  makeOrder() {
    this.setState({
      loading: true
    })
    let num = 1
    let interval = setInterval(() => {
      num++
      this.setState({
        flag: num
      })
      if(num > 5) {
        clearInterval(interval);
        this.setState({
          loading: false
        })
        this.props.dispatch(createAction('data/makeOrder')(true))
      }

    },200)

  }

  resetToChoose() {
    let data = {
      seatNum: 'xxx',
      showAmount: 2,
      isChoose: false
    }
    let dataStr1 = JSON.stringify(orderData);
    let b = JSON.parse(dataStr1);
    this.props.dispatch(createAction('data/upDateOrderData')(b))
    this.props.dispatch(createAction('homeStatus/setSeatInfo')(data))
    this.props.dispatch(createAction('homeStatus/setSecondOrder')(false))
    this.props.dispatch(createAction('homeStatus/setAlreadyData')([]))
    this.props.dispatch(createAction('homeStatus/setSecondOrderId')(''))
    this.props.dispatch(createAction('homeStatus/isTempCart')(false))
    this.props.dispatch(createAction('homeStatus/isPosPlusType')(0))
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Root'}),
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

}

const styles = StyleSheet.create({

});

export default AlreadyOrder;
