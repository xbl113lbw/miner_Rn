import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

/*webview*/
class MyInlineWeb extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let time = global.formatDate(this.props.webObj.create_time, 2);
        let webHtml = `<div style="margin:30px;padding: 20px">
            <h1 style="font-size: 40px;font-weight: bold;text-align: center">${this.props.webObj.notice_title}</h1>
            <div style="font-size:30px;text-align: right;color:#999;margin-bottom:40px">${time}</div>
            <div style="font-size: 40px;font-weight: bold;">${this.props.webObj.notice_content}</div>
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
        this.state = {
            webObj: {},
        };
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getData();
        });
    }

    getData() {
        let {id} = this.props.route.params;
        global.Ajax('appapi/index/getNotice', {id: id}).then(res => {
            if (res.code === 1) {
                this.setState({
                    webObj: res.data,
                });
            }
        });
    }

    render() {
        return (
            <MyInlineWeb id={id} webObj={this.state.webObj}/>
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
