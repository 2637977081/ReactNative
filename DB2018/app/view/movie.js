import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
} from 'react-native';

import Util from './../common/util'
import MovieDetail from './movieDetail'
import MovieBarItem from './movieBarItem';

let _this = null;
export default class movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: 'happy',
            list: [

            ],
            start: 0,
            count: 20,
            loading: true,
        };
        _this = this;
    }

    _getData() {
        console.log('获取电影数据' + this.state.inputText);
        //console.log("list" + typeof (this.state.list));
        /*
        参数	意义	备注
        q	查询关键字	q和tag必传其一
        tag	查询的tag	q和tag必传其一
        start	取结果的offset	默认为0
        count	取结果的条数	默认为20，最大为100
        */
        let url = 'https://api.douban.com/v2/movie/search?q=' + this.state.inputText + '&start=' + this.state.start + '&count=' + this.state.count;
        console.log("要访问的链接" + url);
        console.log("this.state====" + typeof (this.state) + "===" + typeof (this.setState));

        this.state.loading = true;
        var that = this;
        Util.getJSON(
            url,
            function (data) {
                console.log(data);
                //subjects
                //this.state.loading = true;
                console.log(data);
                //console.log(this.state.inputText);
                //遍历获取数据
                if (data.hasOwnProperty('subjects') === true) {
                    console.log("电影开始获取数据" + data + "==" + data.subjects.length + "==");
                    console.log("that" + that.state);
                    //console.log("this"+this.state);

                    that.setState({
                        list: that.state.list.concat(data.subjects),
                        start: that.state.start + 20,
                        loading: false,
                    });
                    console.log("this.state====" + typeof (this.state) + "===" + typeof (this.setState));
                    console.log(" that.state.list10" + that.state.list);
                } else {
                    console.log('数据呢？');
                }
            }
        );

    }

    _clearData() {
        console.log('清屏');
        this.state.list = [];
        this.state.start = 0;
    }

    //页面渲染之前
    //
    componentWillMount() {

    }

    //页面渲染之后
    componentDidMount() {
        console.log('页面渲染之后');
        this._getData();
    }

    render() {
        console.log('页面开始渲染' + this.state.list[0]);

        return (

            <View style={styles.main}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(inputText) => {
                                console.log(inputText)
                                this.setState({ inputText: inputText })
                            }}
                        ></TextInput>
                    </View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            console.log("搜索内容" + this.state.inputText);
                            alert("弹出" + this.state.inputText);
                            this._clearData();
                            this._getData();
                        }}
                    >
                        <Text style={styles.seacrch}>搜索</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        refreshing={this.state.loading}
                        data={this.state.list}
                        renderItem={({ item }) =>
                            <MovieBarItem
                                item={item}
                                navigation={this.props.navigation}
                            />
                        }
                        keyExtractor={(item,index)=>item.id}

                    ></FlatList>
                </View>
            </View>
        )
    }


}

const styles = StyleSheet.create({

    main: {
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 44,
        marginTop: 10,
    },
    inputContainer: {
        flex: 1,
        marginLeft: 5,
    },
    input: {
        flex: 1,
        height: 44,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#CCC',
        paddingLeft: 5
    },
    btn: {
        width: 55,
        height: 44,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#23BEFF',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    seacrch: {
        flex: 1,
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 44,
    }

});