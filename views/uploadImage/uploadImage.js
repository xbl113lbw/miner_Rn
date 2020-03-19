import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

export default class shareImg extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrap}>
                <View style={[styles.upBox, styles.boxShadow]}>
                    <Image source={require('../../img/upload/image_btn.png')} style={{width: 108, height: 94}}/>
                    <Text style={styles.upBox_text}>请点击上传图片</Text>
                </View>
                <Button
                    title="确认上传"
                    color="#1FC26D"
                    onPress={() => console.log(1)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boxShadow: {
        elevation: 2,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'rgba(226,226,226,0.4)',  //  阴影颜色
        shadowOffset: {width: 1, height: 0},  // 阴影偏移
        backgroundColor: '#fff',
    },
    wrap: {
        flex: 1,
        padding: 40,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: '#fff',
    },
    upBox: {
        marginBottom: 40,
        paddingTop: 47,
        paddingBottom: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    upBox_text: {
        marginTop: 24,
        color: '#10914A',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
