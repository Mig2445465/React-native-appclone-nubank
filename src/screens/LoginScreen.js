import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Image, Alert } from "react-native";
import logo from '../assets/logo (1).png';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.includes('@')) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Digite um e-mail válido com o caractere "@"');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo}/>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.margint}>
        <Button title="Login" onPress={handleLogin}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820ad1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    width: '100%',
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  margint:{
    marginTop: 30
  }
});
