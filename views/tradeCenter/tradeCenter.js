import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, TextInput, Button} from 'react-native';

/*购买*/
class Buy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({item}) => <View style={styles.lists}>
                    <View style={styles.lists_item}>
                        <Text style={styles.lists_item_left}>189****2345</Text>
                        <Text style={styles.lists_item_right}>3000/USDT</Text>
                    </View>
                    <View style={styles.lists_item}>
                        <Text style={styles.lists_item_left}>数量：3000 XMI</Text>
                    </View>
                    <View style={styles.lists_item}>
                        <Text style={styles.lists_item_left}> </Text>
                        <Text style={[styles.lists_item_btn, styles.greenBtn]}>购买</Text>
                    </View>
                </View>}
            />
        );
    }
}

/*出售*/
class Sell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({item}) => <View style={styles.lists}>
                    <View style={styles.lists_item}>
                        <Text style={styles.lists_item_left}>189****2345</Text>
                        <Text style={styles.lists_item_right}>3000/USDT</Text>
                    </View>
                    <View style={styles.lists_item}>
                        <Text style={styles.lists_item_left}>数量：3000 XMI</Text>
                    </View>
                    <View style={styles.lists_item}>
                        <Text style={styles.lists_item_left}> </Text>
                        <Text style={[styles.lists_item_btn, styles.redBtn]}>出售</Text>
                    </View>
                </View>}
            />
        );
    }
}

/*发布订单*/
class Publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '',
            num: '',
            pwd: '',
            type: 0,
        };
    }

    render() {
        return (
            <View style={{marginRight: 18, marginLeft: 18}}>
                <View style={styles.publish_line}>
                    <View style={styles.publish_line_item}>
                        <Text style={styles.publish_line_item_title}>可用:</Text>
                        <Text style={styles.publish_line_item_num}>5000</Text>
                        <Text style={styles.publish_line_item_coin}>USDT</Text>
                    </View>
                    <View style={styles.publish_line_item}>
                        <Text style={styles.publish_line_item_title}>可用:</Text>
                        <Text style={styles.publish_line_item_num}>5000</Text>
                        <Text style={styles.publish_line_item_coin}>XMI</Text>
                    </View>
                </View>
                <View style={styles.publish_line}>
                    <View style={styles.publish_line_item}>
                        <Text style={styles.publish_line_item_title}>类型:</Text>
                        <Text
                            style={[styles.publish_line_item_btn, this.state.type === 0 ? styles.greenBtn : '']}
                            onPress={() => this.setState({type: 0})}>股买</Text>
                        <Text
                            style={[styles.publish_line_item_btn, this.state.type === 1 ? styles.greenBtn : '']}
                            onPress={() => this.setState({type: 1})}>出售</Text>
                    </View>
                </View>
                <View style={styles.publish_line}>
                    <View style={styles.publish_line_item}>
                        <Text style={styles.publish_line_item_title}>价格:</Text>
                        <TextInput
                            style={styles.publish_line_item_input}
                            placeholder="请输入价格"
                            defaultValue={this.state.price}
                        />
                    </View>
                    <View style={styles.publish_line_item}>
                        <Text style={styles.publish_line_item_title}>数量:</Text>
                        <TextInput
                            style={styles.publish_line_item_input}
                            placeholder="请输入数量"
                            defaultValue={this.state.num}
                        />
                        <Text style={styles.publish_line_item_coin}>XMI</Text>
                    </View>
                </View>
                <View style={styles.publish_line}>
                    <View style={[styles.last_item]}>
                        <Text style={styles.publish_line_item_title}>交易密码:</Text>
                        <TextInput
                            style={styles.publish_line_item_input}
                            placeholder="请输入交易密码"
                            secureTextEntry={true}
                            defaultValue={this.state.pwd}
                        />
                    </View>
                </View>
                <Button
                    onPress={() => console.log(1)}
                    title="发布订单"
                    color="#1FC26D"/>
            </View>
        );
    }
}

export default class tradeCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navIndex: 0,
        };
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
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
                {
                    this.state.navIndex === 2 && <Publish/>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 18,
        marginRight: 18,
        marginBottom: 16,
    },
    nav_item: {
        width: 105,
        height: 36,
        lineHeight: 36,
        textAlign: 'center',
        borderRadius: 2,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#777777',
        backgroundColor: '#F2F2F2',
    },
    active_nav: {
        backgroundColor: '#1FC26D',
        color: '#fff',
    },
    lists: {
        height: 116,
        justifyContent: 'space-between',
        paddingLeft: 26,
        paddingRight: 26,
        paddingTop: 20,
        paddingBottom: 20,
        marginLeft: 19,
        marginRight: 19,
        marginBottom: 9,
        borderRadius: 10,
        elevation: 1,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'rgba(226,226,226,0.4)',  //  阴影颜色
        shadowOffset: {width: 0, height: 0},  // 阴影偏移
        backgroundColor: '#fff',
    },
    lists_item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    lists_item_left: {
        fontSize: 14,
        color: '#333333',
    },
    lists_item_right: {
        fontSize: 16,
        color: '#16CF7A',
    },
    lists_item_btn: {
        width: 77,
        height: 25,
        textAlign: 'center',
        lineHeight: 25,
        borderRadius: 13,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
    },
    publish_line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    publish_line_item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '45%',
        height: 40,
    },
    last_item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 40,
    },
    publish_line_item_title: {
        fontSize: 14,
        marginRight: 10,
        fontWeight: 'bold',
        color: '#333333',
    },
    publish_line_item_num: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#16CF7A',
    },
    publish_line_item_coin: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#7B8292',
    },
    publish_line_item_input: {
        flex: 1,
        lineHeight: 33,
    },
    publish_line_item_btn: {
        width: 86,
        height: 31,
        lineHeight: 31,
        marginRight: 10,
        textAlign: 'center',
        fontSize: 14,
        color: '#777777',
        backgroundColor: '#F2F2F2',
    },
});
