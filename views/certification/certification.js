import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

export default class Certification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            name: '',
            idCard: '',
        };
    }

    render() {
        return (
            <View style={{margin: 15}}>
                <View style={styles.wrap}>
                    <View style={styles.cell}>
                        <Text style={styles.cell_title}>真实姓名</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="请输入真实姓名"
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}/>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cell_title}>身份证号</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="请输入身份证号"
                            onChangeText={(idCard) => this.setState({idCard})}
                            value={this.state.idCard}/>
                    </View>
                </View>
                <Button
                    title="确认"
                    color="#1FC26D"
                    onPress={() => this.props.navigation.navigate('Tab')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    cell: {
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
        textAlign: 'right',
    },
});
