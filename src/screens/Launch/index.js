import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Platform ,Dimensions} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { createAction, NavigationActions, Storage } from '../../utils'
import UpdateComp from '../../screens/CodePushModal'
import { connect } from 'react-redux';
var {height, width} = Dimensions.get('window');
const LaunchImg = {
  a: require('../../img/launch/launch1.png'),
  b: require('../../img/launch/launch2.png'),
  c: require('../../img/launch/launch3.png'),
  d: require('../../img/launch/launch4.png'),
  e: require('../../img/launch/launch5.png'),
  f: require('../../img/launch/launch6.png'),
  g: require('../../img/launch/launch7.png'),
  h: require('../../img/launch/launch8.png')
}
@connect(({ homeStatus, router }) => ({ homeStatus, router }))
class Launch extends Component {
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
    }
  }
  componentWillMount() {
    SplashScreen.hide();

  }
  componentDidMount() {
    /*let num = 1
    let interval = setInterval(() => {
      num++
      this.setState({
        flag: num
      })
      if(num === 9) {
        clearInterval(interval);
        this.getIp()
      }
    },250)*/
    this.getIp()
  }

  async getIp() {
    let ip = await Storage.get('ip')
    //this.props.dispatch(NavigationActions.navigate({ routeName: 'settingIp' }))
    if(ip && ip !=''){
      this.props.dispatch(NavigationActions.navigate({ routeName: 'Root' }))
    } else {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'settingIp' }))
    }
  }

  render() {
    let imgSource = LaunchImg.a
    if(this.state.flag === 2) {
      imgSource = LaunchImg.b
    } else if(this.state.flag === 3) {
      imgSource = LaunchImg.c
    } else if(this.state.flag === 4) {
      imgSource = LaunchImg.d
    } else if(this.state.flag === 5) {
      imgSource = LaunchImg.e
    } else if(this.state.flag === 6) {
      imgSource = LaunchImg.f
    } else if(this.state.flag === 7) {
      imgSource = LaunchImg.g
    } else if(this.state.flag === 8) {
      imgSource = LaunchImg.h
    }
    return (
      <View style={{flex:1,backgroundColor:'#152A45'}}>
        {/*<Image source={imgSource} style={{width:width,height:height}}/>*/}
        <Image source={require('../../img/others/launch.jpg')} style={{width:width,height:height}}/>
        {/*<UpdateComp/>*/}
      </View>
    );
  }

}




export default Launch;
