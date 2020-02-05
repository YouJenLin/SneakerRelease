/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Upcoming from './Upcoming'
import Search from './Search'

const TabNavigator = createBottomTabNavigator({
    News: Upcoming,
  Search: Search,
});

export default createAppContainer(TabNavigator);
