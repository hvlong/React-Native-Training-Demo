import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default class Practice1 extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Hello guys</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  green: {
    backgroundColor: 'green',
    flex: 1
  },
  red: {
    backgroundColor: 'red',
    flex: 1
  },
  yellow: {
    backgroundColor: 'yellow',
    flex: 1
  }
});
