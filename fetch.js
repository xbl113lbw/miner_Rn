import React, {Component} from 'react';
import * as RootNavigation from './RootNavigation.js';
import {Image} from 'react-native';
import {Toast} from 'teaset';
import Qs from 'qs';

const baseURL = {
    test: 'http://api.miner.chainck.com/index.php?s=/',
    online: 'https://api.xmi.cash/index.php?s=/',
};

class Loading extends Component {
    render() {
        return (
            <Image source={require('./img/loading.gif')} style={{width: 50, height: 50}}/>
        );
    }
}

/**
 url:请求地址
 methods:请求方法
 data:请求参数
 */
const Ajax = async (url, data, methods = 'post') => {
    const token = await global.AsyncStorage.getItem('token') || '';
    let loading = Toast.show({
        text: '请稍后...',
        icon: <Loading/>,
        position: 'center',
        duration: 100000,
    });
    return new Promise(res => {
        fetch(baseURL.test + url, {
            method: methods,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token,
            },
            body: Qs.stringify(data),
        })
            .then((response) => {
                return response.json();
            })
            /*统一处理逻辑*/
            .then(data => {
                Toast.hide(loading);
                // 登录失效
                if (data.code === 403 || data.code === 10001) {
                    global.AsyncStorage.clear();
                    RootNavigation.navigate('Login');
                    return;
                }
                if (data.code === 1) {
                    Toast.success(data.msg);
                } else {
                    Toast.fail(data.msg);
                }
                res(data);
            })
            .catch((error) => {
                console.error(error);
            });
    });
};

export default Ajax;
