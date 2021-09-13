import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from './CustomTabBar';

import Home from '../src/pages/Main';
import Calendar from '../src/pages/Calendar';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator screenOptions={{headerShown:false}} tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Calendar" component={Calendar} />
        {/* <Tab.Screen name="Appointments" component={Appointments} /> */}
        {/* <Tab.Screen name="Favorites" component={Favorites} /> */}
        {/* <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
);