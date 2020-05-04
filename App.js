import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Router from './src/config/router';
class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}

export default App;

