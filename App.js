// In App.js in a new project

import * as React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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

const Stack = createStackNavigator();

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
                headerRight: () => (
                    <View style={{paddingRight: 20}}>
                        <Image style={{height: 3, width: 15}} source={require('./img/omit.png')}/>
                    </View>
                ),
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
                    <View style={{paddingRight: 20}}>
                        <Image style={{height: 16, width: 14}} source={require('./img/c2c/c2c_right.png')}/>
                    </View>
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
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
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
                              options={{
                                  title: '充币',
                                  headerRight: () => (
                                      <TouchableOpacity style={{paddingRight: 20}}
                                                        onPress={() => {
                                                            navigation.navigation.navigate('ShareLists');
                                                        }}>
                                          <Text style={{fontSize: 14, color: '#000000'}}>充值记录</Text>
                                      </TouchableOpacity>
                                  ),
                              }}/>
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
                                  title: '我的矿机',
                                  headerRight: () => (
                                      <TouchableOpacity style={{paddingRight: 20}}
                                                        onPress={() => {
                                                            Alert.alert(
                                                                '领取',
                                                                '矿机已产币： 1000',
                                                                [
                                                                    {
                                                                        text: '一键领取',
                                                                        onPress: () => console.log('一键领取'),
                                                                        style: 'cancel',
                                                                    },
                                                                ],
                                                            );
                                                        }}>
                                          <Text style={{fontSize: 14, color: '#000000'}}>一键领取</Text>
                                      </TouchableOpacity>
                                  ),
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
                {/*Tab页*/}
                <Stack.Screen name="Tab" component={Tabbar}
                              options={(navigation, route) => getHeaderTitle(navigation, route)}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
