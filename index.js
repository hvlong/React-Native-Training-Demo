/** @format */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import Practice1 from './src/practice-1/Practice1.js';
import Practice2FlexDirection from './src/practice-2/Practice2FlexDirection.js';
import Practice2Example from './src/practice-2/Practice2Example.js';
import Practice3 from './src/practice-3/Practice3.js';
import Practice4FlatList from './src/practice-4/Practice4FlatList.js';
import Practice4Section from './src/practice-4/Practice4Section.js';

AppRegistry.registerComponent(appName, () => Practice4Section);
