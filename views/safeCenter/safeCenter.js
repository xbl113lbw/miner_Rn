import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default class safeCenter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{margin: 15}}>
                <View style={styles.wrap}>
                    <TouchableOpacity style={[styles.cell, styles.boxShadow]} onPress={() => {
                        this.props.navigation.navigate('DealPwd');
                    }}>
                        <Text style={styles.cell_title}>交易密码</Text>
                        <Image source={require('../../img/right_icon.png')} style={{width: 8, height: 14}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cell, styles.boxShadow]} onPress={() => {
                        this.props.navigation.navigate('DealLoginPwd');
                    }}>
                        <Text style={styles.cell_title}>登录密码</Text>
                        <Image source={require('../../img/right_icon.png')} style={{width: 8, height: 14}}/>
                    </TouchableOpacity>
                </View>
            </View>
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
        paddingTop: 20,
        borderRadius: 10,
    },
    cell: {
        height: 51,
        marginBottom: 13,
        paddingLeft: 17,
        paddingRight: 17,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    cell_title: {
        marginRight: 26,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333333',
    },
});
