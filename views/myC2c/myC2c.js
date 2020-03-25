import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import wx from '../../img/c2c/wx.png';
import wx_active from '../../img/c2c/wx_active.png';
import ali from '../../img/c2c/ali.png';
import ali_active from '../../img/c2c/ali_active.png';
import yl from '../../img/c2c/yl.png';
import yl_active from '../../img/c2c/yl_active.png';

/*我的广告*/
class MyAdvertising extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({item}) => <View style={[styles.wrap, styles.boxShadow]}>
                    <Text style={{fontSize: 12, fontWeight: 'bold', color: '#333', marginBottom: 25}}>广告ID：{item}</Text>
                    <View style={styles.wrap_line}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            价格：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>1.010 RMB</Text>
                        </Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            剩余数量：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>500</Text>
                        </Text>
                    </View>
                    <View style={styles.wrap_line}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            数量：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>500 SKC</Text>
                        </Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            类型：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>购买</Text>
                        </Text>
                    </View>
                    <View style={styles.wrap_line}>
                        <View style={styles.wrap_line_Box}>
                            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>支付方式：</Text>
                            <Image style={{width: 21, height: 18, marginRight: 12}} source={wx}/>
                            <Image style={{width: 20, height: 20, marginRight: 17}} source={ali}/>
                            <Image style={{width: 32, height: 20}} source={yl}/>
                        </View>
                        <View style={styles.wrap_line_Box}>
                            <Text style={[styles.wrap_line_Box_btn, {marginRight: 10}]}>撤销</Text>
                            <Text style={styles.wrap_line_Box_btn}>已销毁</Text>
                        </View>
                    </View>
                </View>}
            />
        );
    }
}

/*未完成订单*/
class UnfinishedOrder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({item}) => <TouchableOpacity style={[styles.wrap, styles.boxShadow]} onPress={() => {
                    this.props.navigation.navigate('Order');
                }}>
                    <View style={[styles.wrap_line, {marginBottom: 25}]}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#333'}}>
                            状态：<Text style={{color: '#FF932A'}}>等待付款</Text>
                        </Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#333'}}>备注码：437514</Text>
                    </View>
                    <View style={styles.wrap_line}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            价格：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>1.010 RMB</Text>
                        </Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            类型：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>购买</Text>
                        </Text>
                    </View>
                    <View style={styles.wrap_line}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            数量：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>500 SKC</Text>
                        </Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            总额：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>500</Text>
                        </Text>
                    </View>
                    <View style={styles.wrap_line}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>商家：131136454</Text>
                        <View style={styles.wrap_line_Box}>
                            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>支付方式：</Text>
                            <Image style={{width: 21, height: 18, marginRight: 12}} source={wx_active}/>
                            <Image style={{width: 20, height: 20, marginRight: 17}} source={ali_active}/>
                            <Image style={{width: 32, height: 20}} source={yl_active}/>
                        </View>
                    </View>
                </TouchableOpacity>}
            />
        );
    }
}

/*已完成订单*/
class FinishOrder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({item}) => <View style={[styles.wrap, styles.boxShadow]}>
                    <View style={styles.wrap_line}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            价格：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>1.010 RMB</Text>
                        </Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            类型：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>购买</Text>
                        </Text>
                    </View>
                    <View style={styles.wrap_line}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            数量：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>500 SKC</Text>
                        </Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            总额：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>500</Text>
                        </Text>
                    </View>
                    <View style={styles.wrap_line}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>商家：131136454</Text>
                        <Text style={styles.wrap_line_Box_btn}>已销毁</Text>
                    </View>
                </View>}
            />
        );
    }
}

/*我的申诉*/
class Complain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({item}) => <View style={[styles.wrap, styles.boxShadow]}>
                    <View style={styles.wrap_line}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            订单号：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>123456789</Text>
                        </Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            价格：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>500 RMB/USDT</Text>
                        </Text>
                    </View>
                    <View style={styles.wrap_line}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            数量：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>500 USDT</Text>
                        </Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#777'}}>
                            总额：
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#1FC26D'}}>500</Text>
                        </Text>
                    </View>
                </View>}
            />
        );
    }
}

export default class MyC2c extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navIndex: 0,
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.nav}>
                    <Text style={[styles.nav_item, this.state.navIndex === 0 ? styles.active_nav : '']}
                          onPress={() => this.setState({navIndex: 0})}>我的广告</Text>
                    <Text style={[styles.nav_item, this.state.navIndex === 1 ? styles.active_nav : '']}
                          onPress={() => this.setState({navIndex: 1})}>未完成订单</Text>
                    <Text style={[styles.nav_item, this.state.navIndex === 2 ? styles.active_nav : '']}
                          onPress={() => this.setState({navIndex: 2})}>已完成订单</Text>
                    <Text style={[styles.nav_item, this.state.navIndex === 3 ? styles.active_nav : '']}
                          onPress={() => this.setState({navIndex: 3})}>我的申诉</Text>
                </View>
                {
                    this.state.navIndex === 0 && <MyAdvertising/>
                }
                {
                    this.state.navIndex === 1 && <UnfinishedOrder navigation={this.props.navigation}/>
                }
                {
                    this.state.navIndex === 2 && <FinishOrder navigation={this.props.navigation}/>
                }
                {
                    this.state.navIndex === 3 && <Complain/>
                }
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
    nav: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    nav_item: {
        marginBottom: 13,
        paddingBottom: 6,
        fontSize: 16,
        color: '#777777',
        borderBottomWidth: 3,
        borderBottomColor: '#fff',
    },
    active_nav: {
        color: '#333333',
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderBottomColor: '#1FC26D',
    },
    wrap: {
        paddingTop: 11,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 14,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 14,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    wrap_line: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    wrap_line_Box: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrap_line_Box_btn: {
        width: 54,
        height: 21,
        lineHeight: 21,
        textAlign: 'center',
        fontSize: 11,
        borderRadius: 10,
        color: '#FFFFFF',
        backgroundColor: '#FF4D30',
    },
});
