import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Platform ,Dimensions} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { createAction, NavigationActions, Storage } from '../../utils'
import UpdateComp from '../../screens/CodePushModal'
import { connect } from 'react-redux';
import VideoScreen from './video';
var {height, width} = Dimensions.get('window');
@connect(({ homeStatus, router }) => ({ homeStatus, router }))
class Test extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      gesturesEnabled: false,
      header: null
    };
  };
  constructor (props) {
    super(props)
    this.state = {
      flag: 1,
    }

    this.data = [
      /*{
        url: require('../../gif/001.gif'),
        text: '001'
      },
      {
        url: require('../../gif/002.gif'),
        text: '002'
      },
      {
        url: require('../../gif/003.gif'),
        text: '003'
      },
      {
        url: require('../../gif/004.gif'),
        text: '004'
      },
      {
        url: require('../../gif/005.gif'),
        text: '005'
      },*/
      {
        url: require('../../gif/007.gif'),
        text: '007'
      }
    ]
  }
  componentWillMount() {

  }
  componentDidMount() {

  }



  render() {
    return (
      <View style={{height:height,backgroundColor:'#152A45'}}>
        <Text>测试</Text>
        {/*<Image source={require('../../img/others/launch.jpg')} style={{width:width,height:height}}/>*/}
        {this.renderImg()}
        <VideoScreen/>
        <TouchableOpacity onPress={() => {this.props.dispatch(NavigationActions.back())}} style={{width:200,height:100,backgroundColor:'#fff',marginTop:20}}>

          <Text>返回</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderImg() {
    let list = this.data.map((v,i) => {
      return(
        <View style={{padding:30}} key={i}>
          <View style={{width: 200, height:200,overflow: 'hidden',position: 'relative'}}>
            <Image source={v.url} style={{ width: 200, height:200}}/>
            <View style={{}}>

            </View>
          </View>
          {/*<Image source={v.url} style={{ width: 210, height:210,borderRadius:105}}/>*/}
          <Text style={{fontSize:20, color:'#fff'}}>{v.text}</Text>
        </View>
      )
    })
    return (
      <View style={{flexDirection:'row',flexWrap: 'wrap',}}>
        {list}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  mask: {
    width: 200,
    height:200,
    borderRadius: 100,
    position:'absolute',
    backgroundColor:'red',
    top:0,
    left:0,
    //borderLeftWidth: 200,
    //borderRightWidth: 200,
    borderStyle: 'solid',
    borderWidth: 200,
    borderColor: 'rgba(0, 0, 0, .7)'
  },


});


export default Test;
