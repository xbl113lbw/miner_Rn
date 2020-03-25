import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Button, TouchableOpacity, TextInput} from 'react-native';
import {Toast} from 'teaset';

export default class withdraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: '',
            address: '',
            paypassword: '',
            fee: '',
            balance: '',
        };

        this.getWithdraw = this.getWithdraw.bind(this);
        this.widtdraw = this.widtdraw.bind(this);
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getWithdraw();
        });
    }

    getWithdraw() {
        global.Ajax('appapi/user/withdrawInfo', {coin: 'usdt'}).then((res) => {
            if (res.code === 1) {
                this.setState({
                    fee: res.data.fee,
                    balance: res.data.balance,
                });
            }
        });
    }

    widtdraw() {
        if (parseInt(this.state.num) > parseInt(this.state.balance)) {
            Toast.message('提现金额不能大余额');
            return;
        }
        if (!this.state.paypassword) {
            Toast.message('请输入交易密码');
            return;
        }
        let data = {
            num: this.state.num,
            coin: 'usdt',
            paypassword: this.state.paypassword,
            address: this.state.address,
        };
        global.Ajax('appapi/user/addCointowithdraw', data).then((res) => {
            if (res.code === 1) {
                console.log(res);
                Toast.message(res.msg || '提币成功');
                this.getWithdraw();
            }
        });
    }


    render() {
        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                <Image source={require('../../img/user/bg.png')} style={styles.bg}/>
                {/*币种选择*/}
                <View style={styles.topWrap}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 43,
                        marginBottom: 14,
                    }}>
                        <Text style={{fontSize: 13, color: '#C0C5D0'}}>选择币种类型</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 14, color: '#333', marginRight: 17, fontWeight: 'bold'}}>USDT</Text>
                            <Image style={{width: 6, height: 10}} source={require('../../img/right_icon.png')}/>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 43,
                    }}>
                        <Text style={{fontSize: 13, color: '#333', fontWeight: 'bold'}}>USDT余额</Text>
                        <Text style={{fontSize: 14, color: '#0EC15E', fontWeight: 'bold'}}>{this.state.balance}</Text>
                    </View>
                </View>
                <View style={{
                    marginLeft: 24,
                    marginRight: 24,
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                }}>
                    {/*提现数量*/}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 25,
                    }}>
                        <Text style={{fontSize: 15, color: '#333', fontWeight: 'bold'}}>USDT余额</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextInput
                                style={styles.input}
                                placeholder="请输入提现数量"
                                onChangeText={(num) => this.setState({num})}
                                value={this.state.num}/>
                            <Text style={{fontSize: 14, color: '#7B8292', fontWeight: 'bold'}}>USDT</Text>
                        </View>
                    </View>
                    {/*可提数量*/}
                    <View style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 35,
                    }}>
                        <Text style={{fontSize: 13, color: '#8D929C', fontWeight: 'bold'}}>
                            可提数量: <Text style={{color: '#333333'}}>{this.state.balance}</Text> USDT
                        </Text>
                        <Text style={{fontSize: 14, color: '#1FC26D', fontWeight: 'bold'}} onPress={() => {
                            this.setState({num: this.state.balance});
                        }}>全部</Text>
                    </View>
                    {/*钱包地址*/}
                    <View style={{marginBottom: 16}}>
                        <Text style={{fontSize: 15, color: '#333', fontWeight: 'bold', marginBottom: 11}}>钱包地址</Text>
                        <TextInput
                            style={[styles.input, {height: 43, paddingLeft: 13}]}
                            placeholder="请输入钱包地址"
                            onChangeText={(address) => this.setState({address})}
                            value={this.state.address}/>
                    </View>
                    {/*手续费、实际到账*/}
                    <View style={{paddingTop: 25, paddingBottom: 25}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 15,
                        }}>
                            <Text style={{fontSize: 13, color: '#6F788B', fontWeight: 'bold'}}>手续费</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 14, color: '#333', fontWeight: 'bold'}}>{this.state.fee}</Text>
                                <Text style={{fontSize: 14, color: '#7B8292', fontWeight: 'bold', marginLeft: 11}}>
                                    USDT
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 13, color: '#6F788B', fontWeight: 'bold'}}>实际到账</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 14, color: '#333', fontWeight: 'bold'}}>
                                    {(this.state.num - this.state.fee) > 0 ? this.state.num - this.state.fee : 0}
                                </Text>
                                <Text style={{fontSize: 14, color: '#7B8292', fontWeight: 'bold', marginLeft: 11}}>
                                    USDT
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/*交易密码*/}
                    <View style={{marginBottom: 41}}>
                        <Text style={{fontSize: 15, color: '#333', fontWeight: 'bold', marginBottom: 11}}>交易密码</Text>
                        <TextInput
                            style={[styles.input, {height: 43, paddingLeft: 13}]}
                            placeholder="请输入交易密码"
                            secureTextEntry={true}
                            onChangeText={(paypassword) => this.setState({paypassword})}
                            value={this.state.paypassword}/>
                    </View>
                    {/*按钮*/}
                    <Button
                        title="立即提币"
                        color="#1FC26D"
                        onPress={this.widtdraw}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: 195,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    topWrap: {
        margin: 24,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    input: {
        marginRight: 7,
        fontSize: 14,
        color: '#333',
    },
});
