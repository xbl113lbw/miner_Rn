import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{marginTop: 8, backgroundColor: '#FFFFFF', marginBottom: 30}}>
                {/*用户转账*/}
                <TouchableOpacity style={styles.nav} onPress={() => {
                    this.props.navigation.navigate('Transfer');
                }}>
                    <View style={styles.nav_left}>
                        <Image source={require('../../img/user/transfer.png')} style={{width: 22, height: 19}}/>
                        <Text style={styles.nav_left_text}>用户转账</Text>
                    </View>
                    <Text style={styles.nav_right}>&gt;</Text>
                </TouchableOpacity>
                {/*实名认证*/}
                <TouchableOpacity style={styles.nav} onPress={() => {
                    this.props.navigation.navigate('Certification');
                }}>
                    <View style={styles.nav_left}>
                        <Image source={require('../../img/user/cell_icon1.png')} style={{width: 21, height: 16}}/>
                        <Text style={styles.nav_left_text}>实名认证</Text>
                    </View>
                    <Text style={styles.nav_right}>&gt;</Text>
                </TouchableOpacity>
                {/*安全中心*/}
                <TouchableOpacity style={styles.nav} onPress={() => {
                    this.props.navigation.navigate('SafeCenter');
                }}>
                    <View style={styles.nav_left}>
                        <Image source={require('../../img/user/cell_icon2.png')} style={{width: 17, height: 20}}/>
                        <Text style={styles.nav_left_text}>安全中心</Text>
                    </View>
                    <Text style={styles.nav_right}>&gt;</Text>
                </TouchableOpacity>
                {/*账户记录*/}
                <TouchableOpacity style={styles.nav} onPress={() => {
                    this.props.navigation.navigate('AccountRecord');
                }}>
                    <View style={styles.nav_left}>
                        <Image source={require('../../img/user/cell_icon3.png')} style={{width: 18, height: 23}}/>
                        <Text style={styles.nav_left_text}>账户记录</Text>
                    </View>
                    <Text style={styles.nav_right}>&gt;</Text>
                </TouchableOpacity>
                {/*公告*/}
                <TouchableOpacity style={styles.nav} onPress={() => {
                    this.props.navigation.navigate('NoticeList');
                }}>
                    <View style={styles.nav_left}>
                        <Image source={require('../../img/user/cell_icon4.png')} style={{width: 19, height: 20}}/>
                        <Text style={styles.nav_left_text}>公告</Text>
                    </View>
                    <Text style={styles.nav_right}>&gt;</Text>
                </TouchableOpacity>
                {/*退出登录*/}
                <View style={styles.nav}>
                    <View style={styles.nav_left}>
                        <Image source={require('../../img/user/cell_icon5.png')} style={{width: 19, height: 17}}/>
                        <Text style={styles.nav_left_text}>退出登录</Text>
                    </View>
                    <Text style={styles.nav_right}>&gt;</Text>
                </View>
            </View>
        );
    }
}

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <Image source={require('../../img/user/bg.png')} style={styles.bg}/>
                {/*顶部信息*/}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 22,
                    marginRight: 22,
                    marginTop: 35,
                }}>
                    <Image source={require('../../img/user/avatar.png')} style={styles.user_img}/>
                    <View>
                        <Text style={styles.user_info}>用户账号：<Text style={styles.user_info_num}>131138790</Text></Text>
                        <Text style={styles.user_info}>用户编号：<Text style={styles.user_info_num}>131138790</Text></Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.user_info}>用户等级：</Text>
                            <ImageBackground source={require('../../img/user/level.png')} style={styles.levelBg}>
                                <Text style={{fontSize: 10, color: '#fff'}}>新注册</Text>
                            </ImageBackground>
                        </View>
                    </View>
                </View>
                {/*详细信息*/}
                <View style={styles.coinInfo}>
                    {/*xmi*/}
                    <View style={[styles.coinInfo_box, styles.boxShadow]}>
                        <Image source={require('../../img/user/xmi.png')} style={styles.coinInfo_box_img}/>
                        <View>
                            <Text style={styles.coinInfo_box_text}>XMI</Text>
                            <Text style={styles.coinInfo_box_num}>0.0222</Text>
                        </View>
                    </View>
                    {/*usdt*/}
                    <View style={[styles.coinInfo_box, styles.boxShadow]}>
                        <Image source={require('../../img/user/usdt.png')} style={styles.coinInfo_box_img}/>
                        <View>
                            <Text style={styles.coinInfo_box_text}>USDT</Text>
                            <Text style={styles.coinInfo_box_num}>0.0222</Text>
                        </View>
                    </View>
                    {/*累计产量*/}
                    <View style={[styles.coinInfo_box, styles.boxShadow]}>
                        <Image source={require('../../img/user/info_icon2.png')} style={styles.coinInfo_box_img}/>
                        <View>
                            <Text style={styles.coinInfo_box_text}>累计产量</Text>
                            <Text style={styles.coinInfo_box_num}>0.0222</Text>
                        </View>
                    </View>
                    {/*有效矿机*/}
                    <View style={[styles.coinInfo_box, styles.boxShadow]}>
                        <Image source={require('../../img/user/info_icon3.png')} style={styles.coinInfo_box_img}/>
                        <View>
                            <Text style={styles.coinInfo_box_text}>有效矿机</Text>
                            <Text style={styles.coinInfo_box_num}>0.0222</Text>
                        </View>
                    </View>
                    {/*总收益*/}
                    <View style={[styles.coinInfo_box, styles.boxShadow]}>
                        <Image source={require('../../img/user/info_icon4.png')} style={styles.coinInfo_box_img}/>
                        <View>
                            <Text style={styles.coinInfo_box_text}>总收益</Text>
                            <Text style={styles.coinInfo_box_num}>0.0222</Text>
                        </View>
                    </View>
                    {/*个人算力*/}
                    <View style={[styles.coinInfo_box, styles.boxShadow]}>
                        <Image source={require('../../img/user/info_icon5.png')} style={styles.coinInfo_box_img}/>
                        <View>
                            <Text style={styles.coinInfo_box_text}>个人算力</Text>
                            <Text style={styles.coinInfo_box_num}>0.0222</Text>
                        </View>
                    </View>
                </View>
                {/*导航*/}
                <Nav navigation={this.props.navigation}/>
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
    bg: {
        width: '100%',
        height: 195,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    user_img: {
        width: 61,
        height: 61,
        marginRight: 24,
    },
    levelBg: {
        width: 63,
        height: 19,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    user_info: {
        marginBottom: 9,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#BADFCB',
    },
    user_info_num: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    coinInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 27,
        marginLeft: 20,
        marginRight: 20,
    },
    coinInfo_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        height: 62,
        marginBottom: 8,
        borderRadius: 10,
    },
    coinInfo_box_img: {
        width: 34,
        height: 34,
        marginRight: 18,
    },
    coinInfo_box_text: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#4F5668',
    },
    coinInfo_box_num: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4F5668',
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    nav_left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nav_left_text: {
        marginLeft: 13,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333333',
    },
    nav_right: {
        fontSize: 20,
        color: '#DDDDDD',
    },
});
