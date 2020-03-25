import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

export default class Order extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1, marginBottom: 50}}>
                    <Image source={require('../../img/login/loginBg.png')} style={styles.bg}/>
                    {/*顶部信息*/}
                    <View style={styles.topInfo}>
                        <View>
                            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', marginBottom: 14}}>大哥</Text>
                            <Text style={{fontSize: 15, color: '#fff'}}>备注码 114363</Text>
                        </View>
                        <Image source={require('../../img/orderImg.png')} style={{width: 73, height: 80}}/>
                    </View>
                    {/*订单信息*/}
                    <View style={styles.orderInfo}>
                        <View style={styles.orderInfo_line}>
                            <Text style={{fontSize: 13, fontWeight: 'bold', color: '#777'}}>
                                订单号：<Text style={{color: '#1FC26D'}}>5</Text>
                            </Text>
                            <Text style={[styles.orderInfo_line_state, {color: '#FF932A'}]}>待付款</Text>
                        </View>
                        <View style={styles.orderInfo_line}>
                            <Text style={{fontSize: 13, fontWeight: 'bold', color: '#777'}}>
                                价格：
                                <Text style={{color: '#1FC26D'}}>1.000 RMB/USDT</Text>
                            </Text>
                        </View>
                        <View style={styles.orderInfo_line}>
                            <Text style={{fontSize: 13, fontWeight: 'bold', color: '#777'}}>
                                数量：
                                <Text style={{color: '#1FC26D'}}>500 USDT</Text>
                            </Text>
                        </View>
                        <View style={styles.orderInfo_line}>
                            <Text style={{fontSize: 13, fontWeight: 'bold', color: '#777'}}>总额：</Text>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#1FC26D'}}>500 RMB</Text>
                        </View>
                    </View>
                    {/*支付方式*/}
                    <View style={styles.payType}>
                        <Image source={require('../../img/orderImg.png')} style={{width: 44, height: 44}}/>
                        <View style={{marginLeft: 15}}>
                            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#333'}}>大哥 1234 5567</Text>
                            <Text style={{fontSize: 13, fontWeight: 'bold', color: '#333'}}>工商银行</Text>
                        </View>
                    </View>
                    {/*备注码*/}
                    <View
                        style={{
                            marginLeft: 15, marginRight: 15, marginBottom: 15,
                            padding: 20, borderRadius: 10,
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                            backgroundColor: '#fff',
                        }}>
                        <Text style={{fontSize: 13, color: '#333', fontWeight: 'bold'}}>付款时请填写备注码</Text>
                        <Text style={{fontSize: 13, color: '#FF3052', fontWeight: 'bold'}}>114726</Text>
                    </View>
                    {/*交易提示*/}
                    <View style={styles.topic}>
                        <Text style={{fontSize: 13, color: '#333', fontWeight: 'bold', marginBottom: 18}}>交易提示：</Text>
                        <Text style={styles.topic_line}>
                            1、您的汇款将直接进入卖方的账户，交易过程中卖方出售的数字资产由平台托管保护。
                        </Text>
                        <Text style={styles.topic_line}>
                            2、请在30分钟内完成付款，并务必点击“我已付款”，卖方确认收款后，系统会将数字资产划转到您的账户。
                            <Text style={{color: '#DF5334'}}>超过30分钟未点击“我已付款”，订单将自动撤销。</Text>
                        </Text>
                        <Text style={styles.topic_line}>
                            3、买方或广告方当日连续取消3笔订单，会限制当天的买入功能。查看详细交易规则。
                        </Text>
                        <Text style={[styles.topic_line, {marginBottom: 0}]}>
                            4、【我已付款】30分钟后，对方一直未放行的，可进行申述。
                        </Text>
                    </View>
                </ScrollView>
                {/*底部*/}
                <View style={styles.bottomWrap}>
                    <View style={styles.bottomWrap_imgWrap}>
                        <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 20}}>
                            <Image source={require('../../img/phone.png')} style={{width: 16, height: 19}}/>
                            <Text style={{fontSize: 10, color: '#121212', marginTop: 6}}>联系对方</Text>
                        </View>
                        <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} onPress={() => {
                            this.props.navigation.navigate('Chat');
                        }}>
                            <Image source={require('../../img/msg.png')} style={{width: 19, height: 19}}/>
                            <Text style={{fontSize: 10, color: '#121212', marginTop: 6}}>聊天</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomWrap_btnWrap}>
                        <Text style={styles.bottomWrap_btnWrap_btn}>取消订单</Text>
                        <Text style={[styles.bottomWrap_btnWrap_btn, styles.success]} onPress={() => {
                            this.props.navigation.navigate('OrderSuccess');
                        }}>我已付款</Text>
                    </View>
                </View>
            </View>
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
    bg: {
        width: '100%',
        height: 296,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    topInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40,
        marginLeft: 23,
        marginRight: 30,
        marginBottom: 12,
    },
    orderInfo: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    orderInfo_line: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    orderInfo_line_state: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    payType: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    topic: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    topic_line: {
        marginBottom: 16,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#777',
    },
    bottomWrap: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        paddingTop: 7,
        paddingBottom: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderTopWidth: 1,
        borderTopColor: '#EFF0F1',
        backgroundColor: '#fff',
    },
    bottomWrap_imgWrap: {
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomWrap_btnWrap: {
        flex: 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomWrap_btnWrap_btn: {
        width: 110,
        height: 32,
        lineHeight: 32,
        borderRadius: 16,
        borderWidth: 1,
        fontSize: 13,
        textAlign: 'center',
        color: '#121212',
        borderColor: '#E3E4E6',
        backgroundColor: '#fff',
    },
    success: {
        color: '#fff',
        borderColor: '#1FC26D',
        backgroundColor: '#1FC26D',
    },
});
