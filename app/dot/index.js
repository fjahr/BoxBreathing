import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

export default class Dot extends Component {
  constructor(props) {
    super(props);
    this.scaleValue = new Animated.Value(0);
  }

  scale () {
    this.scaleValue.setValue(0);
    Animated.sequence([
      Animated.timing(
        this.scaleValue,
        {
          toValue: 1,
          duration: 8000,
          easing: Easing.easeOutBack
        }
      ).start(() => {
        if(this.props.active){
          this.scale();
        }
      }),
    ]);
  }

  componentDidUpdate() {
    if(this.props.active){
      this.scale();
    }
  }

  render() {
    const nearFar = this.scaleValue.interpolate({
        inputRange: [0, 0.5, 1],
          outputRange: [1, 7, 1]
    });

    return (
      <Animated.View style={{
        width: 50,
        height: 50,
        backgroundColor: 'steelblue',
        borderRadius: 25,
        transform: [
          {scale: nearFar}
        ]
      }} />
    );
  }
}
