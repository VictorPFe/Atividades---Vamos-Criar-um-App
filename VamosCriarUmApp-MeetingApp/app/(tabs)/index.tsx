import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CadastroFornecedorScreen from "./CadastroFornecedorScreen";
import ListaFornecedoresScreen from "./ListaFornecedoresScreen";


export default function App() {
  const [fornecedores, setFornecedores] = useState([])

  const adicionarFornecedor = (fornecedor) => {
    setFornecedores([...fornecedores, fornecedor])
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      
      <CadastroFornecedorScreen onSalvar={adicionarFornecedor} />

      <ListaFornecedoresScreen fornecedores={fornecedores} />
      
      <StatusBar style="auto" />
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});