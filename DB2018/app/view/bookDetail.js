import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';

let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

export default class bookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.state.params,
        }
        console.log(this.state.item);
    }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.bookTitle,
    })

    render() {

        return (
            <View>
                <View style={styles.main}>
                    <View>
                        <Image
                            source={{ uri: this.state.item.bookImage }}
                            style={{ width: ScreenWidth * 0.25, height: ScreenWidth * 0.25 + 30, marginLeft: 10, }}
                        />
                    </View>

                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <View style={styles.textView}>
                            <Text numberOfLines={1} style={{ color: '#000', fontWeight: 'bold', fontSize: 16, }}>
                                {this.state.item.bookTitle}
                            </Text>
                        </View>
                        <View style={styles.textView}>
                            <Text>
                                {this.state.item.bookPublisher}
                            </Text>
                        </View>
                        <View style={styles.textView}>
                            <Text>
                                {this.state.item.bookAuthor}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginBottom: 5, }}>
                            <Text style={{ color: '#4a9692', fontSize: 16, }}>
                                {this.state.item.bookPrice}
                            </Text>
                            <Text style={{ marginLeft: 15 }}>
                                {this.state.item.bookPages}页
                            </Text>
                        </View>

                    </View>
                </View>

                {
                    /**
                     * <Image
                    source={this.state.image}
                    />
                    <Image source={require('https://img1.doubanio.com/view/subject/s/public/s28061237.jpg')} />

                     */

                }

                <Text>-----------------------------</Text>
                <Text>pages:{this.state.item.bookPage}</Text>
                <Text>summary:{this.state.item.bookSummary}</Text>
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
        flexDirection: 'row',
    },

    textView: {
        marginTop: 6,
    },
});