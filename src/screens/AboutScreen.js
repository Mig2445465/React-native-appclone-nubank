import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';
import myphoto from '../assets/myphoto.jpg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const AboutScreen = () => {
  
  return (
    <View style={styles.container}>
      <Image source={require('../assets/myphoto.jpg')} style={styles.profileImage} />
      <View>
        <Text style={styles.title1}>Miguel Araujo</Text>
        <Text style={styles.description}>Aluno na Faeterj Petrópolis e residente no Serratec/Senac, estagiário na Orange Business Services, tenho 20 anos e busco desenvolver e aprimorar minhas habilidades no âmbito da tecnologia, contribuindo e dando o suporte necessário em quaisquer áreas ou projetos que estiver.</Text>
      </View>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.description}>Este é um aplicativo criado com React Native para demonstrar habilidades de desenvolvimento móvel.</Text>
      <Text style={styles.version}>Versão 1.0.0</Text>
      <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Mig2445465')}>
                    <FontAwesome name="github" size={30} color="whitesmoke" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/miguel-araujo-7a37b8247/')}>
                    <FontAwesome name="linkedin" size={30} color="cyan" />
                </TouchableOpacity>
            </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#820ad1'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // metade da largura e altura para criar um círculo
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'whitesmoke'
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white'
  },
  version: {
    fontSize: 14,
    color: 'whitesmoke',
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'whitesmoke',
    marginLeft: 125
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  githubIcon: {
    marginLeft: 20 // para dar espaço entre os ícones
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 20,
}
});

export default AboutScreen;
