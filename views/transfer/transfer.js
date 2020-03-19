import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

export default class Transfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            num: '',
            code: '',
        };
    }

    render() {
        return (
            <View style={{marginTop: 20}}>
                <View style={styles.wrap}>
                    <View style={styles.cell}>
                        <Text style={styles.cell_title}>对方账号</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="请输入对方账号"
                            onChangeText={(account) => this.setState({account})}
                            value={this.state.account}/>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cell_title}>转账数量</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="请输入转账数量"
                            onChangeText={(num) => this.setState({num})}
                            value={this.state.num}/>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cell_title}>验证码</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="请输入验证码"
                            onChangeText={(code) => this.setState({code})}
                            value={this.state.code}/>
                        <Text style={styles.getCode}>获取验证码</Text>
                    </View>
                </View>
                <View style={{marginLeft: 15, marginRight: 15}}>
                    <Button
                        title="确认"
                        color="#1FC26D"
                        onPress={() => this.props.navigation.navigate('Tab')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 18,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    cell: {
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cell_title: {
        width: 70,
        marginRight: 26,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333333',
    },
    input: {
        flex: 1,
    },
    getCode: {
        position: 'absolute',
        right: 0,
        color: '#1fc26d',
    },
});
