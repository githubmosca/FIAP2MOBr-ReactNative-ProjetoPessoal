import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e3f2fd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Montserrat-Bold',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});

export type themeType = {
  colors: {
    primary: string;
    text: string;
    buttonBackground: string;
  };
  fonts: {
    MontserratBlack: string;
    MontserratMedium: string;
    MontserratBold: string;
    MontserratRegular: string;
  };
};

export default GlobalStyles;
