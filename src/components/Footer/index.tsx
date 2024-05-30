import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text } from 'react-native';
 
import styles from './styles';

const Footer = () => {

  return (
    <View style={styles.footer}>
      <Icon name="mail-bulk" style={styles.icon}  size={30} />
      <Text style={styles.text}>Email: margarethmoscardini@gmail.com</Text>
    
    <Icon name="github" style={styles.icon}  size={30} />
    <Text style={styles.text}>https://github.com/githubmosca</Text>
    
    
   
 
    </View>
  );
};

 
 
export default Footer;

