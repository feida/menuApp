import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Platform, Dimensions,FlatList,Modal} from 'react-native';
import { createAction, NavigationActions } from '../../utils'
import { toastShort } from '../../common/ToastUtil';
import { connect } from 'react-redux';
import { picData, orderData} from '../../common/picData';
import { bindTable, getOrderInfoByTableNumber, newPushOrder } from '../../services/api';
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
class OrderPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      gesturesEnabled: false,
      header: null
    };
  };
  constructor (props){
    super(props)
    this.state = {
      flag:1,
      loading:false,
      totalPrice:0,
      totalCount:0,
    }
    this.isClick = true
    this.orderData = this.props.data.orderData
    this.picData = this.props.data.data
  }
  componentWillMount() {
    this.computeTotal()
  }

  computeTotal(){
    let totalPrice = 0
    let totalCount = 0
    this.orderData.map((v,i) => {
      v.list.map((m,k) => {
        totalPrice += m.count * m.price
        totalCount += m.count
      })
    })
    this.setState({
      totalPrice: totalPrice.toFixed(2),
      totalCount: totalCount
    })
  }

  render() {
    let { alreadyData, seatInfo } = this.props.homeStatus
    let list = this.orderData.map((v,i) => {
      let listItem = v.list.map((m,k) => {
        return(
          <View key={k} style={{height:48,width:(width-120)/2,flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{width:140,fontSize:14, color:'#152A45'}}>{m.name}</Text>
              <Text style={{fontSize:14, color:'#152A45'}}>￥{m.price}</Text>
            </View>
            <View style={{width:100,flexDirection:'row',alignItems:'center',}}>
              <TouchableOpacity onPress={this.sub.bind(this,m,k,i)}>
                <Image source={require('../../img/others/sub2.png')} style={{width:30,height:30}}/>
              </TouchableOpacity>
              <View style={{width:40,justifyContent:'center',alignItems:'center',}}>
                <Text style={{fontSize:16,color: '#DB7B67',}}>{m.count}</Text>
              </View>
              { m.article_unit && m.article_unit == '5' ?
                (<View>
                  <Image source={require('../../img/others/plus3.png')} style={{width:30,height:30}}/>
                </View>)
                :
                (<TouchableOpacity onPress={this.plus.bind(this,m,k,i)}>
                  <Image source={require('../../img/others/plus2.png')} style={{width:30,height:30}}/>
                </TouchableOpacity>)
              }

            </View>
          </View>
        )
      })
      if(v.list.length>0){
        return (
          <View key={i} style={{paddingLeft:20,paddingRight:20}}>
            <View style={{height: 49,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{fontSize:18, color:'#DB7B67'}}>{v.className}</Text>
              <Text style={{fontSize:18, color:'#DB7B67'}}>待下单</Text>
            </View>
            <View style={{width:width-40,borderTopWidth:1,borderBottomWidth:1,borderColor:'#eee',flexWrap: 'wrap',flexDirection:'row',justifyContent:'space-between'}}>
              {listItem}
            </View>
          </View>
        )
      }
    })
    let alreadyList = alreadyData && alreadyData.length > 0 && alreadyData.map((m,k) => {
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
            <Image style={{width:30,height:30,marginRight:10}} source={require('../../img/others/detail.png')}/>
            <Text style={{fontSize:24, color:'#152A45'}}>订单确认</Text>
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
            {list}
            {
              alreadyData.length > 0 && (
                <View style={{paddingLeft:20,paddingRight:20}}>
                  <View style={{height: 49,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                    <Text style={{fontSize:18, color:'#152A45'}}>已下单</Text>
                  </View>
                  <View style={{width:width-40,borderTopWidth:1,borderBottomWidth:1,borderColor:'#eee',flexWrap: 'wrap',flexDirection:'row',justifyContent:'space-between'}}>
                    {alreadyList}
                  </View>
                </View>
              )
            }
          </ScrollView>
        </View>
        <View style={{height:49,position:'absolute',left:0,bottom:0,flexDirection:'row'}}>
          <TouchableOpacity
            style={{width:460,backgroundColor:'#E5EAF0',flexDirection:'row',justifyContent:'center',alignItems:'center'}}
            onPress={this.goBack.bind(this)}
          >
            <Text style={{fontSize:20,color:'#152A45'}}>继续点餐</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width:308,backgroundColor:'#DB7B67',flexDirection:'row',justifyContent:'center',alignItems:'center'}}
            onPress={ this.makeOrder.bind(this)}
          >
            <Text style={{fontSize:20,color:'#fff'}}>下单</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


  plus(m,k,i) {
    if( m.article_unit && m.article_unit == '5') {
      return
    }
    m.count++
    this.orderData[i].list[k].count = m.count
    this.props.dispatch(createAction('data/upDateOrderData')(this.orderData))
    this.picData[m.picIndex].cuisine[m.cuisineIndex].count = m.count
    this.props.dispatch(createAction('data/upDate')(this.picData))
    this.computeTotal()
  }
  sub(m,k,i) {
    if( m.article_unit && m.article_unit == '5') {
      this.orderData[i].list.splice(k,1)
      this.props.dispatch(createAction('data/upDateOrderData')(this.orderData))
      this.picData[m.picIndex].cuisine[m.cuisineIndex].count --
      this.props.dispatch(createAction('data/upDate')(this.picData))
      this.computeTotal()
      return
    }
    if (m.count > 0) {
      m.count --
    }
    if(m.count < 1){
      this.orderData[i].list.splice(k,1)
    }else {
      this.orderData[i].list[k].count = m.count
    }
    this.props.dispatch(createAction('data/upDateOrderData')(this.orderData))
    this.picData[m.picIndex].cuisine[m.cuisineIndex].count = m.count
    this.props.dispatch(createAction('data/upDate')(this.picData))
    this.computeTotal()
  }


  goBack() {
    this.props.dispatch(NavigationActions.back())
  }

  //下单
  makeOrder() {
    if (!this.isClick) {
      return false
    }
    this.isClick = false
    let { seatInfo, secondOrder, secondOrderId, posPlusType} = this.props.homeStatus
    let that = this
    if (!global.isLink) {
      toastShort('与pos端断开连接，请检查网络')
      this.isClick = true
      return false
    }
    let orderItems = []
    this.orderData.map((m,n) => {
      m.list.map((v,i) => {
        let type = v.article_unit && v.article_unit == '5' ? 5 : 1
        console.log('下单',v.article_unit,type)
        let temp = {
          time: new Date().getTime(),
          id: v.id,
          count: v.count,
          //type: 1,
          type: type,
          name: v.name,
          price: v.price,
          articleFamilyId: v.article_family_id,
          mealFeeNumber: 0,
          status: 0,
          discount: v.discount,
          fansPrice: v.fans_price,
          isFans: posPlusType,
          unit_details: v.unit_details
        }
        orderItems.push(temp)
      })
    })


    let param = {
      tableNumber: seatInfo.seatNum,
    }


    console.log('param',param)
    pomelo.request(getOrderInfoByTableNumber, param, function(result) {
      console.log("getOrderInfoByTableNumber",result);
      if (result.code == 200 && result.success && result.data == null) {
        let bindTableParam = {
          tableNumber: seatInfo.seatNum,
          customerCount: seatInfo.showAmount,
          afterPay: true,
          distributionModeId: 1,
          childrenOrder: null,
          remark: '',
          servicePrice: 0,
          uid: '',
        }
        console.log("111111111",);
        pomelo.request(bindTable, bindTableParam, function(bindTableResult) {
          console.log("bindTable",bindTableResult);
          if(bindTableResult.success) {
            /*let temp = null
            if(!secondOrder) {
              temp = bindTableResult.data
            }*/
            let newPushOrderParam = {
              masterOrderId: bindTableResult.data,
              childrenOrderId: null,
              orderItems: orderItems,
              mealFeePrice: 0,
              mealAllNumber: 0,
              distributionModeId: null,
              customerId: null,
              tableNumber: seatInfo.seatNum
            }
            console.log('newPushOrderParam',newPushOrderParam)
            pomelo.request(newPushOrder, newPushOrderParam, function(newPushOrderResult) {
              console.log("newPushOrder",newPushOrderResult);
              that.isClick = true
              if(newPushOrderResult.success){
                /*if(temp) {
                  that.props.dispatch(createAction('homeStatus/setSecondOrderId')(temp))
                }*/
                that.props.dispatch(NavigationActions.navigate({ routeName: 'alreadyOrder' }))
              } else if ( result1.code == 200 && newPushOrderResult.msg) {
                toastShort( newPushOrderResult.msg )
              }
            });
          } else if ( bindTableResult.code == 200 && bindTableResult.msg ) {
            that.isClick = true
            toastShort( bindTableResult.msg )
          }
        });
      } else if(result.code == 200 && result.success && result.data) {
        console.log("22222222",);
        let res = result.data.order_item_list
        if(res && res.length > 0) {
          console.log("22222222  > 0",);
          let bindTableParam1 = {
            tableNumber: seatInfo.seatNum,
            customerCount: seatInfo.showAmount,
            afterPay: true,
            distributionModeId: 1,
            childrenOrder: 1,
            remark: '',
            servicePrice: 0,
            uid: '',
          }
          pomelo.request(bindTable, bindTableParam1, function(result2) {
            console.log("bindTable",result2);
            if(result2.success) {
              let newPushOrderParam = {
                masterOrderId: result.data.id,
                childrenOrderId:result2.data,
                orderItems: orderItems,
                mealFeePrice: 0,
                mealAllNumber: 0,
                distributionModeId: null,
                customerId: null,
                tableNumber: seatInfo.seatNum
              }
              console.log('newPushOrderParam',newPushOrderParam)
              pomelo.request(newPushOrder, newPushOrderParam, function(result1) {
                console.log("newPushOrder",result1);
                that.isClick = true
                if(result1.success){
                  /*if(temp) {
                    that.props.dispatch(createAction('homeStatus/setSecondOrderId')(temp))
                  }*/
                  that.props.dispatch(NavigationActions.navigate({ routeName: 'alreadyOrder' }))
                } else if ( result1.code == 200 && result1.msg) {
                  toastShort( result1.msg )
                }

              });
            } else if ( result2.code == 200 && result2.msg ) {
              that.isClick = true
              toastShort( result2.msg )
            }
          });
        } else if( res && res.length == 0) {
          console.log("22222222  ====== 0",);
          /*let temp = null
          if(!secondOrder) {
            temp = result.data.id
          }*/
          let newPushOrderParam = {
            masterOrderId: result.data.id,
            childrenOrderId: null,
            orderItems: orderItems,
            mealFeePrice: 0,
            mealAllNumber: 0,
            distributionModeId: null,
            customerId: null,
            tableNumber: seatInfo.seatNum
          }
          console.log('newPushOrderParam',newPushOrderParam)
          pomelo.request(newPushOrder, newPushOrderParam, function(result1) {
            console.log("newPushOrder",result1);
            that.isClick = true
            if(result1.success){
              /*if(temp) {
                that.props.dispatch(createAction('homeStatus/setSecondOrderId')(temp))
              }*/
              that.props.dispatch(NavigationActions.navigate({ routeName: 'alreadyOrder' }))
            } else if ( result1.code == 200 && result1.msg) {
              toastShort( result1.msg )
            }
          });
        }
      } else if (result.code == 200 && !result.success && result.data == null) {
        console.log("33333",);
        that.isClick = true
        toastShort(result.msg);
      }

    });



  }

  resetToChoose() {
    let data = {
      seatNum: 'xxx',
      showAmount: 2,
      isChoose: false
    }
    console.log('orderData',orderData)
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

export default OrderPage;
