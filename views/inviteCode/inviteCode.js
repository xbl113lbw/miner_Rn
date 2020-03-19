import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, Clipboard} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Toast} from 'teaset';

export default class InviteCode extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ImageBackground source={require('../../img/invite_bg.jpg')} style={styles.bgWrap}>
                    <View style={styles.erCode}>
                        <QRCode
                            value={'11111'}
                            size={100}/>
                    </View>
                    <Text style={styles.inviteCode}>我的邀请码：3AYW9P</Text>
                    <TouchableOpacity style={styles.copyBtn}
                                      onPress={() => {
                                          Toast.success('复制成功');
                                          Clipboard.setString('hello world');
                                      }}>
                        <Text style={{fontSize: 15, color: '#fff'}}>复制推广链接</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bgWrap: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    erCode: {
        position: 'absolute',
        top: '60.5%',
    },
    inviteCode: {
        position: 'absolute',
        bottom: '15%',
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    copyBtn: {
        position: 'absolute',
        bottom: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        width: 178,
        height: 43,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
    },
});
