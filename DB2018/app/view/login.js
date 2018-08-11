/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        //获取屏幕宽高
        var width = require('Dimensions').get('window').width;
        var height = require('Dimensions').get('window').height;
        console.log(width + "===" + height);

        this.state = {
            width: width,
            height: height,
            username: '',
            password: '',
        };
        console.log(this.state);
    }

    _onPressEvent() {
        var ifo = '';

        if (this.state.username === 'admin' && this.state.password === '123456') {
            ifo = '登陆成功';
            this.props.navigation.navigate('Tabs');
        } else {
            ifo = '登录失败';
        }

        alert(ifo);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.top, {
                    width: this.state.width,
                    height: this.state.height * 0.32,
                }]}>

                    {/*获取图片  './'表示本地*/}
                    <Image style={styles.topImage} source={require('./../image/bg.png')} />
                </View>
                <View style={styles.main}>

                    {/* 用户名一行*/}
                    <View style={[styles.mainUsername, styles.mainSonView, {
                        width: this.state.width * 0.6,
                        marginLeft: this.state.width * 0.2,
                        borderBottomWidth: 1,
                        //rbg 255=16*15+15 254%16=14
                        borderBottomColor: '#d8d8d8',
                    }]}>
                        <Image
                            style={[styles.inputLin, {
                                marginTop: 10,
                            }]}
                            source={require('./../image/us.png')} />

                        <TextInput
                            style={[styles.inputLin, {
                                width: this.state.width * 0.4,
                                marginBottom: -9,
                            }]}
                            //去除下划线
                            underlineColorAndroid='transparent'
                            //文本框内容改变时获取值
                            onChangeText={
                                (username) => this.setState({ username })
                            }
                        ></TextInput>

                        <Image
                            style={[styles.inputLin, {
                                marginTop: 10,
                            }]}
                            source={require('./../image/x.png')} />
                    </View>

                    {/* 密码一行*/}
                    <View style={[styles.mainUsername, styles.mainSonView, {
                        width: this.state.width * 0.6,
                        marginLeft: this.state.width * 0.2,
                        borderBottomWidth: 1,
                        //rbg 255=16*15+15 254%16=14
                        borderBottomColor: '#d8d8d8',
                    }]}>
                        <Image

                            style={[styles.inputLin, {
                                marginTop: 10,
                            }]}
                            source={require('./../image/pw.png')} />

                        <TextInput
                            style={[styles.inputLin, {
                                width: this.state.width * 0.4,
                            }]}
                            //去除下划线
                            underlineColorAndroid='transparent'
                            //设置为密码文
                            secureTextEntry={true}
                            //文本框内容改变时获取值
                            onChangeText={
                                (password) => this.setState({ password })
                            }
                        ></TextInput>

                        <Image

                            style={[styles.inputLin, {
                                marginTop: 10,
                            }]}
                            source={require('./../image/x.png')} />
                    </View>

                    {/* 登录一行*/}
                    <View
                        style={[styles.mainLogin, styles.mainSonView, {
                            width: this.state.width * 0.6,
                            marginLeft: this.state.width * 0.2,
                        }]}

                    >
                        <TouchableOpacity 
                            style={{
                                width: this.state.width * 0.6,
                            }}
                            onPress={() =>this._onPressEvent()}>
                            <ImageBackground
                                style={[styles.topImage, {
                                }]}
                                source={require('./../image/btn.png')}
                            >
                                <Text style={{
                                    color: '#ffffff'
                                }}>登录</Text>
                            </ImageBackground>

                        </TouchableOpacity>


                    </View>

                    {/* 记住密码一行*/}
                    <View style={[styles.mainRemmber, styles.mainSonView, {
                        width: this.state.width * 0.6,
                        marginLeft: this.state.width * 0.2,
                        flexDirection: 'row',
                    }]}>
                        <Text style={{
                            marginLeft: 10,
                        }}>记住密码</Text>
                        <Text style={{
                            //marginRight:10,
                            marginLeft: 100,
                        }}>忘记密码</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    top: {
        //backgroundColor:'#808000',
    },
    topImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
        //图片铺满
        resizeMode: Image.resizeMode.stretch,
    },
    main: {
        width: 400,
        height: 300,
        //backgroundColor:'#FF0000',
        marginTop: 35,
        flex: 1,
        flexDirection: 'column',
    },
    mainSonView: {
        height: 45,
        flexDirection: 'row',
        marginTop: 15,
    },
    mainUsername: {
        //backgroundColor:'#C0C0C0',
    },
    mainPassword: {
        //backgroundColor:'#808080',
    },
    mainLogin: {
        //backgroundColor:'#800000',
    },
    mainRemmber: {
        //backgroundColor:'#008000',
    },
    inputLin: {
        marginBottom: -9,
    }
});
