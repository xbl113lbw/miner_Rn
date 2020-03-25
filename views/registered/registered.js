import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Toast} from 'teaset';

class InputBox extends Component {
    constructor(props) {
        super(props);
        // code 为验证码注册处，password 密码注册
        let num = Math.random();
        this.captchaToken = Math.ceil(Math.random() * 10000000);
        this.state = {
            type: 'code',
            mobile: '17601042712',
            vertification: '',
            code: '',
            password: '',
            pid: '3AYW9P',
            ImgCodeSrc: `${global.baseUrl}/appapi/Captcha/index?t=${num}&token=${this.captchaToken}`,
            getCodeText: '获取验证码',
            codeFlag: true,
        };

        this.getImgCode = this.getImgCode.bind(this);
        this.getCode = this.getCode.bind(this);
        this.registeredEvent = this.registeredEvent.bind(this);
    }

    // 获取图片验证
    getImgCode() {
        let num = Math.random();
        this.captchaToken = Math.ceil(Math.random() * 10000000);
        let ImgCodeSrc = `${global.baseUrl}/appapi/Captcha/index?t=${num}&token=${this.captchaToken}`;
        this.setState({
            ImgCodeSrc,
        });
    }

    getCode() {
        if (!this.state.codeFlag) {
            return;
        }
        if (!this.state.mobile) {
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
            mobile: this.state.mobile,
            vertification: this.state.vertification,
            token: this.captchaToken,
        };
        global.Ajax('appapi/Register/sendSmsRegisterCode', params).then(res => {
            if (res.code !== 1) {
                clearInterval(t);
                this.getImgCode();
                this.setState({
                    codeFlag: true,
                    getCodeText: `获取验证码`,
                });
            }
        });
    }

    registeredEvent() {
        if (!this.state.mobile) {
            Toast.message('请输入手机号');
            return;
        }
        if (!this.state.vertification) {
            Toast.message('请输入图形验证码');
            return;
        }

        if (!this.state.pid) {
            Toast.message('请输入邀请码');
            return;
        }
        let parmas = {
            mobile: this.state.mobile,
            pid: this.state.pid,
            vertification: this.state.code,
            password: this.state.type === 'password' ? this.state.password : '',
            register_type: this.state.type === 'password' ? 'password' : '',
        };
        global.Ajax('appapi/Register/register', parmas).then(res => {
            if (res.code === 1) {
                global.AsyncStorage.setItem('token', res.data.token);
                this.props.navigation.navigate('Tab');
            } else {
                this.getImgCode();
            }
        });
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
                {/*按钮*/}
                <View style={styles.btnBox}>
                    <Text style={[styles.inputBtn, this.state.type === 'code' ? styles.activeBtn : '']}
                          onPress={() => this.setState({type: 'code'})}>验证码注册</Text>
                    <Text style={[styles.inputBtn, this.state.type === 'password' ? styles.activeBtn : '']}
                          onPress={() => this.setState({type: 'password'})}>密码注册</Text>
                </View>
                {/*输入框*/}
                <View style={styles.inputBox}>
                    {/*手机号*/}
                    <View style={{marginBottom: 20}}>
                        <View style={styles.title}>
                            <Image source={require('../../img/login/phone.png')}
                                   style={{width: 11, height: 16, marginRight: 7}}/>
                            <Text style={styles.title_text}>手机号</Text>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="请输入手机号码"
                                onChangeText={(mobile) => this.setState({mobile})}
                                value={this.state.mobile}/>
                        </View>
                    </View>
                    {/*图形验证码*/}
                    <View style={{marginBottom: 20}}>
                        <View style={styles.title}>
                            <Image source={require('../../img/login/safe.png')}
                                   style={{width: 12, height: 14, marginRight: 7}}/>
                            <Text style={styles.title_text}>图形验证码</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <TextInput
                                style={styles.input}
                                placeholder="请输入图形验证码"
                                onChangeText={(vertification) => this.setState({vertification})}
                                value={this.state.vertification}/>
                            <TouchableOpacity onPress={this.getImgCode} style={styles.code_img}>
                                <Image source={{uri: this.state.ImgCodeSrc}} style={styles.code_img}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {this.state.type === 'code' ? (
                        // 验证码
                        <View style={{marginBottom: 20}}>
                            <View style={styles.title}>
                                <Image source={require('../../img/login/safe.png')}
                                       style={{width: 12, height: 14, marginRight: 7}}/>
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
                        <View style={{marginBottom: 20}}>
                            <View style={styles.title}>
                                <Image source={require('../../img/login/pwd.png')}
                                       style={{width: 10, height: 13, marginRight: 7}}/>
                                <Text style={styles.title_text}>密码设置</Text>
                            </View>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={true}
                                    placeholder="请输入登录密码"
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.password}/>
                            </View>
                        </View>
                    )}
                    {/*邀请码*/}
                    <View>
                        <View style={styles.title}>
                            <Image source={require('../../img/login/safe.png')}
                                   style={{width: 12, height: 14, marginRight: 7}}/>
                            <Text style={styles.title_text}>邀请码</Text>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <TextInput
                                style={styles.input}
                                placeholder="请输入邀请码"
                                onChangeText={(pid) => this.setState({pid})}
                                value={this.state.pid}/>
                        </View>
                    </View>
                    {/*跳转登录页*/}
                    <View style={{alignItems: 'flex-end', paddingRight: 14, marginTop: 9, marginBottom: 12}}>
                        <Text style={styles.registered}
                              onPress={() => this.props.navigation.navigate('Login')}>
                            账号登录
                        </Text>
                    </View>
                    {/*注册按钮*/}
                    <Button
                        title="注册"
                        color="#1FC26D"
                        onPress={this.registeredEvent}
                    />
                </View>
            </View>
        );
    }
}

export default class registeredCom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Image source={require('../../img/login/loginBg.png')}
                       style={{position: 'absolute', top: 0, left: 0, width: '100%', height: 340}}>
                </Image>
                <ScrollView style={{flex: 1}}>
                    <View style={styles.formWrap}>
                        <InputBox navigation={this.props.navigation}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    formWrap: { // 输入框包裹器
        width: '90%',
        height: 530,
        marginTop: 200,
        marginBottom: 80,
        marginLeft: '5%',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 10,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'black',  //  阴影颜色
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
    code_img: {
        position: 'absolute',
        right: 18,
        width: 60,
        height: 23,
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
