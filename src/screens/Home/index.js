import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Platform, Dimensions,FlatList, Modal} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { createAction, NavigationActions } from '../../utils'
import { connect } from 'react-redux';
import Data from '../../common/data';
import Detail from './Detail';
import { bindTable, getOrderInfoByTableNumber,menuSyncArticleInfo, newPushOrder } from '../../services/api';
import { picData,orderData } from '../../common/picData'
var {height, width} = Dimensions.get('window');
@connect(({ homeStatus, router, data }) => ({ homeStatus, router, data }))
class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      gesturesEnabled: false,
      header: null
    };
  };
  constructor (props){
    super(props)
    this.state = {
      visibility: false,
      show: false,
      active: 0,
    }
    this.picData = this.props.data.data
  }

  componentDidMount() {
  }

  jump(backData){
    this.setState({
      active: backData.num
    })
    if(backData.num < 4) {
      this.refs.navScrollView.scrollTo({x: 0, y: 0, animated: false})
    } else {
      this.refs.navScrollView.scrollToEnd({animated: false})
    }
    let offsetX = backData.picIndex * width
    this.refs.contentScrollView.scrollTo({x:offsetX ,y:0,animated:false})
  }

  goToSearch() {
    const  {navigation} = this.props;

    navigation.navigate('search',{callback:(backData) => {this.jump(backData)}})
  }

  setActive(i){
    this.setState({
      active: i,
    })
    this.upDatePage(i)
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
  upDatePage(i) {
    var getIndex = this.getArrIndex(this.picData,{num:i});
    let offsetX = getIndex * width
    this.refs.contentScrollView.scrollTo({x:offsetX ,y:0,animated:false})
  }
  render() {
    let currentTabStyle = {
      color: '#CCCCCC',
    };
    let border = {}
    return (
     <View style={{flex:1}}>
       <View style={{ backgroundColor: '#152A45',paddingTop:24,height:64,flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
         <TouchableOpacity
           onPress={() => {this.props.dispatch(NavigationActions.back())}}
           style={{position:'absolute',top:32,left:20,}}
         >
           <Image source={require('../../img/others/home.png')} style={{width:25,height:25}}/>
         </TouchableOpacity>
         <Image source={require('../../img/others/logo.png')} style={{width:84,height:37}}/>
         <View style={{flexDirection:'row',position:'absolute',top:32,right:30,}}>
           <TouchableOpacity onPress={() => {this.resetToChoose()}}>
             <Image source={require('../../img/others/kaitai.png')} style={{width:25,height:25,marginRight:28}}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => {this.goToSearch()}}>
             <Image source={require('../../img/others/search2.png')} style={{width:25,height:25}}/>
           </TouchableOpacity>
         </View>
       </View>
       {/*<Text onPress={this.isShow.bind(this)}>首页</Text>*/}
       {/*<Text onPress={this.noShow.bind(this)}>tab</Text>*/}
       <View style={{width:width,height:51, backgroundColor:'#E5EAF0',flexDirection:'row'}}>
         <TouchableOpacity
           style={{width:60,alignItems:'center',justifyContent:'center'}}
           onPress = {() => {this.refs.navScrollView.scrollTo({x: 0, y: 0, animated: true})}}
         >
           <Image source={require('../../img/others/left.png')} style={{width:26,height:26}}/>
         </TouchableOpacity>
         <ScrollView
           ref="navScrollView"
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           contentContainerStyle = {styles.scrollView}
         >
           {
             Data.map((value,index) => {
               let num = 0
               this.props.data.orderData[index].list.length>0 && this.props.data.orderData[index].list.map((v,k) => {
                 num += v.count
               })
               if( this.state.active == index) {
                 currentTabStyle = {
                   color: '#DB7B67',
                   fontSize: 24
                 }
                 border = {
                   borderBottomWidth:2,
                   borderColor:'#DB7B67'
                 }
               }else{
                 currentTabStyle = {
                   color: '#152A45'
                 }
                 border = {
                   borderBottomWidth:0,
                   borderColor:'#DB7B67'
                 }
               }
               return (
                 <TouchableOpacity key={index} style={[styles.title,border]} onPress={() => this.setActive(index)}>
                   <Text style={[styles.titTex,currentTabStyle]}>{value.className}</Text>
                   {num > 0 && (
                     <View style={{width:16,height:16,backgroundColor:'red',position:'absolute',top:5,right:0,justifyContent:'center',alignItems:'center',borderRadius:8}}>
                       <Text style={{color:'#fff',fontSize:10}}>{num}</Text>
                     </View>
                   )}
                 </TouchableOpacity>
               )
             })
           }
         </ScrollView>
         <TouchableOpacity
           style={{width:60,alignItems:'center',justifyContent:'center'}}
           onPress = {() => {this.refs.navScrollView.scrollToEnd({animated: true})}}
         >
           <Image source={require('../../img/others/right.png')} style={{width:26,height:26}}/>
         </TouchableOpacity>
       </View>
       {this.renderTabs()}
       {this.shopCart()}
       <Modal
         visible={this.state.visibility}
         transparent={true}
         animationType={'fade'}//none slide fade
         onRequestClose={()=>this.setState({visibility:false})}
       >
         <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center',}}>
           <View style={{width:width*0.8, height:300,backgroundColor:'#fff',borderRadius:10,overflow: 'hidden'}}>
            <View style={{paddingTop:50,paddingLeft:50}}>
              <Text style={{fontSize:22}}>还未选取桌号！</Text>
            </View>
            <View style={{height:40,position:'absolute',left:0,bottom:0,flexDirection:'row'}}>
              <TouchableOpacity
                style={{width:width*0.4,backgroundColor:'#E5EAF0',justifyContent:'center',alignItems:'center'}}
                onPress={()=>this.setState({visibility:false})}
              >
                <Text style={{fontSize:22,color:'#152A45'}}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{width:width*0.4,backgroundColor:'#DB7B67',justifyContent:'center',alignItems:'center'}}
                onPress={this.goBackChoose.bind(this)}
              >
                <Text style={{fontSize:22,color:'#fff'}}>去选位</Text>
              </TouchableOpacity>
            </View>
           </View>
         </View>
       </Modal>
     </View>
    );
  }
  _keyExtractor = (item, index) => item.picPath;
  renderTabs (){
    let { show } = this.props.homeStatus
    //console.log('this.picData',this.picData)
    if(this.state.show) {
      return (
        <View>
          <Text>首页</Text>
        </View>
      )
    }else{
      return (
        <View style={{flex:1}}>
          <ScrollView
            ref="contentScrollView"
            horizontal={true}
            pagingEnabled={true}
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd= {this.onMomentumScrollEnd.bind(this)}
            onScroll={this.onScroll.bind(this)}
          >
            <FlatList
              data={this.picData}
              keyExtractor={this._keyExtractor}
              horizontal={true}
              renderItem={({item,index}) => <Detail  Item={item} Index={index} upDateData={this.upDateData.bind(this)}/>}
            />
          </ScrollView>
        </View>
      )
    }
  }
  shopCart() {
    let count = 0
    this.props.data.orderData.map((v,i) => {
      v.list.length > 0 && v.list.map((m,k) =>{
        count += m.count
      })
    })
    if(count > 0) {
      return(
        <View style={{height:49,position:'absolute',left:0,bottom:0,flexDirection:'row'}}>
          <View style={{width:460,backgroundColor:'#E5EAF0',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../img/others/bottomLogo.png')} style={{width:84,height:37,marginRight:20}}/>
            <Text style={{fontSize:22,color:'#152A45'}}>H.B.I 新生活方式</Text>
          </View>
          <TouchableOpacity
            style={{width:308,backgroundColor:'#DB7B67',flexDirection:'row',justifyContent:'center',alignItems:'center'}}
            onPress={this.goToOrderPage.bind(this)}
          >
            <View style={{flexDirection:'row',marginRight:50,alignItems:'center'}}>
              <Text style={{fontSize:14,color:'#fff'}}>共</Text>
              <Text style={{fontSize:26,color:'#fff',marginLeft:15,marginRight:15}}>{count}</Text>
              <Text style={{fontSize:14,color:'#fff'}}>份</Text>
            </View>
            <Text style={{fontSize:22,color:'#fff'}}>去下单</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <Image source={require('../../img/others/shopCart.png')} style={{width:80,height:70,position:'absolute',left:40,bottom:180}}/>
      )
    }
  }
  isShow (){
    this.props.dispatch(createAction('homeStatus/isShow')())
  }
  noShow (){
    this.props.dispatch(createAction('homeStatus/noShow')())
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.homeStatus.show !== this.state.show) {
      this.setState({show: nextProps.homeStatus.show})
    }
    if (nextProps.data.data !== this.props.data.data) {
      return true
    }
  }

  onMomentumScrollEnd(e){
    // 求出水平方向上的偏移量
    var offSetX = e.nativeEvent.contentOffset.x;
    // 计算当前页码
    var currentPage = parseInt(offSetX / width);
    // 重新绘制UI
    this.setState({
      active: this.picData[currentPage].num
    })
     let X = this.picData[currentPage].num * 70
    if(X < 450){
      this.refs.navScrollView.scrollTo({x: X, y: 0, animated: true})
    }
  }
  onScroll(e){
    //console.log('onScroll:'+e.nativeEvent.contentOffset.x);
  }

  upDateData(Item,Index){
    this.picData.splice(Index,1,Item);
    this.props.dispatch(createAction('data/upDate')(this.picData))
  }

  goToOrderPage(){
    let { seatInfo } = this.props.homeStatus
    if(seatInfo.isChoose) {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'orderPage' }))
    } else {
      this.setState({
        visibility: true
      })
    }
  }

  goBackChoose() {
    this.props.dispatch(createAction('homeStatus/isTempCart')(true))
    this.setState({
      visibility: false
    })
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Root'}),
      ]
    })
    this.props.navigation.dispatch(resetAction)
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
  scrollView: {
    height: 51,
  },
  title: {
    //width: 80,
    height: 51,
    justifyContent:'center',
    alignItems:'center',
  },
  titTex: {
    paddingLeft:15,
    paddingRight:15,
    fontSize: 20,
    color: '#152A45'
  }
});

export default Home;
