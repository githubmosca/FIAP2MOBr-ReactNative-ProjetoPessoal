import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from 'src/utils/theme';
import styles from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={GlobalStyles.title}>{title}</Text>
    </View>
  );
};

export default Header;

