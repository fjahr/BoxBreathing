import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button
} from 'react-native';

import Dot from './dot'

export default class BoxBreathing extends Component {
  constructor(props) {
    super(props);
    this.state = {animate: false};
  }

  _onScreenPress() {
    this.setState({animate: !this.state.animate});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <View style={{
              borderColor: 'steelblue',
              width: 300,
              height: 300,
              borderRadius: 150,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          <TouchableHighlight onPress={this._onScreenPress.bind(this)}>
            <View style={{
              width: 300,
              height: 300,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Dot active={this.state.animate}/>
            </View>
          </ TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
