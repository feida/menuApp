/**
 * Created by chintec on 2018/1/25.
 */
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Platform ,Dimensions,FlatList,TouchableHighlight,Modal
} from 'react-native';
import { connect } from 'react-redux';
import { createAction, NavigationActions } from '../../utils'
import { getUnitListByArticleId } from '../../services/api';
import { toastShort } from '../../common/ToastUtil';
var {height, width} = Dimensions.get('window');
@connect(({ homeStatus, router, data }) => ({ homeStatus, router, data }))
class Detail extends Component {
  constructor (props){
    super(props)
    this.state = {
      tempData: '',
      visible: false,
      i:'',
      k:'',
      peopleArray:[],
      chooseUnit:{}
    }
    this.orderData = this.props.data.orderData
  }
  plus(v,k,i) {
    let { Item,Index, upDateData} = this.props
    let that = this
    if( v.article_unit && v.article_unit == '5') {
      if (!global.isLink) {
        toastShort('与pos端断开连接，请检查网络')
        return false
      }
      let param = {
        articleId: v.id,
      }
      pomelo.request(getUnitListByArticleId, param, function(result) {
        console.log("getUnitListByArticleId",result);
        if(result.code == 200 && result.success && result.data && result.data.length > 0) {
          result.data.map((a,b) => {
            if(a.details && a.details.length > 0) {
              a.details.map((m,n) => {
                m.active = false
              })
              that.setState({
                tempData: v,
                visible: true,
                peopleArray: a.details,
                i: i,
                k: k
              })
            }
          })

        } else {
          toastShort(result.msg);
        }

      });
      return
    }
    v.count ++
    let temp = {
      name:v.name,
      price:v.price,
      article_family_id: v.article_family_id,
      id: v.id,
      discount: v.discount,
      fans_price: v.fans_price,
      count:v.count,
      picIndex:i,
      cuisineIndex:k,
      num: Item.num
    }
    if(this.orderData[Item.num].list.length==0){
      this.orderData[Item.num].list.push(temp)
    }else {
      let flag = true
      this.orderData[Item.num].list.map((value,index) =>{
        if(value.name == v.name){
          value.count = v.count
          flag= false
          return false;
        }
        return true
      })
      if (flag){
        this.orderData[Item.num].list.push(temp)
      }
    }
    this.props.dispatch(createAction('data/upDateOrderData')(this.orderData))
    upDateData(Item,Index)
  }
  sub(v,k,i) {
    let { Item,Index, upDateData} = this.props

    if( v.article_unit && v.article_unit == '5') {
      return
    }
    if (v.count > 0) {
      v.count --
    }
    this.orderData[Item.num].list.map((value,index) =>{
      if(value.name == v.name){
        value.count = v.count
        //return false;
      }
      if(value.count < 1){
        this.orderData[Item.num].list.splice(index,1)
      }
      return true
    })

    this.props.dispatch(createAction('data/upDateOrderData')(this.orderData))
    upDateData(Item,Index)
  }
  render() {
    let { Item,Index } = this.props
    let { posPlusType } = this.props.homeStatus
    let  backgroundColor = Item.color ? '#152a45' : '#fff'
    let list = Item.cuisine.map((value,k) => {
      let color = value.colorFlag === 1 ? '#142A45' : '#CCAA1F'
      let plusImg = value.colorFlag === 1 ? require('../../img/others/plus.png') : require('../../img/others/plus1.png')
      let subImg = value.colorFlag === 1 ? require('../../img/others/sub.png') : require('../../img/others/sub1.png')
      if(value.is_empty == 1 || value.current_working_stock == 0) {
        return null
      } else if(value.status == 1) {
        return (
          <View key= {k} style={{width:250,height:68,position:'absolute',top:value.top,left:value.left,zIndex:1,backgroundColor:'rgba(0,0,0,0)'}}>
            <View style={{height:38,flexDirection:'row',justifyContent:'flex-start',}}>
              <Text style={{fontSize:26,color: color}}>￥{value.price}/</Text>
              <Text style={{fontSize:14,color: color,marginRight:8,marginTop:12}}>{value.unit}</Text>
              {value.gram ? (<Text style={{fontSize:14,color: color,marginRight:8,marginTop:8}}>({value.gram}g)</Text>) : null}
              {/*{ (posPlusType == 0 && value.fans_price > 0) || value.discount < 100 ? (<Text style={{textDecorationLine:'line-through', fontSize:16,color:'#999',marginTop:8}}>￥{value.history}</Text>) : null}*/}
            </View>
            <View style={{alignItems:'flex-start', }}>
              <View style={{width:100,flexDirection:'row',alignItems:'center'}}>
                {
                  value.count > 0 ?
                    (<View style={{flexDirection:'row',alignItems:'center'}}>
                      {value.article_unit && value.article_unit == '5' ?
                        (<View>
                          <Image source={require('../../img/others/sub3.png')} style={{width:30,height:30}}/>
                        </View>)
                        :
                        (<TouchableOpacity onPress={this.sub.bind(this,value,k,Index)}>
                          <Image source={subImg} style={{width:30,height:30}}/>
                        </TouchableOpacity>)
                      }
                      <View style={{width:40,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:16,color: color,}}>{value.count}</Text>
                      </View>
                    </View>)
                    :
                    (<View style={{width:70}}></View>)
                }
                <TouchableOpacity onPress={this.plus.bind(this,value,k,Index)}>
                  <Image source={plusImg} style={{width:30,height:30}}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
      } else if(value.status == 2) {
        return (
          <View key= {k} style={{width:180,height:30,position:'absolute',top:value.top,left:value.left,zIndex:1,backgroundColor:'rgba(0,0,0,0)',flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{height:30,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
              <Text style={{fontSize:20,color: color}}>￥{value.price}/</Text>
              <Text style={{fontSize:12,color: color,marginRight:2,marginTop:8}}>{value.unit}</Text>
              {/*{(posPlusType == 0 && value.fans_price > 0) || value.discount < 100 ? (<Text style={{textDecorationLine:'line-through', fontSize:16,color:'#999',marginTop:5}}>￥{value.history}</Text>) : null}*/}
            </View>
            <View style={{alignItems:'flex-start'}}>
              <View style={{width:100,flexDirection:'row',alignItems:'center'}}>
                {
                  value.count > 0 ?
                    (<View style={{flexDirection:'row',alignItems:'center'}}>
                      {value.article_unit && value.article_unit == '5' ?
                      (<View>
                      <Image source={require('../../img/others/sub3.png')} style={{width:30,height:30}}/>
                    </View>)
                      :
                      (<TouchableOpacity onPress={this.sub.bind(this,value,k,Index)}>
                      <Image source={subImg} style={{width:30,height:30}}/>
                    </TouchableOpacity>)
                      }
                      <View style={{width:40,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:16,color: color,}}>{value.count}</Text>
                      </View>
                    </View>)
                    :
                    (<View style={{width:70}}></View>)
                }
                <TouchableOpacity onPress={this.plus.bind(this,value,k,Index)}>
                  <Image source={plusImg} style={{width:30,height:30}}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
      } else if(value.status == 3) {
        return (
          <View key= {k} style={{width:185,height:30,position:'absolute',top:value.top,left:value.left,zIndex:1,backgroundColor:'rgba(0,0,0,0)',flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{height:30,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
              <Text style={{fontSize:18,color: color}}>￥{value.price}/</Text>
              <Text style={{fontSize:10,color: color,marginRight:2,marginTop:8}}>{value.unit}</Text>
              {/*{(posPlusType == 0 && value.fans_price > 0) || value.discount < 100 ? (<Text style={{textDecorationLine:'line-through', fontSize:16,color:'#999',marginTop:5}}>￥{value.history}</Text>) : null}*/}
            </View>
            <View style={{alignItems:'flex-start'}}>
              <View style={{width:100,flexDirection:'row',alignItems:'center'}}>
                {
                  value.count > 0 ?
                    (<View style={{flexDirection:'row',alignItems:'center'}}>
                      {value.article_unit && value.article_unit == '5' ?
                        (<View>
                          <Image source={require('../../img/others/sub3.png')} style={{width: 30, height: 30}}/>
                        </View>)
                        :
                        (<TouchableOpacity onPress={this.sub.bind(this, value, k, Index)}>
                          <Image source={subImg} style={{width: 30, height: 30}}/>
                        </TouchableOpacity>)
                      }
                      <View style={{width:40,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:16,color: color,}}>{value.count}</Text>
                      </View>
                    </View>)
                    :
                    (<View style={{width:70}}></View>)
                }
                <TouchableOpacity onPress={this.plus.bind(this,value,k,Index)}>
                  <Image source={plusImg} style={{width:30,height:30}}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
      } else if(value.status == 4) {
        return (
          <View key= {k} style={{width:250,height:93,position:'absolute',top:value.top,left:value.left,zIndex:1,backgroundColor:'rgba(0,0,0,0)'}}>
            <View style={{height:63,flexDirection:'row',justifyContent:'flex-start'}}>
              <Text style={{fontSize:26,color: color}}>￥{value.price}/</Text>
              <Text style={{fontSize:14,color: color,marginRight:8,marginTop:12}}>{value.unit}</Text>
              {/*{value.amount != '' ? (<Text style={{fontSize:14,color: color,marginRight:8,marginTop:8}}>[{value.amount}]</Text>) : null}*/}
              {(posPlusType == 0 && value.fans_price > 0) || value.discount < 100 ? (<Text style={{textDecorationLine:'line-through', fontSize:16,color:'#999',marginTop:5}}>￥{value.history}</Text>) : null}
            </View>
            <View style={{alignItems:'flex-start'}}>
              <View style={{width:100,flexDirection:'row',alignItems:'center'}}>
                {
                  value.count > 0 ?
                    (<View style={{flexDirection:'row',alignItems:'center'}}>
                      <TouchableOpacity onPress={this.sub.bind(this,value,k,Index)}>
                        <Image source={require('../../img/others/sub.png')} style={{width:30,height:30}}/>
                      </TouchableOpacity>
                      <View style={{width:40,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:16,color: color,}}>{value.count}</Text>
                      </View>
                    </View>)
                    :
                    (<View style={{width:70}}></View>)
                }
                <TouchableOpacity onPress={this.plus.bind(this,value,k,Index)}>
                  <Image source={require('../../img/others/plus.png')} style={{width:30,height:30}}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
      } else if(value.status == 5) {
        return (
          <View key= {k} style={{width:205,height:30,position:'absolute',top:value.top,left:value.left,zIndex:1,backgroundColor:'rgba(0,0,0,0)',flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{justifyContent:'center',alignItems:'flex-start'}}>
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18,color: color}}>￥{value.price}/</Text>
                <Text style={{fontSize:10,color: color,marginRight:2,marginTop:8}}>{value.unit}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                {/*{value.amount != '' ? (<Text style={{fontSize:10,color: color,marginTop:8}}>[{value.amount}]</Text>) : null}*/}
                {(posPlusType == 0 && value.fans_price > 0) || value.discount < 100 ? (<Text style={{textDecorationLine:'line-through', fontSize:16,color:'#999',marginTop:5}}>￥{value.history}</Text>) : null}
              </View>
            </View>
            <View style={{alignItems:'flex-start'}}>
              <View style={{width:100,flexDirection:'row',alignItems:'center'}}>
                {
                  value.count > 0 ?
                    (<View style={{flexDirection:'row',alignItems:'center'}}>
                      <TouchableOpacity onPress={this.sub.bind(this,value,k,Index)}>
                        <Image source={require('../../img/others/sub.png')} style={{width:30,height:30}}/>
                      </TouchableOpacity>
                      <View style={{width:40,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:16,color: color,}}>{value.count}</Text>
                      </View>
                    </View>)
                    :
                    (<View style={{width:70}}></View>)
                }
                <TouchableOpacity onPress={this.plus.bind(this,value,k,Index)}>
                  <Image source={require('../../img/others/plus.png')} style={{width:30,height:30}}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
      }
    })
    return (
      <View style={{width: width,position:'relative',backgroundColor: '#fff'}}>
        <Image style={{width: width,height:909}} source={Item.picPath}/>
        <View style={{width: width,height:909,position:'absolute',left:0,top:0,zIndex:1,backgroundColor:'rgba(255,255,255,0)'}}>
          {list}
        </View>
        <Modal
          visible={this.state.visible}
          transparent={true}
          animationType={'fade'}//none slide fade
          onRequestClose={()=>this.setState({visible:false})}
        >
          <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:300,height:200, backgroundColor:'#fff',borderRadius:8,alignItems:'center'}}>
              <TouchableOpacity onPress={()=>this.close()} style={{width:30,height:30,borderRadius:15,position:'absolute',top:-15,right:-15}}>
                <Image source={require('../../img/others/close.png')} style={{width:30,height:30}}/>
              </TouchableOpacity>
              <View style={{width:300,height: 40,backgroundColor:'#132843',marginTop:15,alignItems:'center',justifyContent:'center' }}>
                <Text style={{fontSize:22,color:'#CBAA1F'}}>{this.state.tempData.name}</Text>
              </View>
              <View style={{width:260,flexDirection:'row',justifyContent:'space-between'}}>
                { this.state.peopleArray.length > 0 && this.state.peopleArray.map((item, key) => {
                  //let itemWidth = (300 - 60-(33*this.state.peopleArray.length) ) / this.state.peopleArray.length;
                  let itemWidth = 110;
                  let itemHeight = 50;
                  if (item.active) {
                    return (
                      <TouchableOpacity key={key} style={[styles.rewardOption, styles.activeOption , {width: itemWidth, height: itemHeight}]}
                                        onPress={() => this.peopleNum(item, key)}>
                        <Text style={{color: '#fff',fontSize:20}}>{item.name}</Text>
                        {item.price > 0 && <Text style={{color: '#fff',fontSize:16}}> +{item.price}元</Text>}
                      </TouchableOpacity>
                    )
                  } else {
                    return (
                      <TouchableOpacity key={key} style={[styles.rewardOption, {width: itemWidth, height: itemHeight}]}
                                        onPress={() => this.peopleNum(item, key)}>
                        <Text style={{color: '#ADADAD',fontSize:20}}>{item.name}</Text>
                        {item.price > 0 && <Text style={{color: '#ADADAD',fontSize:16}}>+{item.price}元</Text>}
                      </TouchableOpacity>
                    )
                  }
                })}
              </View>


              <TouchableOpacity
                style={{width:260,height:35,marginTop:20,backgroundColor:'#132943',borderRadius:5,alignItems:'center',justifyContent:'center'}}
                onPress={() => this.addCar()}
              >
                <Text style={{fontSize:20,color:'#fff'}}>加入购物车</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  peopleNum(item, index){
    let peopleArray = this.state.peopleArray
    let resList = []
    peopleArray.map((e, i) => {
      if (i == index) {
        e.active = true
      } else {
        e.active = false
      }

      resList.push(e)
    })

    this.setState({
      peopleArray: resList,
      chooseUnit: item,
    })
  }

  addCar() {
    let { Item,Index,upDateData } = this.props
    let tempData = this.state.tempData
    let chooseUnit = this.state.chooseUnit
    if (!chooseUnit.name) return
    let i = this.state.i
    let k = this.state.k
    let unit_details = []
    unit_details.push(chooseUnit.id)
    tempData.count ++
    let temp = {
      name:tempData.name + "(" + chooseUnit.name + ")",
      price:tempData.price + chooseUnit.price,
      article_family_id: tempData.article_family_id,
      id: tempData.id,
      discount: tempData.discount,
      fans_price: tempData.fans_price,
      article_unit: tempData.article_unit,
      unit_details: unit_details,
      count:1,
      picIndex:i,
      cuisineIndex:k,
      num: Item.num
    }
    this.orderData[Item.num].list.push(temp)
    this.props.dispatch(createAction('data/upDateOrderData')(this.orderData))
    upDateData(Item,Index)
    this.setState({
      tempData: '',
      visible: false,
      peopleArray: [],
      i: '',
      k: '',
      chooseUnit:{}
    })
  }

  close() {
    this.setState({
      tempData: '',
      visible: false,
      peopleArray: [],
      i: '',
      k: '',
      chooseUnit:{}
    })
  }

  componentDidMount(){

  }
}

const styles = StyleSheet.create({
  statusBarStyle: {
    marginTop: Platform.OS === 'ios' ? 24 : 0,
    height: 40
  },
  rewardOption: {
    flexDirection:'row',
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    marginLeft:16,
    marginTop: 27
  },
  activeOption: {
    borderWidth: 1,
    borderColor: '#CBAA1F',
    backgroundColor: '#CBAA1F'
  },

});

export default Detail;
