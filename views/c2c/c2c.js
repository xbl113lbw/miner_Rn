import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, TextInput, Button, Image} from 'react-native';

import wx from '../../img/c2c/wx.png';
import wx_active from '../../img/c2c/wx_active.png';
import ali from '../../img/c2c/ali.png';
import ali_active from '../../img/c2c/ali_active.png';
import yl from '../../img/c2c/yl.png';
import yl_active from '../../img/c2c/yl_active.png';

class Buy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4]}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => <View style={{marginRight: 18, marginLeft: 18}}>
                    <View style={styles.lists}>
                        <View style={styles.lists_line}>
                            <Text style={styles.lists_line_left}>189****2345</Text>
                            <Text>3000/USDT</Text>
                        </View>
                        <View style={styles.lists_line}>
                            <Text style={styles.lists_line_left}>数量：3000 USDT</Text>
                        </View>
                        <View style={styles.lists_line}>
                            <View style={{flexDirection: 'row'}}>
                                <Image style={{width: 21, height: 18, marginRight: 12}} source={wx}/>
                                <Image style={{width: 20, height: 20, marginRight: 17}} source={ali}/>
                                <Image style={{width: 32, height: 20}} source={yl}/>
                            </View>
                            <View style={[styles.lists_line_btn, styles.greenBtn]}>
                                <Text style={{color: '#fff'}}>购买</Text>
                            </View>
                        </View>
                    </View>
                </View>}/>
        );
    }
}

class Sell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4]}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => <View style={{marginRight: 18, marginLeft: 18}}>
                    <View style={styles.lists}>
                        <View style={styles.lists_line}>
                            <Text style={styles.lists_line_left}>189****2345</Text>
                            <Text>3000/USDT</Text>
                        </View>
                        <View style={styles.lists_line}>
                            <Text style={styles.lists_line_left}>数量：3000 USDT</Text>
                        </View>
                        <View style={styles.lists_line}>
                            <View style={{flexDirection: 'row'}}>
                                <Image style={{width: 21, height: 18, marginRight: 12}} source={wx}/>
                                <Image style={{width: 20, height: 20, marginRight: 17}} source={ali}/>
                                <Image style={{width: 32, height: 20}} source={yl}/>
                            </View>
                            <View style={[styles.lists_line_btn, styles.redBtn]}>
                                <Text style={{color: '#fff'}}>出售</Text>
                            </View>
                        </View>
                    </View>
                </View>}/>
        );
    }
}

export default class C2c extends Component {
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
                          onPress={() => this.setState({navIndex: 0})}>购买</Text>
                    <Text style={[styles.nav_item, this.state.navIndex === 1 ? styles.active_nav : '']}
                          onPress={() => this.setState({navIndex: 1})}>出售</Text>
                    <Text style={[styles.nav_item, this.state.navIndex === 2 ? styles.active_nav : '']}
                          onPress={() => this.setState({navIndex: 2})}>发布订单</Text>
                </View>
                {
                    this.state.navIndex === 0 && <Buy/>
                }
                {
                    this.state.navIndex === 1 && <Sell/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    greenBtn: {
        backgroundColor: '#1FC26D',
        color: '#fff',
    },
    redBtn: {
        backgroundColor: '#FF6349',
        color: '#fff',
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
    lists: {
        justifyContent: 'space-between',
        paddingLeft: 26,
        paddingRight: 26,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 13,
        height: 116,
        borderRadius: 10,
        elevation: 1,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'rgba(226,226,226,0.4)',  //  阴影颜色
        shadowOffset: {width: 0, height: 0},  // 阴影偏移
        backgroundColor: '#fff',
    },
    lists_line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lists_line_left: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    lists_line_btn: {
        width: 77,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        borderRadius: 13,
    },
});
