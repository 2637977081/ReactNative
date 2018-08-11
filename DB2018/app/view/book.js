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
import BookDetail from './bookDetail'
import BookBarItem from './bookBarItem';

let _this = null;
export default class book extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: 'react',
            list: [
                //{ subtitle: "引领未来的用户界面开发框架", author: Array(1), pubdate: "2015-5-1", tags: Array(8) },
                //{ subtitle: "引领未来的用户界面开发框架", author: Array(1), pubdate: "2015-5-1", tags: Array(8) },
                //{ subtitle: "引领未来的用户界面开发框架", author: Array(1), pubdate: "2015-5-1", tags: Array(8) },
            ],
            start: 0,
            count: 20,
            loading: true,
        };
        _this = this;
    }

    _getData() {
        console.log('获取数据' + this.state.inputText);
        //console.log("list" + typeof (this.state.list));
        /*
        参数	意义	备注
        q	查询关键字	q和tag必传其一
        tag	查询的tag	q和tag必传其一
        start	取结果的offset	默认为0
        count	取结果的条数	默认为20，最大为100
        */
        let url = 'https://api.douban.com/v2/book/search?q=' + this.state.inputText + '&start=' + this.state.start + '&count=' + this.state.count;
        //let url='http://192.168.1.196:12040/book/search?q=' + this.state.inputText + '&start=' + this.state.start + '&count=' + this.state.count;
       
        //let url='http://192.168.1.182:12040/book/search?q=' + this.state.inputText + '&start=' + this.state.start + '&count=' + this.state.count;
        console.log("要访问的链接" + url);
        console.log("this.state====" + typeof (this.state) + "===" + typeof (this.setState));

        this.state.loading = true;
        var that = this;
        Util.getJSON(
            url,
            function (data) {
                console.log(data);
                //console.log(this.state.inputText);
                //遍历获取数据
                data = data.result;
                if (data.hasOwnProperty('books') === true) {
                    console.log("开始获取数据" + data + "==" + data.books.length + "==");
                    that.setState({
                        list: that.state.list.concat(data.books),
                        start: that.state.start + 20,
                        loading: false,
                    });
                    console.log("this.state====" + typeof (this.state) + "===" + typeof (this.setState));
                    /*for (var i = 0; i < data.books.length; i++) {

                        //showList.push(data.books[i]);

                        //console.log("showList" + showList[i]);

                        that.setTtate.list.push(data.books[i]);
                    }*/
                    console.log(" that.state.list10" + that.state.list);
                    //this.setState({
                    //list:data.books,
                    //});
                    //console.log("aaaaa" + _this.state.list[0]);
                    //console.log("list数据有么"+this.state.list);
                } else {
                    console.log('数据呢？');
                }
            }
        );
        //console.log("_this.state.list----"+_this.state.list);
        /*console.log("this.state.list----"+this.state.list);
        fetch(url)
            .then((response) => response.json())
            .then((jsonData) => 
                {        //jsonData就是上一步的response.json()
                    console.log("wwwww"+jsonData);
                    this.setState({
                        list: jsonData.books,     //data是一个对象数组
                    });
                    console.log("qqqqqqqqq"+this.state.list[0].subtitle);
                }
            )                           
            .catch((error) => {          //注意尾部添加异常回调
                alert(error);
            });
        */
        //console.log("显示" + this.state.list[0].subtitle);
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

                            <BookBarItem
                                item={item}
                                navigation={this.props.navigation}
                            />
                        }
                        //下拉获取数据
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            console.log("163行下拉获取数据" + this.state.start);
                            this._getData();
                        }}

                        //上拉刷新
                        onRefresh={() => {
                            console.log("169行上拉刷新" + this.state.start);
                            this._clearData();
                            this._getData();
                        }}

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
        backgroundColor:'#fff',
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