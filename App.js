// In App.js in a new project

import * as React from 'react';
import {Text, Image, TouchableOpacity, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './RootNavigation';

import Tabbar from './components/tabbar';
import LoginCom from './views/login/login';
import Registered from './views/registered/registered';
import Share from './views/share/share';
import ShareLists from './views/share/shareLists';
import ShareImg from './views/share/shareImg';
import UploadImage from './views/uploadImage/uploadImage';
import Recharge from './views/recharge/recharge';
import Withdraw from './views/withdraw/withdraw';
import InviteCode from './views/inviteCode/inviteCode';
import MyMiner from './views/myMiner/myMiner';
import Group from './views/group/group';
import TradeList from './views/tradeList/tradeList';
import Transfer from './views/transfer/transfer';
import Certification from './views/certification/certification';
import SafeCenter from './views/safeCenter/safeCenter';
import DealPwd from './views/dealPwd/dealPwd';
import DealLoginPwd from './views/dealLoginPwd/dealLoginPwd';
import AccountRecord from './views/accountRecord/accountRecord';
import NoticeList from './views/noticeList/noticeList';
import NoticeInfo from './views/noticeInfo/noticeInfo';
import MyC2c from './views/myC2c/myC2c';
import Order from './views/order/order';
import OrderSuccess from './views/orderSuccess/orderSuccess';
import PayType from './views/payType/payType';
import Chat from './views/chat/chat';

import Ajax from './fetch';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

// 全局属性
global.Ajax = Ajax;
global.AsyncStorage = AsyncStorage;
global.baseUrl = 'http://api.miner.chainck.com/index.php?s=/';
/* 时间格式化 */
global.formatDate = (time, type = 1) => {
    let date = new Date(time * 1000);
    let object = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        'H+': date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        'm+': date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
        's+': date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
    };
    switch (type) {
        case 1:
            return `${object['y+']}-${object['M+']}-${object['d+']}`;
        case 2:
            return `${object['y+']}-${object['M+']}-${object['d+']} ${object['H+']}:${object['m+']}:${object['s+']}`;
    }
};

function getHeaderTitle({navigation, route}) {
    const routeName = route.state ? route.state.routes[route.state.index].name : route.params?.screen || '首页';
    switch (routeName) {
        case '首页':
            return {
                headerShown: false,
                headerMode: 'none',
            };
        case '团队':
            return {
                title: '团队',
            };
        case '交易':
            return {
                title: '交易中心',
                headerRight: () => (
                    <TouchableOpacity style={{paddingRight: 20}}
                                      onPress={() => {
                                          navigation.navigate('TradeList');
                                      }}>
                        <Text style={{fontSize: 14, color: '#000000'}}>交易记录</Text>
                    </TouchableOpacity>
                ),
            };
        case 'C2C交易':
            return {
                title: 'C2C交易',
                headerRight: () => (
                    <TouchableOpacity style={{paddingRight: 20}} onPress={() => {
                        navigation.navigate('MyC2c');
                    }}>
                        <Image style={{height: 16, width: 14}} source={require('./img/c2c/c2c_right.png')}/>
                    </TouchableOpacity>
                ),
            };
        case '个人':
            return {
                headerShown: false,
                headerMode: 'none',
            };
    }
}

function App() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Tab">
                {/*Tab页*/}
                <Stack.Screen name="Tab" component={Tabbar}
                              options={(navigation, route) => getHeaderTitle(navigation, route)}/>
                {/*登录*/}
                <Stack.Screen name="Login" component={LoginCom}
                              options={{
                                  headerShown: false,
                                  headerMode: 'none',
                              }}/>
                {/*注册*/}
                <Stack.Screen name="registered" component={Registered}
                              options={{
                                  headerShown: false,
                                  headerMode: 'none',
                              }}/>
                {/*每日分享*/}
                <Stack.Screen name="Share" component={Share}
                              options={navigation => ({
                                  title: '每日分享',
                                  headerRight: () => (
                                      <TouchableOpacity style={{paddingRight: 20}}
                                                        onPress={() => {
                                                            navigation.navigation.navigate('ShareLists');
                                                        }}>
                                          <Image style={{height: 16, width: 14}}
                                                 source={require('./img/c2c/c2c_right.png')}/>
                                      </TouchableOpacity>
                                  ),
                              })}/>
                {/*分享记录*/}
                <Stack.Screen name="ShareLists" component={ShareLists}
                              options={{
                                  title: '分享记录',
                              }}/>
                {/*分享图片*/}
                <Stack.Screen name="ShareImg" component={ShareImg}
                              options={{
                                  title: '分享图片',
                              }}/>
                {/*上传图片*/}
                <Stack.Screen name="UploadImage" component={UploadImage}
                              options={{
                                  title: '上传图片',
                              }}/>
                {/*充币*/}
                <Stack.Screen name="Recharge" component={Recharge}
                              options={(navigation) => ({
                                  title: '充币',
                                  headerRight: () => (
                                      <TouchableOpacity style={{paddingRight: 20}}
                                                        onPress={() => {
                                                            navigation.navigation.navigate('AccountRecord');
                                                        }}>
                                          <Text style={{fontSize: 14, color: '#000000'}}>充值记录</Text>
                                      </TouchableOpacity>
                                  ),
                              })}/>
                {/*提币*/}
                <Stack.Screen name="Withdraw" component={Withdraw}
                              options={{
                                  title: '提币',
                              }}/>
                {/*邀请码*/}
                <Stack.Screen name="InviteCode" component={InviteCode}
                              options={{
                                  title: '邀请码',
                              }}/>
                {/*我的矿机*/}
                <Stack.Screen name="MyMiner" component={MyMiner}
                              options={{
                                  headerShown: false,
                                  headerMode: 'none',
                              }}/>
                {/*拼团*/}
                <Stack.Screen name="Group" component={Group}
                              options={{
                                  title: '',
                              }}/>
                {/*交易记录*/}
                <Stack.Screen name="TradeList" component={TradeList}
                              options={{
                                  title: '交易记录',
                              }}/>
                {/*用户转账*/}
                <Stack.Screen name="Transfer" component={Transfer}
                              options={{
                                  title: '用户转账',
                              }}/>
                {/*实名认证*/}
                <Stack.Screen name="Certification" component={Certification}
                              options={{
                                  title: '实名认证',
                              }}/>
                {/*安全中心*/}
                <Stack.Screen name="SafeCenter" component={SafeCenter}
                              options={{
                                  title: '安全中心',
                              }}/>
                {/*交易密码*/}
                <Stack.Screen name="DealPwd" component={DealPwd}
                              options={{
                                  title: '交易密码',
                              }}/>
                {/*登录密码*/}
                <Stack.Screen name="DealLoginPwd" component={DealLoginPwd}
                              options={{
                                  title: '登录密码',
                              }}/>
                {/*账户记录*/}
                <Stack.Screen name="AccountRecord" component={AccountRecord}
                              options={{
                                  title: '账户记录',
                              }}/>
                {/*公告*/}
                <Stack.Screen name="NoticeList" component={NoticeList}
                              options={{
                                  title: '公告',
                              }}/>
                {/*通知公告*/}
                <Stack.Screen name="NoticeInfo" component={NoticeInfo}
                              options={{
                                  title: '通知公告',
                              }}/>
                {/*我的C2C*/}
                <Stack.Screen name="MyC2c" component={MyC2c}
                              options={{
                                  title: 'C2C',
                              }}/>
                {/*购买订单*/}
                <Stack.Screen name="Order" component={Order}
                              options={{
                                  title: '购买订单',
                              }}/>
                {/*已完成*/}
                <Stack.Screen name="OrderSuccess" component={OrderSuccess}
                              options={{
                                  title: '已完成',
                              }}/>
                {/*支付方式*/}
                <Stack.Screen name="PayType" component={PayType}
                              options={{
                                  title: '支付方式',
                              }}/>
                {/*聊天页*/}
                <Stack.Screen name="Chat" component={Chat}
                              options={{
                                  title: '聊天',
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
