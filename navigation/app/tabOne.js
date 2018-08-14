import React,{Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
}from 'react-native';

import TabShow from './tabShow'

export default class tabOne extends Component{
    render(){
        return(
            <View>
                <Text>tableOne</Text>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("TabShow",{inf:'跳转成功',title:'标题',});
                    }}
                >
                    <Text>跳转</Text>
                </TouchableOpacity>
            </View>
        )
    }
}