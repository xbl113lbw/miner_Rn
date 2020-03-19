import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

/*webview*/
class MyInlineWeb extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let webHtml = `<div style="margin:30px;padding: 20px">
            <h1 style="font-size: 60px;font-weight: bold;text-align: center">Hello world</h1>
            <div style="font-size:30px;text-align: right;color:#999;margin-bottom:40px">2019-09-26 11:52:32</div>
            <div style="font-size: 40px;font-weight: bold;">内容${this.props.id}</div>
            </div>`;

        return (
            <WebView
                originWhitelist={['*']}
                source={{html: webHtml}}
            />
        );
    }
}

export default class NoticeInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {id} = this.props.route.params;
        return (
            <MyInlineWeb id={id}/>
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
    content: {
        padding: 17,
        borderRadius: 10,
    },
    content_title: {
        marginBottom: 14,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3E3E3E',
        textAlign: 'center',
    },
    content_time: {
        marginBottom: 20,
        fontSize: 10,
        color: '#999',
        textAlign: 'right',
    },
});
