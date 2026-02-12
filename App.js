import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Alert, Platform, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tela, setTela] = useState('login');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Image
          style={styles.tinyLogo}
          source={{ uri: 'https://img.icons8.com/?size=100&id=82751&format=png&color=000000' }}
        />

        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='Insira o email'
        />

        <Text style={styles.text}>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={setSenha}
          value={senha}
          placeholder="Insira a senha"
          secureTextEntry={true}
        />

        <View style={{ borderRadius: 20, overflow: 'hidden', width: 200 }}>
          <Button
            title="Logar"
            color='#31a00fe7'
          />
        </View>

        <View style={{ borderRadius: 20, overflow: 'hidden', width: 200 }}>
          <Button
            title="Cadastre-se"
            color='#31a00fe7'
            onPress={() => setTela('cadastro')}
          />
        </View>

        <Text>Esqueceu a senha</Text>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
 export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Text style={styles.titulo}>Cadastro</Text>

        <View style={styles.form}>
          <Text style={styles.text}>Nome</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
            placeholder='Insira o seu nome'
          />

          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder='Insira o email'
          />

          <Text style={styles.text}>Senha</Text>
          <TextInput
            style={styles.input}
            onChangeText={setSenha}
            value={senha}
            placeholder="Insira a senha"
            secureTextEntry={true}
          />

          <View style={{ borderRadius: 20, overflow: 'hidden', width: 200 }}>
            <Button
              title="Cadastrar"
              color='#31a00fe7'
              onPress={() => setTela('cadastro')}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function ESenha() {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Text style={styles.titulo}>Esqueceu a Senha</Text>

        <View style={styles.form}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='Insira o email'
        />

        <View style={{ borderRadius: 20, overflow: 'hidden', width: 200 }}>
          <Button
            title="Enviar"
            color='#31a00fe7'
          />
        </View>

      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
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
    width: 200,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#292626',
    color: '#fff',
    width: 400,
  }, 
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
});