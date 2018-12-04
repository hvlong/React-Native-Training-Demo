import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default class Practice2FlexDirection extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.green} />
        <View style={styles.red} />
        <View style={styles.yellow} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  green: {
    backgroundColor: 'green',
    width: 50,
    height: 50
  },
  red: {
    backgroundColor: 'red',
    width: 50,
    height: 50
  },
  yellow: {
    backgroundColor: 'yellow',
    width: 50,
    height: 50
  }
});
