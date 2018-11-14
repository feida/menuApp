import React, { Component } from 'react';
import { ScrollView, Dimensions, StyleSheet, View, Text, Image, TouchableOpacity, Platform ,Keyboard,TextInput,Modal,DeviceEventEmitter,ProgressViewIOS} from 'react-native';
import CodePush from 'react-native-code-push';
import * as Progress from 'react-native-progress';
import { createAction, NavigationActions, Storage } from '../../utils'
import { connect } from 'react-redux'
import { toastShort } from '../../common/ToastUtil';
import { bindTable, getOrderInfoByTableNumber, menuSyncArticleInfo,getTableNumberByVvid } from '../../services/api';
var {height, width} = Dimensions.get('window');
const CODE_PUSH_KEY = 'kHP6OqeXlcDdAUMBjDFdSnkzZkw-3ef921eb-479c-47c7-8f11-0062eb274e82';
let codePushOptions = {
  //设置检查更新的频率
  //ON_APP_RESUME APP恢复到前台的时候
  //ON_APP_START APP开启的时候
  //MANUAL 手动检查
  checkFrequency : CodePush.CheckFrequency.ON_APP_START
};

@connect(({ homeStatus, router }) => ({ homeStatus, router }))
class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.currProgress = 0
    this.syncMessage = ''
    this.state = {
      modalVisible: false,
      isMandatory: false,
      immediateUpdate: false,
      updateInfo: {},
      progress: 0
    }
  }

  codePushStatusDidChange(syncStatus) {
    if (this.state.immediateUpdate) {
      switch(syncStatus) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
          this.syncMessage = 'Checking for update'
          break;
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          this.syncMessage = 'Downloading package'
          break;
        case CodePush.SyncStatus.AWAITING_USER_ACTION:
          this.syncMessage = 'Awaiting user action'
          break;
        case CodePush.SyncStatus.INSTALLING_UPDATE:
          this.syncMessage = 'Installing update'
          break;
        case CodePush.SyncStatus.UP_TO_DATE:
          this.syncMessage = 'App up to date.'
          break;
        case CodePush.SyncStatus.UPDATE_IGNORED:
          this.syncMessage = 'Update cancelled by user'
          break;
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          this.syncMessage = 'Update installed and will be applied on restart.'
          break;
        case CodePush.SyncStatus.UNKNOWN_ERROR:
          this.syncMessage = 'An unknown error occurred'
          toastShort('更新出错，请重启应用！')
          this.setState({modalVisible: false})
          break;
      }
    }
  }

  codePushDownloadDidProgress(progress) {
    console.log('progress___________',progress)
    if (this.state.immediateUpdate) {
      this.currProgress = parseFloat(progress.receivedBytes / progress.totalBytes).toFixed(2)
      if(this.currProgress >= 1) {
        this.setState({modalVisible: false})
      } else {
         //this.refs.progressBar.progress = this.currProgress
        this.setState({progress: Number(this.currProgress)})

      }
    }
  }

  syncImmediate() {
    CodePush.checkForUpdate(CODE_PUSH_KEY).then((update) => {
      console.log('-------isMandatory', update.isMandatory)
      console.log('-------description', update.description)
      console.log('-------update', update)
      if (!update) {
        toastShort('已是最新版本！')
      } else {
        this.setState({modalVisible: true, updateInfo: update, isMandatory: update.isMandatory})
      }
    })
  }

  componentWillMount() {
    CodePush.disallowRestart()
    this.syncImmediate()
  }
  componentDidMount() {
    //this.syncImmediate(); //开始检查更新
    CodePush.allowRestart()
  }

  _immediateUpdate() {
    this.setState({immediateUpdate: true})
    CodePush.sync(
      {deploymentKey: CODE_PUSH_KEY, updateDialog: null, installMode: CodePush.InstallMode.IMMEDIATE},
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    )
  }
  componentWillUnmount() {

  }

  renderModal() {
    return (
      <Modal
        animationType={"none"}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => alert("Modal has been closed.")}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            {
              !this.state.immediateUpdate ?
                <View>
                  {/*<Image style={{width: width - 60}} source={require('../../../assets/images/me/updateBg.png')} resizeMode={'stretch'}/>*/}
                  <View style={{backgroundColor: '#fff'}}>
                    <View style={{marginHorizontal: 15}}>
                      <Text style={{marginVertical: 20, fontSize: 17, color: '#000', fontWeight: 'bold'}}>更新内容</Text>
                      <Text style={{lineHeight: 20}}>{this.state.updateInfo.description}</Text>
                    </View>
                    {/*<View style={{alignItems: 'center', marginTop: 20}}>
                      <Text style={{fontSize: 14, color: '#333'}}>wifi情况下更新不到30秒</Text>
                    </View>*/}
                    {
                      this.state.isMandatory ?
                        <View style={{flexDirection: 'row', height: 50, alignItems: 'center', marginTop: 20, borderTopColor: '#333', borderTopWidth: 1 }}>
                          <TouchableOpacity
                            onPress={() => this.setState({modalVisible: false})}>
                            <View style={{flexDirection: 'row', alignItems: 'center', width: (width - 60) / 2, height: 50, borderRightColor: '#000', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
                              {/*<Icon name={'oneIcon|reject_o'} size={20} color={'#B6B6B6'}/>*/}
                              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#333', marginLeft: 10}}>残忍拒绝</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{flexDirection: 'row', alignItems: 'center', width: (width - 60) / 2, height: 50, alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => this._immediateUpdate()}
                          >
                            <View style={{backgroundColor: '#3496FA', flex: 1, height: 40, alignItems: 'center', justifyContent: 'center', margin: 10, borderRadius: 20}}>
                              <Text style={{fontSize: 17, color: '#fff', fontWeight: 'bold'}}>极速下载</Text>
                            </View>
                          </TouchableOpacity>
                        </View> :
                        <View style={{flexDirection: 'row', height: 60, alignItems: 'center', marginTop: 20, borderTopColor: '#000', borderTopWidth: 1, width: width - 60}}>
                          <TouchableOpacity
                            style={{flexDirection: 'row', alignItems: 'center', width: (width - 60), height: 50, alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => this._immediateUpdate()}
                          >
                            <View style={{backgroundColor: '#3496FA', flex: 1, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginHorizontal: 40}}>
                              <Text style={{fontSize: 17, color: '#fff', fontWeight: 'bold'}}>立即更新</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                    }
                  </View>
                </View> :
                <View>
                  {/*<Image style={{width: width - 60}} source={require('../../../assets/images/me/updateBg.png')} resizeMode={'stretch'}/>*/}
                  <View style={{width: width - 60,height:500, backgroundColor: '#fff', alignItems: 'center'}}>
                    {/*<Progress.Circle
                      style={{marginBottom:20}}
                      progress={this.state.progress}
                      size={100} // 圆的直径
                      unfilledColor="rgba(255,255,255,1)" // 剩余进度的颜色
                      color={"#008aff"} // 颜色
                      thickness={6} // 内圆厚度
                      showsText={true}//显示进度比文字
                      textStyle={{fontSize:16,color:'#fff'}}//设置文字样式
                      // indeterminate={this.state.indeterminate}
                    />*/}
                    <ProgressViewIOS
                      ref="progressBar"
                      progressTintColor='red'
                      // trackTintColor="blue"
                      progress={this.state.progress}
                      style={{
                        marginTop: 20,
                        height: 50,
                        width: width - 100,
                        backgroundColor: 'red',
                        borderRadius: 10,
                      }}
                    />
                    <View style={{alignItems: 'center', marginVertical: 20}}>
                      <Text style={{fontSize: 14, color: '#333'}}>版本正在努力更新中，请等待</Text>
                    </View>
                  </View>
                </View>
            }
          </View>
        </View>
      </Modal>
    )
  }

  render() {
    return(
      <View style={styles.container}>
        {this.renderModal()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  modal: {
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  modalContainer: {
    marginHorizontal: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
})

export default CodePush(codePushOptions)(ProgressBar);
