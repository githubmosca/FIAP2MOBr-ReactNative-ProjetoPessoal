
 
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import GlobalStyles from '../../utils/theme';
import styles from './styles';

const Profile = () => {
  return (
    <View style={GlobalStyles.container}>
      <Image source={require('src/assets/Photos/minhaFoto.png')} style={styles.image} />
      <Text style={GlobalStyles.title}>Um pouco sobre mim</Text>
      <Text style={GlobalStyles.text}>
      Sou graduada em Matemática com pós-graduação em TI e tenho uma vasta experiência na área. Iniciei minha carreira com Cobol e ao longo dos anos trabalhei com diversas linguagens de programação, incluindo VB, Clipper, e ASP. Também tive uma passagem pela Gerência de Projetos. Atualmente, retornei para a área técnica, focando no desenvolvimento de aplicativos mobile e inteligência artificial.</Text>
    </View>
  );
};
export default Profile;

