import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image, TextInput, ScrollView} from 'react-native';
import {Toast} from 'teaset';

class InputBox extends Component {
    constructor(props) {
        super(props);
        // code 为验证码登录，password 密码登录
        this.state = {
            type: 'code',
            phone: '18188622791',
            code: '',
            pwd: '123456789',
            getCodeText: '获取验证码',
            codeFlag: true,
        };
        this.loginEvent = this.loginEvent.bind(this);
        this.getCode = this.getCode.bind(this);
    }

    loginEvent() {
        let obj = {
            login_type: this.state.type,
            mobile: this.state.phone,
            vertification: this.state.code,
            password: this.state.pwd,
        };
        global.Ajax('appapi/login/login', obj).then(res => {
            console.log('res', res);
            if (res.code === 1) {
                global.AsyncStorage.setItem('token', res.data.token);
                this.props.navigation.navigate('Tab');
            }
        });
    }

    getCode() {
        if (!this.state.codeFlag) {
            return;
        }
        if (!this.state.phone) {
            Toast.message('请输入手机号');
            return;
        }
        this.setState({
            codeFlag: false,
        });
        let num = 60;
        let t = setInterval(() => {
            this.setState({
                getCodeText: `${num}秒`,
            });
            num--;
            if (num <= 0) {
                this.setState({
                    codeFlag: true,
                    getCodeText: `获取验证码`,
                });
                clearInterval(t);
            }
        }, 1000);
        let params = {
            mobile: this.state.phone,
        };
        global.Ajax('appapi/login/sendSmsLoginCode', params).then(res => {
            console.log('res', res);
            if (res.code !== 1) {
                Toast.message(res.msg);
                clearInterval(t);
                this.setState({
                    codeFlag: true,
                    getCodeText: `获取验证码`,
                });
            }
        });
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
                {/*按钮*/}
                <View style={styles.btnBox}>
                    <Text style={[styles.inputBtn, this.state.type === 'code' ? styles.activeBtn : '']}
                          onPress={() => this.setState({type: 'code'})}>验证码登录</Text>
                    <Text style={[styles.inputBtn, this.state.type === 'password' ? styles.activeBtn : '']}
                          onPress={() => this.setState({type: 'password'})}>密码登录</Text>
                </View>
                {/*输入框*/}
                <View style={styles.inputBox}>
                    {/*手机号*/}
                    <View>
                        <View style={styles.title}>
                            <Image source={require('../../img/login/phone.png')}
                                   style={{width: 11, height: 16, marginRight: 7}}/>
                            <Text style={styles.title_text}>手机号</Text>
                        </View>
                        <View style={{marginBottom: 20}}>
                            <TextInput
                                style={styles.input}
                                placeholder="请输入手机号码"
                                onChangeText={(phone) => this.setState({phone})}
                                value={this.state.phone}/>
                        </View>
                    </View>
                    {this.state.type === 'code' ? (
                        // 验证码
                        <View>
                            <View style={styles.title}>
                                <Image source={require('../../img/login/pwd.png')}
                                       style={{width: 10, height: 13, marginRight: 7}}/>
                                <Text style={styles.title_text}>验证码</Text>
                            </View>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="请输入验证码"
                                    onChangeText={(code) => this.setState({code})}
                                    value={this.state.code}/>
                                <Text style={styles.input_code_btn}
                                      onPress={this.getCode}>{this.state.getCodeText}</Text>
                            </View>
                        </View>
                    ) : (
                        // 登录密码
                        <View>
                            <View style={styles.title}>
                                <Image source={require('../../img/login/pwd.png')}
                                       style={{width: 10, height: 13, marginRight: 7}}/>
                                <Text style={styles.title_text}>登录密码</Text>
                            </View>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={true}
                                    placeholder="请输入登录密码"
                                    onChangeText={(pwd) => this.setState({pwd})}
                                    value={this.state.pwd}/>
                            </View>
                        </View>
                    )}
                    {/*跳转注册页*/}
                    <View style={{alignItems: 'flex-end', paddingRight: 14, marginTop: 9, marginBottom: 12}}>
                        <Text style={styles.registered}
                              onPress={() => this.props.navigation.navigate('registered')}>
                            注册账号
                        </Text>
                    </View>
                    {/*登录按钮*/}
                    <Button
                        title="登录"
                        color="#1FC26D"
                        onPress={this.loginEvent}
                    />
                </View>
            </View>
        );
    }
}

export default class LoginCom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.wrapper}>
                <Image source={require('../../img/login/loginBg.png')}
                       style={{width: '100%', height: 340, position: 'absolute', top: 0}}/>
                <View style={styles.formWrap}>
                    <InputBox navigation={this.props.navigation}/>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        minHeight: '100%',
    },
    formWrap: { // 输入框包裹器
        width: '90%',
        marginTop: 200,
        marginLeft: '5%',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'rgba(56,109,65,0.12)',  //  阴影颜色
        shadowOffset: {width: 0, height: 0},  // 阴影偏移
        overflow: 'hidden',
    },
    btnBox: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        backgroundColor: 'black',
    },
    inputBtn: {
        flex: 1,
        lineHeight: 40,
        textAlign: 'center',
        backgroundColor: '#f2f2f2',
    },
    activeBtn: {
        color: '#26C472',
        backgroundColor: '#fff',
    },
    inputBox: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 25,
        marginBottom: 20,
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    title_text: {
        fontSize: 15,
        color: '#999',
    },
    input: {
        width: '100%',
        height: 44,
        borderRadius: 10,
        fontSize: 15,
        paddingLeft: 20,
        color: '#666',
        backgroundColor: '#F8F8F8',
    },
    input_code_btn: {
        position: 'absolute',
        right: 14,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1FC26D',
    },
    registered: {
        width: 54,
        fontSize: 13,
        color: '#1FC26D',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#1FC26D',
    },
});
