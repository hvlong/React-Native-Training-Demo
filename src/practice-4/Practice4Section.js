import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  SectionList
} from 'react-native';

const dataList = [
  {
    id: 1,
    title: 'Group 1',
    data: [
      {
        value: 'Name 1'
      },
      {
        value: 'Name 2'
      },
      {
        value: 'Name 3'
      }
    ]
  },
  {
    id: 2,
    title: 'Group 2',
    data: [
      {
        value: 'Name 4'
      },
      {
        value: 'Name 5'
      },
      {
        value: 'Name 6'
      }
    ]
  },
  {
    id: 3,
    title: 'Group 3',
    data: [
      {
        value: 'Name 7'
      },
      {
        value: 'Name 8'
      },
      {
        value: 'Name 9'
      }
    ]
  },
  {
    id: 4,
    title: 'Group 4',
    data: [
      {
        value: 'Name 10'
      },
      {
        value: 'Name 11'
      },
      {
        value: 'Name 12'
      }
    ]
  }
];

/**
 * FlatList
 */
export default class Practice4Section extends React.PureComponent {
  renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text>{section.title}</Text>
      </View>
    );
  };
  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemContent}>{item.value}</Text>
      </View>
    );
  };

  keyExtra = (item, index) => item.id.toString();

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Practice 4 FlatList</Text>
        <SectionList
          sections={dataList}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={(item, index) => index.toString()}
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
  sectionHeader: {
    padding: 20,
    fontWeight: '800',
    backgroundColor: 'green'
  },
  item: {
    padding: 20,
    marginLeft: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333333'
  },
  itemContent: {
    marginTop: 12
  }
});
