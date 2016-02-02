'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import autobind from 'autobind-decorator';

export default class HitSlopApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={this._increment}
          hitSlop={{
            top: 0,
            bottom: 0,
            left: 16,
            right: 16,
          }}>
          <Text style={styles.ben}>Hit slop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={this._increment}>
          <Text style={styles.ben}>No hit slop</Text>
        </TouchableOpacity>
        <Text style={styles.counter}>
          {this.state.counter} CAKES
        </Text>
      </View>
    );
  }

  @autobind
  _increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    backgroundColor: 'white',
    padding: 8,
    margin: 24,
  },
  counter: {
    color: 'black',
    marginVertical: 48,
    fontSize: 18,
    fontWeight: 'bold',
  },
  ben: {
    color: 'black',
  },
});

AppRegistry.registerComponent('main', () => HitSlopApp);
