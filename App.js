// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginCom from './views/login/login';
import registered from './views/registered/registered';
import Home from './views/index/index';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginCom}
                              options={{
                                  headerShown: false,
                                  headerMode: 'none',
                              }}/>
                <Stack.Screen name="registered" component={registered}
                              options={{
                                  headerShown: false,
                                  headerMode: 'none',
                              }}/>
                <Stack.Screen name="Home" component={Home}
                              options={{
                                  headerShown: false,
                                  headerMode: 'none',
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
