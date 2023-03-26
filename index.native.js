/**
 * Entry for Native
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import appConfig from './src/app.json';

const appName = appConfig.name;

AppRegistry.registerComponent(appName, () => App);
