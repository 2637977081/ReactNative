import React, { Component } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    AppRegistry,
    Platform,
    View,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';

const ScreenWidth = Dimensions.get("window").width; //屏幕宽度
const ScreenHeight = Dimensions.get("window").height;//屏幕高度
const Plattfrom = Platform.OS;//获取模拟机iso还是Android

export default class app extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            inputText: '输入框默认值',
            chosenDate: new Date(),
        };//初始化数据
    }

    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <ScrollView>
                    <View style={{ borderBottomColor: '#aaa', borderBottomWidth: 1 }}>
                        <Text>Text标签显示文字</Text>
                        <Text>设置字体color颜色、
                            fontSize字号、
                            fontFamily字体、
                            fontWeight加粗bold、
                            numberOfLines大括号几行显示、
                    </Text>
                    </View>
                    <View style={{ borderBottomColor: '#aaa', borderBottomWidth: 1 }}>
                        <TextInput

                            value={this.state.inputText}
                            onChangeText={(text) => this.setState({
                                inputText: text,
                            })}
                        ></TextInput>

                        <TextInput
                            value={this.state.inputText}
                            secureTextEntry={true}//是否密码
                            onChangeText={(text) => this.setState({
                                inputText: text,
                            })}
                        ></TextInput>
                    </View>
                    <View style={{ borderBottomColor: '#aaa', borderBottomWidth: 1 }}>
                        <TouchableOpacity
                            onPress={() => (alert("点击"))}
                            style={{ width: 100, height: 40, backgroundColor: '#aaa', }}
                        >
                            <Text>点击一下按钮</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomColor: '#aaa', borderBottomWidth: 1, flexDirection: 'row' }}
                    >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: 'http://qlogo4.store.qq.com/qzone/2637977081/2637977081/100?1512611146' }}
                        />
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: 'http://github.com/2637977081/ReactNative/blob/master/sources/images/psb.jpg' }}
                        />
                    </View>


                    <View style={{ borderBottomColor: '#aaa', borderBottomWidth: 1 }}
                    >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("./../image/psb.jpg")}

                        />
                    </View>

                    <View>
                        <KeyboardAvoidingView behavior="padding" enabled>
                            {/**键盘组件 */}
                        </KeyboardAvoidingView>
                    </View>
                    <View style={{ borderBottomColor: '#aaa', borderBottomWidth: 1 }}
                    >
                        <FlatList
                            data={[{ key: 'a' }, { key: 'b' }]}
                            renderItem={({ item }) => <Text>{item.key}</Text>}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

AppRegistry.registerComponent('Component', () => app);