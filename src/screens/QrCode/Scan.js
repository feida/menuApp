/**
 * Created by chintec on 2018/2/11.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Vibration,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
  Alert
} from 'react-native';
import { getTableNumberByVvid } from '../../services/api';
import { toastShort } from '../../common/ToastUtil';

const {width, height}  = Dimensions.get('window');

// import Camera from 'react-native-camera';
import Camera, { RNCamera } from 'react-native-camera';
import ViewFinder from './ViewFinder';

//import backIcon from '../../../assets/img/backIcon.png';//返回按钮
//import scanLine from '../../../assets/img/scan_line.png';//扫描线

export default class Scan extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };
  constructor(props) {
    super(props);
    this.camera = null;
    this.state = {
      openFlash: false,
      active: false,
      fadeInOpacity: new Animated.Value(0), // 初始值
      isEndAnimation:false,//结束动画标记
      Authorization: true,
      isSucceed: true
    }
    this._goBack = this._goBack.bind(this);
    this._startAnimation = this._startAnimation.bind(this);
    this.barcodeReceived = this.barcodeReceived.bind(this);
    this.time = null
  }

  componentDidMount() {
    const {navigate,goBack,state} = this.props.navigation;
    this.time = setInterval(() => {
      this._startAnimation();
    },2500)
  }
  //开始动画，循环播放
  _startAnimation() {
    Animated.timing(this.state.fadeInOpacity, {
      toValue: 1,
      duration: 2500,
      easing: Easing.linear
    }).start(
      () => {
        this.state.fadeInOpacity.setValue(0);
      }
    );
    console.log("开始动画");
  }
  componentWillUnmount() {
    clearInterval(this.time)
    //this._startAnimation(true)
  }
  barcodeReceived(e) {
    const {navigate,goBack,state} = this.props.navigation;
// 在第二个页面,在goBack之前,将上个页面的方法取到,并回传参数,这样回传的参数会重走render方法
    let that = this
    if(e.data) {
      let param = {
        vvid: e.data
      }
      if(!this.state.isSucceed) {
        return false
      }
      pomelo.request(getTableNumberByVvid, param, function(result) {
        console.log("getTableNumberByVvid",result);
        clearInterval(that.time)
        if (result.code == 200 && result.success ) {
          let tableNumber = result.data.table_number
          if(tableNumber) {
            that.setState({
              isSucceed: false
            })
          }
          state.params.callback(tableNumber);
          goBack();
        } else if (result.msg && !result.success) {
          toastShort(result.msg)
        }
      });
    }
    console.log('eeeeeeeee',e)

  }
  //返回按钮点击事件
  _goBack() {
    const {navigate,goBack,state} = this.props.navigation;

    this.setState({
      isEndAnimation:true,
    });
    goBack();
  }

  render(){
    const {
      openFlash,
      active,
    } = this.state;
    const {navigate,goBack,state} = this.props.navigation;
    return(
      <View style={styles.allContainer}>
        {(() => {
          return (
            <RNCamera
              ref={cam => this.camera = cam}
              style={styles.cameraStyle}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              //cropToPreview={true}
              onBarCodeRead={
                this.barcodeReceived
              }
              notAuthorizedView = {
                <View>
                  {this.notAuthorizedView()}
                </View>
              }
              torchMode={openFlash ? 'on' : 'off'}>
              <View style={styles.container}>
                <TouchableOpacity activeOpacity={1} onPress={ this._goBack}>
                  <Text style={{color:'#fff',fontSize:18}}>返回</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.topContainer}>
              </View>
              <View style={{flexDirection:'row'}}>
                <View style={styles.fillView}/>
                <View style={styles.scan}>
                  <ViewFinder/>
                  <Animated.View style={[styles.scanLine, {
                    opacity: 1,
                    transform:[{
                      translateY:this.state.fadeInOpacity.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,300]
                      })
                    }]
                  }]}>
                    <View style={{width:290,height:1,backgroundColor:'green'}}></View>
                  </Animated.View>
                </View>
                <View style={styles.fillView}/>
              </View>
              <View style={styles.bottomContainer}>
                <Text
                  style={[
                    styles.text,
                    {
                      textAlign: 'center',
                      width: 260,
                      marginTop: active ? 25 : 285,
                    },
                  ]}
                  numberOfLines={2}
                >
                  将二维码放入框内，即可自动扫描
                </Text>
              </View>
            </RNCamera>
          );
        })()}
      </View>
    )
  }


  notAuthorizedView(){
    const {navigate,goBack,state} = this.props.navigation;
    return (
      <View style={{width:width,height:height,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:20}}>相机权限没打开, 请在iPad的“设置-隐私”选项中,允许访问您的摄像头!</Text>
        <TouchableOpacity style={{marginTop:80,width:100,height:60,justifyContent:'center',alignItems:'center',borderRadius:8,backgroundColor:'#DB7B67'}}
                          onPress={() => goBack()}>
          <Text style={{color:'#fff',fontSize:18}}>返回</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles =StyleSheet.create({
  allContainer:{
    flex:1,
  },
  container: {
    height:50,
    backgroundColor:'#000',
    opacity:0.5,
    paddingTop:24,
    paddingLeft:30,
    justifyContent:'center'
  },
  titleContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 15,
      },
      android: {
        paddingTop: 0,
      }
    }),
    flexDirection: 'row',
  },
  backImg: {
    marginLeft: 10,
  },
  cameraStyle: {
    //alignSelf: 'center',
    width: width,
    height: height,
  },
  flash: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 60,
  },

  text: {
    fontSize: 14,
    color: '#fff',
    marginTop:5
  },
  scanLine:{
    alignSelf:'center',
  },
  centerContainer:{
    ...Platform.select({
      ios: {
        height: 80,
      },
      android: {
        height: 60,
      }
    }),
    width:width,
    backgroundColor:'#000',
    opacity:0.5
  },
  topContainer:{
    backgroundColor:'#000',
    opacity:0.5,
    width:width,
    height:290
  },
  bottomContainer:{
    alignItems:'center',
    backgroundColor:'#000',
    alignSelf:'center',
    opacity:0.5,
    flex:1,
    width:width
  },
  fillView:{
    width:(width-300)/2,
    height:300,
    backgroundColor:'#000',
    opacity:0.5
  },
  scan:{
    width:300,
    height:300,
    alignSelf:'center'
  }

})