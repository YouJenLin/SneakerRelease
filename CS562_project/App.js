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
import { createStackNavigator } from 'react-navigation-stack'; 
import Upcoming from './Upcoming'
import Search from './Search'
import Product from './Product'

const TabNavigator = createBottomTabNavigator({
    News: Upcoming,
  Upcoming: Search,
}, {
  tabBarOptions: {

  }
});

const StackNavigator = createStackNavigator({
  SneakerRelease: TabNavigator,
  Product: {
    screen: Product,
    defaultNavigateOptions: {
      title: "Where to buy"
    }
  },
});

export default createAppContainer(StackNavigator);
