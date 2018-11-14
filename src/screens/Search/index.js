import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Platform ,TextInput,Dimensions} from 'react-native';
import { connect } from 'react-redux'
import { createAction, NavigationActions, Storage } from '../../utils'
import { hotSearch } from '../../common/picData'
var {height, width} = Dimensions.get('window');
@connect(({ data }) => ({ data }))
class Search extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      gesturesEnabled: false,
      header: null
    };
  };

  constructor (props){
    super(props)
    this.state = {
      listArr:[],
      historyArr:  []
    }
    this.picData = this.props.data.data
    this.tempArr =[]
    this.hotSearch = hotSearch
  }
  componentWillMount() {
    this.picData.map((v,i) => {
      v.cuisine.map((m,k) => {
        let temp = {
          num: v.num,
          picIndex: i,
          name: m.name,
        }
        this.tempArr.push (temp)
      })
    })
    this.storageHistory()
  }
  async storageHistory() {
    let historyArr = await Storage.get('historySearch')
    this.setState({
      historyArr: historyArr ? historyArr : []
    })
  }
  onChangeText(text){
    let listArr = []
    this.tempArr.map((v,i) => {
      if(v.name.indexOf(text)>=0 && text !==''){
        listArr.push(v);
      }
    })
    this.setState({
      listArr:listArr
    })
  }



  render() {
    let list = this.state.listArr.length > 0 && this.state.listArr.map((v,i) => {
        return (
          <TouchableOpacity key={i}
                            style={{height:35,borderBottomWidth:1,borderBottomColor:'#d4d4d4',justifyContent:'center'}}
                            onPress = {this.search.bind(this,v)}
          >
            <Text style={{fontSize:14,color:'#000'}}>{v.name}</Text>
          </TouchableOpacity>
        )
      })
    let listItem = this.state.historyArr && this.state.historyArr.length > 0 && this.state.historyArr.map((v,i) => {
        return (
          <TouchableOpacity key={i}
                            style={{height:33,borderRadius:5,paddingLeft:15,paddingRight:15,marginRight:20,marginTop:20,backgroundColor:'#f2f2f2',justifyContent:'center',alignItems:'center'}}
                            onPress = {this.backHome.bind(this,v)}
          >
            <Text style={{fontSize:16,color:'#333'}}>{v.name}</Text>
          </TouchableOpacity>
        )
      })
    let hotItem = this.hotSearch.map((v,i) => {
        return (
          <TouchableOpacity key={i}
                            style={{height:33,borderRadius:5,paddingLeft:15,paddingRight:15,marginRight:20,marginTop:20,backgroundColor:'#f2f2f2',justifyContent:'center',alignItems:'center'}}
                            onPress = {this.backHome.bind(this,v)}
          >
            <Text style={{fontSize:16,color:'#333'}}>{v.name}</Text>
          </TouchableOpacity>
        )
      })
    let listHeight = this.state.listArr.length * 35
    return (
      <View style={{flex:1,backgroundColor:'#fff',}}>
        <View style={{ zIndex:10,backgroundColor: '#152A45',paddingLeft:20,paddingRight:20,paddingTop:24,height:64,flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
          <View style={{width:643,height:30,flexDirection:'row',backgroundColor:'#fff',borderRadius:5}}>
            <View style={{width:42,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('../../img/others/search.png')} style={{width:17,height:17}}/>
            </View>
            <TextInput
              ref={component => this._textInput = component}
              onChangeText={(text)=> this.onChangeText(text)}
              style={{
                width: 600,
                height: 30,
                padding:0,
                fontSize:14,
                color:'#000'
              }}
              placeholder='请输入菜品名称'
              maxLength = {20}
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholderTextColor="#939393"
            />
            <View style={{width:643,height:listHeight,backgroundColor:'#fafafa',paddingLeft:42,paddingRight:15,position:'absolute',left:0,bottom:-listHeight}}>{list}</View>
          </View>
          <TouchableOpacity
            style={{width:65,height:30,backgroundColor:'#fff',borderRadius:5,justifyContent:'center',alignItems:'center'}}
            onPress={this.goBack.bind(this)}
          >
            <Text style={{fontSize:14,color:'#303030'}}>取消</Text>
          </TouchableOpacity>
        </View>
        {/*<View style={{paddingLeft:20,paddingRight:20,paddingTop:20}}>*/}
          {/*<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:35,paddingTop:20}}>*/}
            {/*<Text style={{fontSize:18,color:'#777'}}>热门搜索</Text>*/}
          {/*</View>*/}
          {/*<View style={{width:width-40,flexWrap: 'wrap',flexDirection:'row'}}>*/}
            {/*{hotItem}*/}
          {/*</View>*/}
        {/*</View>*/}
        <View style={{paddingLeft:20,paddingRight:20,paddingTop:20}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:35,paddingTop:20}}>
            <Text style={{fontSize:18,color:'#777'}}>历史搜索</Text>
            <TouchableOpacity
              style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
              onPress={() => {
                this.setState({
                  historyArr:[]
                })
                Storage.set('historySearch',[])
              }}
            >
              <Image source={require('../../img/others/trash.png')} style={{width:17,height:17}}/>
              <Text style={{fontSize:16,color:'#aaa',marginLeft:10}}>清空历史搜索</Text>
            </TouchableOpacity>
          </View>
          <View style={{width:width-40,flexWrap: 'wrap',flexDirection:'row'}}>
            {listItem}
          </View>
        </View>
      </View>
    )

  }

  goBack() {
    this.props.dispatch(NavigationActions.back())
  }

  search(v) {
    const  {navigate,state,goBack,} = this.props.navigation;
    let tempArr = this.state.historyArr
    let index = -1
    this.state.historyArr && this.state.historyArr.map((m,i) => {
      if (m.name === v.name) {
        index = i
        return false;
      }
      return true;
    })
    if(index !== -1) {
      tempArr.splice(index,1)
      tempArr.unshift(v)
    }else{
      tempArr.push(v)
    }
    Storage.set('historySearch',tempArr)
    state.params.callback(v)
    goBack()
  }

  backHome(v){
    const  {navigate,state,goBack,} = this.props.navigation;
    state.params.callback(v)
    goBack()
  }
}

const styles = StyleSheet.create({


});

export default Search;
