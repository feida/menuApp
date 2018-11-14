import React, { Component } from 'react';
import {
  StatusBar,
  View
} from 'react-native';
import MainNavigator from './navigation';
import { connect } from 'react-redux';
import dva from './utils/dva'

import appModel from './models/app'
import routerModel from './models/router'
import homeModel from './models/homeStatus'
import data from './models/data'

/*export default class App extends Component<{}> {
  render() {
    return (
        <View
            style={{ flex:1 }}>
            <StatusBar barStyle="light-content" backgroundColor="rgba(222, 88, 51, 1)"/>
            <Provider store={store}>
               <MainNavigator/>
            </Provider>
         </View>
    );
  }
}*/


const app = dva({
    initialState: {},
    models: [appModel, routerModel, homeModel, data],
    onError(e) {
        console.log('onError', e)
    },
})

const App = app.start(
    <View style={{flex:1}}>
        <StatusBar barStyle="light-content" backgroundColor="#152A45"/>
        {/*<StatusBar barStyle="dark-content" backgroundColor="#000"/>*/}
        <MainNavigator />
    </View>

)

export default App;