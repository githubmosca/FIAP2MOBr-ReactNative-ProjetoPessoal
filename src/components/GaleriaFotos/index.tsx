 
 
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PhotoItem from '../FotosItem';
 
import styles from './styles';

const PhotoGallery = () => {
  const photos = [
    { src: require('src/assets/Photos/foto1.jpg'), caption: 'Primeiro emprego na TI, 1980.'},
    { src: require('src/assets/Photos/foto2.png'), caption: 'O primeiro tela preta, 1985.' },
    { src: require('src/assets/Photos/foto5.jpg'), caption: 'Desenvolvimento WEB,2000 ' },
    { src: require('src/assets/Photos/foto3.jpg'), caption: 'Mobile, 2020.' },
    { src: require('src/assets/Photos/foto4.jpg'), caption: 'Nossa turma FIAP2MOBr,2024 ' },
  ];

  return (
    <View style={styles.container}>
      {photos.map((photo, index) => (
        <PhotoItem key={index} src={photo.src} caption={photo.caption} />
      ))}
    </View>
  );
};

 

export default PhotoGallery;
