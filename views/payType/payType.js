import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Switch, TextInput, Button, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import wx_active from '../../img/c2c/wx_active.png';
import ali_active from '../../img/c2c/ali_active.png';
import yl_active from '../../img/c2c/yl_active.png';
import addImg from '../../img/subImg.png';

/*银联*/
class YlCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pwd: '',
            card: '',
            bank: '',
        };
    }

    render() {
        return (
            <View style={{marginTop: 30}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.form_title}>真实姓名</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入真实姓名"
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.form_title}>交易密码</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="请输入交易密码"
                        onChangeText={(pwd) => this.setState({pwd})}
                        value={this.state.pwd}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.form_title}>卡号</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入银行卡卡号"
                        onChangeText={(card) => this.setState({card})}
                        value={this.state.card}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                    <Text style={styles.form_title}>开户行</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入银行卡开户地区名称"
                        onChangeText={(bank) => this.setState({bank})}
                        value={this.state.bank}/>
                </View>
                <Button
                    title="提交"
                    color="#1FC26D"
                    onPress={() => console.log(1)}
                />
            </View>
        );
    }
}

/*支付宝*/
class AliCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pwd: '',
            account: '',
            avatarSource: null,
        };
        this.uploadEvent = this.uploadEvent.bind(this);
    }

    uploadEvent() {
        console.log(2);
        ImagePicker.launchImageLibrary({}, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: response.uri};
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    render() {
        return (
            <View style={{marginTop: 30}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                    <Text style={styles.form_title}>真实姓名</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入真实姓名"
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                    <Text style={styles.form_title}>交易密码</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="请输入交易密码"
                        onChangeText={(pwd) => this.setState({pwd})}
                        value={this.state.pwd}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}>
                    <Text style={styles.form_title}>支付宝账号</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入支付宝账号"
                        onChangeText={(account) => this.setState({account})}
                        value={this.state.account}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start', marginBottom: 20}}>
                    <Text style={styles.form_title}>收款二维码</Text>
                    <TouchableOpacity onPress={this.uploadEvent}>
                        <Image source={this.state.avatarSource ? this.state.avatarSource : addImg}
                               style={{width: 92, height: 92}}/>
                    </TouchableOpacity>
                </View>
                <Button
                    title="提交"
                    color="#1FC26D"
                    onPress={() => console.log(1)}
                />
            </View>
        );
    }
}

/*微信*/
class WxCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pwd: '',
            account: '',
            avatarSource: null,
        };
        this.uploadEvent = this.uploadEvent.bind(this);
    }

    uploadEvent() {
        console.log(2);
        ImagePicker.launchImageLibrary({}, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: response.uri};
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    render() {
        return (
            <View style={{marginTop: 30}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                    <Text style={styles.form_title}>真实姓名</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入真实姓名"
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                    <Text style={styles.form_title}>交易密码</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="请输入交易密码"
                        onChangeText={(pwd) => this.setState({pwd})}
                        value={this.state.pwd}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}>
                    <Text style={styles.form_title}>微信账号</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入微信账号"
                        onChangeText={(account) => this.setState({account})}
                        value={this.state.account}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start', marginBottom: 20}}>
                    <Text style={styles.form_title}>收款二维码</Text>
                    <TouchableOpacity onPress={this.uploadEvent}>
                        <Image source={this.state.avatarSource ? this.state.avatarSource : addImg}
                               style={{width: 92, height: 92}}/>
                    </TouchableOpacity>
                </View>
                <Button
                    title="提交"
                    color="#1FC26D"
                    onPress={() => console.log(1)}
                />
            </View>
        );
    }
}

export default class PayType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*switch开关*/
            ylFlag: false,
            aliFlag: false,
            wxFlag: false,
            /*现实隐藏控制*/
            showYl: false,
            showAli: false,
            showWx: false,
        };
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                {/*银联*/}
                <View style={[styles.wrap, styles.boxShadow, {marginTop: 15}]}>
                    <TouchableOpacity style={styles.payTypeBox} activeOpacity={0.8} onPress={() => {
                        this.setState({showYl: !this.state.showYl});
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{width: 22, height: 14, marginRight: 6}} source={yl_active}/>
                            <Text style={styles.payTypeBox_title}>绑定银行卡</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 12, color: '#4F5668', marginRight: 4}}>不显示</Text>
                            <Switch value={this.state.ylFlag} onValueChange={() => this.setState({
                                ylFlag: !this.state.ylFlag,
                            })}/>
                        </View>
                    </TouchableOpacity>
                    {this.state.showYl && <YlCom/>}
                </View>
                {/*支付宝*/}
                <View style={[styles.wrap, styles.boxShadow]}>
                    <TouchableOpacity style={styles.payTypeBox} activeOpacity={0.8} onPress={() => {
                        this.setState({showAli: !this.state.showAli});
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{width: 20, height: 20, marginRight: 8}} source={ali_active}/>
                            <Text style={styles.payTypeBox_title}>绑定支付宝</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 12, color: '#4F5668', marginRight: 4}}>不显示</Text>
                            <Switch value={this.state.aliFlag} onValueChange={() => this.setState({
                                aliFlag: !this.state.aliFlag,
                            })}/>
                        </View>
                    </TouchableOpacity>
                    {this.state.showAli && <AliCom/>}
                </View>
                {/*微信*/}
                <View style={[styles.wrap, styles.boxShadow]}>
                    <TouchableOpacity style={styles.payTypeBox} activeOpacity={0.8} onPress={() => {
                        this.setState({showWx: !this.state.showWx});
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{width: 21, height: 18, marginRight: 6}} source={wx_active}/>
                            <Text style={styles.payTypeBox_title}>绑定微信支付</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 12, color: '#4F5668', marginRight: 4}}>不显示</Text>
                            <Switch value={this.state.wxFlag} onValueChange={() => this.setState({
                                wxFlag: !this.state.wxFlag,
                            })}/>
                        </View>
                    </TouchableOpacity>
                    {this.state.showWx && <WxCom/>}
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
    wrap: {
        margin: 15,
        marginTop: 0,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    payTypeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    payTypeBox_title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
    },
    input: {
        flex: 1,
        height: 44,
        fontSize: 15,
        color: '#666',
        backgroundColor: '#F8F8F8',
    },
    form_title: {
        width: 90,
        fontSize: 15,
        color: '#333333',
        fontWeight: 'bold',
    },
});
