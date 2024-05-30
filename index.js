/** 
 * @format
 */
// primeiro arquivo a ser lido. Appregistry registra a aplicacao
import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
