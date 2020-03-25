import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TextInput,
    Button,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

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

class Publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            price: '',
            num: '',
            pwd: '',
        };
    }

    render() {
        return (
            <ScrollView>
                {/*绑定支付方式*/}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PayType')}>
                    <ImageBackground source={require('../../img/c2c/pubBg.png')} style={styles.bindPayType}>
                        <Text>发布前至少绑定一种支付方式<Text style={{color: '#32C3FF'}}>绑定支付方式</Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
                {/*表单区域*/}
                <View style={styles.formWrap}>
                    <View style={styles.formWrap_title}>
                        <View style={{flex: 1}}>
                            <Text style={styles.formWrap_title_text}>可用USDT：</Text>
                            <Text style={styles.formWrap_title_num}>30000</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={styles.formWrap_title_text}>总价值：</Text>
                            <Text style={styles.formWrap_title_num}>30000</Text>
                        </View>
                    </View>
                    <View style={styles.formWrap_line}>
                        <Text style={styles.formWrap_line_title}>类型：</Text>
                        <View style={styles.formWrap_line_right}>
                            <Text
                                style={[styles.formWrap_line_btn, this.state.type === 0 ? styles.greenBtn : '']}
                                onPress={() => this.setState({type: 0})}>购买</Text>
                            <Text
                                style={[styles.formWrap_line_btn, this.state.type === 1 ? styles.greenBtn : '']}
                                onPress={() => this.setState({type: 1})}>出售</Text>
                        </View>
                    </View>
                    <View style={styles.formWrap_line}>
                        <Text style={styles.formWrap_line_title}>价格：</Text>
                        <View style={styles.formWrap_line_right}>
                            <TextInput
                                style={styles.formWrap_line_input}
                                placeholder="请输入价格"
                                defaultValue={this.state.price}
                            />
                        </View>
                    </View>
                    <View style={styles.formWrap_line}>
                        <Text style={styles.formWrap_line_title}>数量：</Text>
                        <View style={styles.formWrap_line_right}>
                            <TextInput
                                style={styles.formWrap_line_input}
                                placeholder="请输入数量"
                                defaultValue={this.state.num}
                            />
                            <Text style={styles.publish_line_item_coin}>XMI</Text>
                        </View>
                    </View>
                    <View style={styles.formWrap_line}>
                        <Text style={styles.formWrap_line_title}>交易类型：</Text>
                        <View style={styles.formWrap_line_right}>
                            <Image style={{width: 21, height: 18, marginRight: 12}} source={wx}/>
                            <Image style={{width: 20, height: 20, marginRight: 17}} source={ali}/>
                            <Image style={{width: 32, height: 20}} source={yl}/>
                        </View>
                    </View>
                    <View style={styles.formWrap_line}>
                        <Text style={styles.formWrap_line_title}>交易密码：</Text>
                        <View style={styles.formWrap_line_right}>
                            <TextInput
                                style={styles.formWrap_line_input}
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
            </ScrollView>
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

    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            console.log('xxxxx');
        });
    }

    componentWillUnmount() {
        this._unsubscribe();
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
                {
                    this.state.navIndex === 2 && <Publish navigation={this.props.navigation}/>
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
    bindPayType: {
        width: '100%',
        height: 54,
        marginBottom: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formWrap: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        padding: 22,
        borderRadius: 10,
        elevation: 1,
        shadowColor: 'rgba(226,226,226,0.5)',  //  阴影颜色
        shadowOffset: {width: 0, height: 0},  // 阴影偏移
        backgroundColor: '#fff',
    },
    formWrap_title: {
        flexDirection: 'row',
        marginBottom: 17,
    },
    formWrap_title_text: {
        marginBottom: 20,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
    },
    formWrap_title_num: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#16CF7A',
    },
    formWrap_line: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    formWrap_line_title: {
        width: 80,
        marginRight: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
    },
    formWrap_line_input: {
        flex: 1,
    },
    publish_line_item_coin: {
        paddingRight: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#7B8292',
    },
    formWrap_line_right: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },
    formWrap_line_btn: {
        width: 60,
        height: 33,
        marginRight: 10,
        lineHeight: 33,
        textAlign: 'center',
        backgroundColor: '#F2F2F2',
    },
});
