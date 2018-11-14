/**
 * Created by yaopeng on 2017/12/31.
 */
import React, { Component } from 'react'
import { StyleSheet, View, Text, ActivityIndicator,TouchableOpacity } from 'react-native'
import {Button} from 'react-native-elements'
import { connect } from 'react-redux'


import { createAction, NavigationActions } from '../../utils'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    }

    onLogin = () => {
        this.props.dispatch(createAction('app/login')())
    }

    onClose = () => {
        this.props.dispatch(NavigationActions.back())
    }

    render() {
        const { fetching } = this.props
        return (
            <View style={styles.container}>
                {fetching ? (
                    <ActivityIndicator />
                ) : (
                    <Button title="Login" onPress={this.onLogin} />
                )}
                {!fetching && (
                    <TouchableOpacity style={styles.close}  onPress={this.onClose}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    close: {
        position: 'absolute',
        right: 20,
        top: 40,
    },
})

export default Login
