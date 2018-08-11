import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import MovieDetail from './movieDetail';

let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

export default class MovieBarItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: null,
        }
        console.log("Item显示" + this.props.item);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('MovieDetail', this.props.item);
                }}

                style={styles.btn}
            >
                <View style={styles.main}>
                    <View>
                        <Image
                            source={{ uri: this.props.item.images.medium}}
                            style={{ width: ScreenWidth*0.25, height: ScreenWidth*0.25+30, marginLeft: 10, }}
                        />
                    </View>

                    <View style={{ flex: 1,  marginLeft: 20 }}>
                        <View style={styles.textView}>
                            <Text numberOfLines={1} style={{color:'#000',fontWeight:'bold',fontSize:16,}}>
                                {this.props.item.title}
                            </Text>
                        </View>
                        <View style={styles.textView}>
                            <Text>
                                {this.props.item.original_title}
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',flex:1,alignItems:'center',marginBottom:5,}}>
                            <Text style={{color:'#4a9692',fontSize:16,}}>
                                {this.props.item.year}年代
                            </Text>
                        </View>

                    </View>
                </View>

            </TouchableOpacity>
        )

    }


}

const styles=StyleSheet.create({
    btn:{
        backgroundColor: '#fff',
        height: ScreenWidth*0.25+40,
    },
    main:{
        marginTop:10,
        flexDirection: 'row',
    },

    textView:{
        marginTop:6,
    },
});