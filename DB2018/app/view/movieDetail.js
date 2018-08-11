import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

export default class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.state.params,
        }
        console.log("电影详情页" + this.state.item);
        console.log(this.state.item.hasOwnProperty('images'));
    }

    render() {

        return (
            <View style={styles.main}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        source={{ uri: this.state.item.images.medium }}
                        style={{ width: ScreenWidth * 0.25, height: ScreenWidth * 0.25 + 30, marginLeft: 10, }}
                    />

                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <View style={styles.textView}>
                            <Text numberOfLines={1} style={{ color: '#000', fontWeight: 'bold', fontSize: 16, }}>
                                {this.state.item.title}
                            </Text>
                        </View>

                        <View style={styles.textView}>
                            <Text>
                                {this.state.item.original_title}
                            </Text>
                        </View>
                       
                        <View style={styles.textView}>
                            <Text>
                                {this.state.item.genres}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginBottom: 5, }}>
                            <Text style={{ color: '#4a9692', fontSize: 16, }}>
                                {this.state.item.year}年代
                                </Text>
                            <Text style={{marginLeft:20,}}>
                                {this.state.item.collect_count}
                            </Text>
                        </View>

                    </View>

                </View>
                <View>
                    <Image
                        source={{ uri: this.state.item.images.large }}
                        style={{ width: ScreenWidth - 30, height: ScreenWidth, marginLeft: 10, marginTop:20,}}
                    />
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#fff',
        height: ScreenWidth * 0.25 + 40,
    },
    main: {
        marginTop: 10,
        flexDirection: 'column',
    },

    textView: {
        marginTop: 6,
    },
});