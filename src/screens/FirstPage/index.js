import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Platform ,Dimensions,PanResponder,InteractionManager, Modal} from 'react-native';
import { connect } from 'react-redux'
import * as Progress from 'react-native-progress';
import { toastShort } from '../../common/ToastUtil';
import { createAction, NavigationActions, Storage } from '../../utils'
import { bindTable, getOrderInfoByTableNumber, menuSyncArticleInfo } from '../../services/api';
import { picData } from '../../common/picData'

var {height, width} = Dimensions.get('window');
@connect(({ homeStatus, router, data }) => ({ homeStatus, router, data }))
class FirstPage extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
      gesturesEnabled: false
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      progress:0
    };
    this.totalData = []
  }


  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      //onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: (evt, gestureState) => this._handlePanResponderMove(evt, gestureState),
      onPanResponderRelease: (evt, gestureState) => this._handlePanResponderEnd(evt, gestureState),
      //onPanResponderTerminate: (evt, gestureState) =>this._handlePanResponderEnd(evt, gestureState),
    });

  }



  async getTempPicData() {
    let { isTempCart } = this.props.homeStatus
    let tempPicData = await Storage.get('tempPicData')
    let posPlusType = await Storage.get('posPlusType')
    if (tempPicData && !isTempCart) {
      this.props.dispatch(createAction('data/upDate')(tempPicData))
      this.props.dispatch(createAction('homeStatus/isPosPlusType')(posPlusType))
    }
  }

  componentDidMount() {
    let { isTempCart } = this.props.homeStatus

    InteractionManager.runAfterInteractions(() => {
      // ...耗时较长的同步执行的任务...
      this.getTempPicData()

    });

  }
  /*getMenuSyncArticleInfo(){
    if (!isLink) {
      toastShort('与pos端断开连接，请检查网络')
      return false
    }
    let that = this
    let param = {
      ppid: (new Date()).getTime()
    }
    pomelo.request(menuSyncArticleInfo, param, function(result) {
      console.log("menuSyncArticleInfo",result);
      /!*let url = 'http://106.15.11.6:3000'
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
      })*!/
      if (result.code == 200 && result.success) {
        that.setState({
          loading: false
        })
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

  }*/
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


  _handlePanResponderMove(e,gs){
    //console.log("eeee",gs.dx)
  }
  _handlePanResponderEnd(e, gs){
    if(gs.dx < -20){
      this.props.dispatch(NavigationActions.navigate({ routeName: 'home' }))
    }
  }
  render() {
    return (
      <View style={{flex:1}}
            {...this._panResponder.panHandlers}
      >
        <Image source={require('../../img/others/firstPage.jpg')} style={{height:height,width:width}}/>
        <TouchableOpacity
          style={{width:80,height:40,position:'absolute',top:60,right:40,backgroundColor:'rgba(0,0,0,0)'}}
          onPress={this.goToHome.bind(this)}
        >
        </TouchableOpacity>
        <Modal
          visible={this.state.loading}
          transparent={true}
          animationType={'fade'}//none slide fade
          onRequestClose={()=>this.setState({loading:false})}
        >
          <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.7)',alignItems:'center',justifyContent:'center'}}>
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

      </View>

    );
  }
  goToHome(){
    this.props.dispatch(NavigationActions.navigate({ routeName: 'home' }))
  }
}



const styles = StyleSheet.create({

});

export default FirstPage;
