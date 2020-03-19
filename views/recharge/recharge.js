import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Clipboard, TouchableOpacity} from 'react-native';
import {Toast} from 'teaset';
import DownloadImage from '../../components/saveImg';

export default class Recharge extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{padding: 15, backgroundColor: '#fff'}}>
                <View style={[styles.boxShadow, {marginBottom: 12}]}>
                    <View style={[styles.chooseCoin, styles.boxShadow]}>
                        <Text style={{fontSize: 13, color: '#6F788B'}}>选择充值币种</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text
                                style={{fontSize: 14, color: '#333333', fontWeight: 'bold', marginRight: 13}}>BTC</Text>
                            <Image style={{width: 6, height: 10}} source={require('../../img/right_icon.png')}/>
                        </View>
                    </View>
                    {/*二维码*/}
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={styles.erCode} source={require('../../img/teaset1.png')}/>
                    </View>
                    {/*截取二维码保存到相册*/}
                    <TouchableOpacity style={{alignItems: 'center', marginBottom: 44}}
                                      onPress={() => {
                                          DownloadImage('https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png');
                                      }
                                      }>
                        <Text style={styles.saveBtn}>截取二维码保存到相册</Text>
                    </TouchableOpacity>
                    {/*充值地址*/}
                    <View style={styles.address}>
                        <Text style={{fontSize: 13, color: '#6F788B'}}>充值地址：</Text>
                        <Text style={styles.address_info}>ASDA45SDSA5D4A5SD4SDA5S4DA5SD46D4AWSDAD54ASA65S4...</Text>
                    </View>
                    {/*复制二维码按钮*/}
                    <TouchableOpacity style={{alignItems: 'center', marginTop: 25, marginBottom: 23}}
                                      onPress={() => {
                                          Toast.success('复制成功');
                                          Clipboard.setString('hello world');
                                      }}>
                        <Text style={styles.copyBtn}>复制二维码</Text>
                    </TouchableOpacity>
                </View>
                {/*规则*/}
                <View style={styles.rules}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../img/share/warn.png')} style={{width: 14, height: 12}}/>
                        <Text style={{marginLeft: 5, fontSize: 13, color: '#777777'}}>分享规则:</Text>
                    </View>
                    <Text style={{fontSize: 12, color: '#777777', marginBottom: 16, marginTop: 20}}>
                        1、最小充值金额: 1 USDT,小于最小金额的充值将不会上账
                    </Text>
                    <Text style={{fontSize: 12, color: '#777777', marginBottom: 16}}>
                        2、您的充值地址不会经常改变，可以重复充值;如有更改，我们会尽量通过网站公告或邮件通知您。
                    </Text>
                    <Text style={{fontSize: 12, color: '#777777'}}>
                        3、请务必确认电脑及浏览器安全，防止信息被篡改或泄露。
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    boxShadow: {
        elevation: 1,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'rgba(226,226,226,0.4)',  //  阴影颜色
        shadowOffset: {width: 0, height: 0},  // 阴影偏移
        backgroundColor: '#fff',
    },
    chooseCoin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        marginBottom: 30,
    },
    erCode: {
        width: 178,
        height: 178,
        padding: 7,
        marginBottom: 26,
    },
    saveBtn: {
        textAlign: 'center',
        width: 178,
        height: 36,
        lineHeight: 36,
        borderRadius: 5,
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#1FC26D',
    },
    copyBtn: {
        textAlign: 'center',
        width: 106,
        height: 36,
        lineHeight: 36,
        borderRadius: 5,
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#1FC26D',
    },
    address: {
        paddingLeft: 18,
        paddingRight: 18,
    },
    address_info: {
        marginTop: 13,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#424D63',
    },
    rules: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 15,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#F9F9F9',
    },
});
