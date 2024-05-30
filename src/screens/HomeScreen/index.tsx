import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Profile from 'src/components/Perfil';
import Timeline from 'src/components/LinhaTempo';
import PhotoGallery from 'src/components/GaleriaFotos';
import Testimonial from 'src/components/Agradecimento';
import Header from 'src/components/Header';  
import Footer from 'src/components/Footer';
import GlobalStyles from 'src/utils/theme';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
          <Header title="Margareth Moscardini" /> 
  
      <ScrollView>
        <Profile />
        <Timeline />
         <PhotoGallery />
        <Testimonial /> 
        <Footer /> 
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
