import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    Image,
    StyleSheet
} from 'react-native';

import {
    createStackNavigator,
    TabNavigator,
} from 'react-navigation';

import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';
import TabShow from './tabShow';

const tabs = TabNavigator({
    TabOne: {
        screen: TabOne, //类似标签属性
        navigationOptions: {
            tabBarLabel: 'tab1', //显示文本
            tabBarIcon: ({ tintColor, focused }) => {
                if (focused) { //获取选择时
                    return <Image source={require('./image/home-o.png')} style={styles.icon} />
                } else {
                    return <Image source={require('./image/home.png')} style={styles.icon} />
                }
            },
        }
    },
    TabTwo: {
        screen: TabTwo,
        navigationOptions: {
            tabBarLabel: 'tab2',
            tabBarIcon: ({ tintColor, focused }) => {
                if (focused) {
                    return <Image source={require('./image/service-o.png')} style={styles.icon} />
                } else {
                    return <Image source={require('./image/service.png')} style={styles.icon} />
                }
            },
        }
    },
    TabThree: {
        screen: TabThree,
        navigationOptions: {
            tabBarLabel: 'tab3',
            tabBarIcon: ({ tintColor, focused }) => {
                if (focused) {
                    return <Image source={require('./image/my-o.png')} style={styles.icon} />
                } else {
                    return <Image source={require('./image/my.png')} style={styles.icon} />
                }
            },
        }
    }
}, {
        animationEnabled: false, // 切换页面时不显示动画
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: false, // 禁止左右滑动
        backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
        tabBarOptions: {
            activeTintColor: '#999', // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片默认颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                height: 50, borderTopWidth: 1, borderTopColor: '#ccc'
            },
            labelStyle: {
                fontSize: (Platform.OS === 'ios') ? 12 : 10, // 文字大小
            },
            iconStyle: { height: 18, width: 18, }
        },
    });

const app = createStackNavigator( //显示的app内容到index上
    {
        Tabs: {
            screen: tabs,         //选项卡
            navigationOptions: {
                header: null
            }
        },
        TabShow:{
            screen:TabShow,
        },
    },
    {
        initialRouteName: 'Tabs', //初始页面
    }
);

const defaultGetStateForAction = app.router.getStateForAction;
app.router.getStateForAction = (action, state) => {
    // goBack返回指定页面
    //console.log("返回到指定页面" + state + "===" + action.type + "===" + action.key);
    if (state && action.type === 'Navigation/BACK' && action.key) {
        const backRoute = state.routes.find((route) => route.routeName === action.key);

        //console.log("backRoute" + backRoute + "+++");
        if (backRoute) {
            const backRouteIndex = state.routes.indexOf(backRoute);
            const purposeState = {
                ...state,
                routes: state.routes.slice(0, backRouteIndex + 1),
                index: backRouteIndex,
            };
            return purposeState;
        }
    }
    return defaultGetStateForAction(action, state)
};

const styles = StyleSheet.create({
    icon: (Platform.OS === 'ios') ? { height: 22, width: 22 } : { height: 18, width: 18 }
});

AppRegistry.registerComponent('navigation', () => app);