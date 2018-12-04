import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';

const dataList = [
  {
    id: 1,
    title: 'Name 1'
  },
  {
    id: 2,
    title: 'Name 2'
  },
  {
    id: 3,
    title: 'Name 3'
  },
  {
    id: 4,
    title: 'Name 4'
  },
  {
    id: 5,
    title: 'Name 5'
  },
  {
    id: 6,
    title: 'Name 6'
  },
  {
    id: 7,
    title: 'Name 7'
  },
  {
    id: 8,
    title: 'Name 8'
  },
  {
    id: 9,
    title: 'Name 9'
  },
  {
    id: 10,
    title: 'Name 10'
  },
  {
    id: 11,
    title: 'Name 11'
  },
  {
    id: 12,
    title: 'Name 12'
  }
];

/**
 * FlatList
 */
export default class Practice4FlatList extends React.PureComponent {
  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text>This is Header</Text>
      </View>
    );
  };

  renderFooter = () => {
    return (
      <View style={styles.footer}>
        <Text>This is Footer</Text>
      </View>
    );
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemId}>{`ID: ${item.id}`}</Text>
        <Text style={styles.itemContent}>{`Title: ${item.title}`}</Text>
      </View>
    );
  };

  keyExtra = (item, index) => item.id.toString();

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Practice 4 FlatList</Text>
        <FlatList
          data={dataList}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtra}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
        />
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
  dataList: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20
  },
  footer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'green'
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333'
  },
  itemId: {
    color: 'green',
    fontWeight: '500',
    fontSize: 20
  },
  itemContent: {
    marginTop: 12
  }
});
