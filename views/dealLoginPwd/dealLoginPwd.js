import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

export default class DealLoginPwd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pwd: '',
            pwd2: '',
        };
    }

    render() {
        return (
            <View style={{marginTop: 20}}>
                <View style={styles.wrap}>
                    <View style={styles.cell}>
                        <Text style={styles.cell_title}>登录密码</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="请输入登录密码"
                            secureTextEntry={true}
                            onChangeText={(pwd) => this.setState({pwd})}
                            value={this.state.pwd}/>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cell_title}>确认密码</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="请再次输入登录密码"
                            secureTextEntry={true}
                            onChangeText={(pwd2) => this.setState({pwd2})}
                            value={this.state.pwd2}/>
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
