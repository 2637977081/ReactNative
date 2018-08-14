import React,{Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
}from 'react-native';

export default class tabShow extends Component{

    constructor(props){
        super(props);
        this.state={
            item: this.props.navigation.state.params,
        }
        console.log(this.state.inf);
    }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    })

    render(){
        let param =this.state.item;
        return(
            <View>
                <Text>{param.inf}</Text>
            </View>
        )
    }
}