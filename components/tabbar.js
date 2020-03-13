import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '../views/index/index';
import Team from '../views/team/team';
import TradeCenter from '../views/tradeCenter/tradeCenter';
import C2c from '../views/c2c/c2c';


// 底部图片
import home_active from '../img/tab/home_active.png';
import home from '../img/tab/home.png';
import team_active from '../img/tab/team_active.png';
import team from '../img/tab/team.png';
import user_active from '../img/tab/user_active.png';
import user from '../img/tab/user.png';
import trade_active from '../img/tab/trade_active.png';
import trade from '../img/tab/trade.png';
import c2c_active from '../img/tab/c2c_active.png';
import c2c from '../img/tab/c2c.png';

class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.tabbarBox}>
                <Image style={{height: 18, width: 18}} source={this.props.name}/>
            </View>
        );
    }
}

export default class Tabbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === '首页') {
                            iconName = focused ? home_active : home;
                        } else if (route.name === '团队') {
                            iconName = focused ? team_active : team;
                        } else if (route.name === '交易') {
                            iconName = focused ? trade_active : trade;
                        } else if (route.name === 'C2C交易') {
                            iconName = focused ? c2c_active : c2c;
                        }
                        return <Icon name={iconName} size={size} color={color}/>;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#000000',
                    inactiveTintColor: '#C1C1C1',
                }}>
                <Tab.Screen name="首页" component={Home}/>
                <Tab.Screen name="团队" component={Team}/>
                <Tab.Screen name="交易" component={TradeCenter}/>
                <Tab.Screen name="C2C交易" component={C2c}/>
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    tabbarWrap: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 50,
        borderTopWidth: 0.5,
        borderTopColor: '#828282',
        backgroundColor: '#FFFFFF',
    },
    tabbarBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabbarBox_text: {
        marginTop: 4,
        fontSize: 10,
        color: '#C1C1C1',
    },
    active_tab: {
        color: '#000',
    },
});
