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
    this.state = {
      guide: 'Tab circle to start/stop breathing cycles'
    }
  }

  scale () {
    this.scaleValue.setValue(0);
    Animated.sequence([
      Animated.timing(
        this.scaleValue,
        {
          toValue: 1,
          duration: 4000,
          easing: Easing.easeOutBack
        }
      ),
      Animated.delay(4000),
      Animated.timing(
        this.scaleValue,
        {
          toValue: 0,
          duration: 4000,
          easing: Easing.easeOutBack
        }
      ),
      Animated.delay(4000),
    ]).start(() => {
      if (this.props.active) {
        this.scale()
      }
    });
  }

  componentDidUpdate() {
    if(this.props.active){
      this.scale();
    }
  }

  render() {
    const nearFar = this.scaleValue.interpolate({
        inputRange: [0, 1],
          outputRange: [1, 6]
    });

    return (
      <View>
        <View style={{
          width: 300,
          height: 300,
          borderColor: 'steelblue',
          borderWidth: 1,
          borderRadius: 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Animated.View style={{
            width: 50,
            height: 50,
            backgroundColor: 'steelblue',
            borderRadius: 25,
            transform: [
              {scale: nearFar}
            ]
          }} />
        </View>
        <View>
          <Text style={{
            textAlign: 'center',
            color: 'steelblue',
            marginTop: 20,
          }}>
            {this.state.guide}
          </Text>
        </ View>
      </View>
    );
  }
}
