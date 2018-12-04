import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput
} from 'react-native';

/**
 * Demo TextInput & ScrollView
 */
export default class Practice3 extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Practice 3</Text>
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <Text style={styles.welcome}>Welcome to React Native Training</Text>
            <Text style={styles.textLabel}>Username</Text>
            <TextInput placeholder="Enter user name" style={styles.textInput} />
            <Text style={styles.textLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Enter password"
            />
            <Text style={styles.textLabel}>Confirm Password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Enter confirm password"
            />
            <Text style={styles.textLabel}>Address</Text>
            <TextInput style={styles.textInput} placeholder="Enter address" />
            <Text style={[styles.textLabel, styles.textLabelAbout]}>About</Text>
            <TextInput
              style={[styles.textInput, styles.textInputAbout]}
              multiline={true}
              placeholder="Enter about"
            />
          </View>
        </ScrollView>
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
  scrollView: {
    flex: 1,
    padding: 20
  },
  content: {
    flex: 1,
    paddingBottom: 80
  },
  welcome: {
    justifyContent: 'center',
    fontSize: 20
  },
  textLabel: {
    fontSize: 16,
    marginTop: 20
  },
  textLabelAbout: {
    fontSize: 16,
    marginTop: 20,
    color: 'red'
  },
  textInput: {
    width: '100%',
    borderColor: '#333333',
    borderWidth: 1,
    justifyContent: 'center',
    padding: 14,
    marginTop: 6
  },
  textInputAbout: {
    color: 'red',
    paddingTop: 14
  }
});
