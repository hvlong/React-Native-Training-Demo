import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default class Practice2Example extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Practice 2 Full</Text>
        <View style={styles.content}>
          <View style={styles.green} />
          <View style={styles.row}>
            <View style={styles.red} />
            <Text style={styles.text}>
              A component can specify the layout of its children using the
              flexbox algorithm. Flexbox is designed to provide a consistent
              layout on different screen sizes. You will normally use a
              combination of flexDirection, alignItems, and justifyContent to
              achieve the right layout.
            </Text>
          </View>
          <View style={styles.yellow} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    justifyContent: 'center',
    backgroundColor: 'powderblue',
    padding: 20,
    width: '100%',
    textAlign: 'center'
  },
  content: {
    flex: 1,
    margin: 20
  },
  row: {
    flex: 0,
    flexDirection: 'row'
  },
  green: {
    backgroundColor: 'green',
    width: 20,
    height: 20,
    borderRadius: 10
  },
  text: {
    padding: 20
  },
  red: {
    backgroundColor: 'red',
    width: 2,
    marginHorizontal: 9
  },
  yellow: {
    backgroundColor: 'yellow',
    width: 20,
    height: 20,
    borderRadius: 10
  }
});
