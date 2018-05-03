import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  render() {
    const foo = {
      bar: 10,
    };

    let bar = 0;

    if (foo) ({ bar } = foo);

    return (
      <View>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
        <Text>{bar}</Text>
      </View>
    );
  }
}
