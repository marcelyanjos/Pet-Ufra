import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from './CustomTabBar';

import Home from '../src/pages/Main';
import Calendar from '../src/pages/Calendar';
import Map from '../src/pages/Map';
import Adopt from '../src/pages/Adopt';
import Donation from '../src/pages/Donation';
import Informations from '../src/pages/Infos';
import Profile from '../src/pages/Profile';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator screenOptions={{headerShown:false}} tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Adopt" component={Adopt} />
        <Tab.Screen name="Donation" component={Donation} />
        <Tab.Screen name="Informations" component={Informations} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);