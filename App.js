// In App.js in a new project

import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginCom from './views/login/login';
import registered from './views/registered/registered';
import Home from './views/index/index';
import Team from './views/team/team';
import Tabbar from './components/tabbar';

const Stack = createStackNavigator();

function getHeaderTitle({route}) {
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
                    <View style={{paddingRight: 20}}>
                        <Text style={{fontSize: 14, color: '#000000'}}>交易记录</Text>
                    </View>
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
                <Stack.Screen name="registered" component={registered}
                              options={{
                                  headerShown: false,
                                  headerMode: 'none',
                              }}/>
                {/*Tab页*/}
                <Stack.Screen name="Tab" component={Tabbar}
                              options={route => getHeaderTitle(route)}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
