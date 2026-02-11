import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Alert, Platform, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [text, onChangeText] = React.useState('')

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        <Image
          style={styles.tinyLogo}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />

        <Text>Email</Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Insira o email'
        />
        <Text>Senha</Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Insira a senha"
        />
        <Button
          title="Logar"
          color='#7efd58'
          onPress={() => showAlert('Simple Button pressed')}
        />
        <Button
          title="Cadastre-se"
          color='#7efd58'
          onPress={() => showAlert('Simple Button pressed')}
        />
        
        <Text>Esqueceu a senha</Text>
        <StatusBar style="auto" />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9fbf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
