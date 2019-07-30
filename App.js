import React, {Component} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const ballY = new Animated.Value(0);
const ballX = Animated.divide(ballY, 2);

export default class App extends Component {
  state = {
    ballY: ballY,
    ballX: ballX,
  };

  componentDidMount() {
    Animated.decay(this.state.ballY, {
      velocity: 0.5,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[
          styles.ball,
          { top: this.state.ballY, left: this.state.ballX }
        ]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,    
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f00',
  },
});
