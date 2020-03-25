import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, ScrollView} from 'react-native';

class Bottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
        };
    }

    render() {
        return (
            <View style={styles.bottom}>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    onChangeText={(msg) => this.setState({msg})}
                    value={this.state.msg}/>
                <Text style={styles.bottom_btn}>发送</Text>
            </View>
        );
    }
}

export default class Chat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1, marginBottom: 49, backgroundColor: '#fff'}}>
                    <View style={[styles.msgBox, styles.mine_msg]}>
                        <View style={{alignItems: 'center', marginLeft: 13}}>
                            <Image source={require('../../img/teaset1.png')} style={styles.msgBox_userImg}/>
                            <Text style={styles.msgBox_name}>我</Text>
                        </View>
                        <View>
                            <Text style={styles.msgBox_time}>2019-03-13 15:03:12</Text>
                            <Text style={[styles.msgBox_msg, styles.mine]}>哇！那太好了。</Text>
                        </View>
                    </View>
                    <View style={styles.msgBox}>
                        <View style={{alignItems: 'center', marginRight: 13}}>
                            <Image source={require('../../img/teaset1.png')} style={styles.msgBox_userImg}/>
                            <Text style={styles.msgBox_name}>客户</Text>
                        </View>
                        <View>
                            <Text style={styles.msgBox_time}>2019-03-13 15:03:12</Text>
                            <Text style={[styles.msgBox_msg, styles.other]}>哇！那太好了。</Text>
                        </View>
                    </View>
                </ScrollView>
                {/*底部*/}
                <Bottom/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        height: 49,
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        borderRadius: 10,
        fontSize: 15,
        paddingLeft: 20,
        color: '#666',
        backgroundColor: '#F8F8F8',
    },
    bottom_btn: {
        width: 60,
        height: 36,
        marginLeft: 13,
        lineHeight: 36,
        borderRadius: 18,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#0EC15E',
    },
    msgBox: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginBottom: 20,
    },
    mine_msg: {
        flexDirection: 'row-reverse',
    },
    msgBox_userImg: {
        width: 35,
        height: 35,
        borderRadius: 50,
    },
    msgBox_name: {
        marginTop: 7,
        fontSize: 11,
        fontWeight: 'bold',
        color: '#777777',
    },
    msgBox_time: {
        marginBottom: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#777777',
    },
    msgBox_msg: {
        padding: 10,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#121212',
    },
    other: {
        backgroundColor: '#f1f1f1',
    },
    mine: {
        backgroundColor: '#1FC26D',
    },
});
