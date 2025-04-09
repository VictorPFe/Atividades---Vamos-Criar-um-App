import React from "react";
import { View, Image, StyleSheet, Text } from 'react-native';

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Text style={{ padding: 20, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> 1. Exibindo Imagens de Diferentes Fontes: </Text>
      {/* Aqui estarei implementanto a Adicionando Estilos a uma Imagem: */}
      {/* <Image 
      style={styles.tinyLogo} 
      source={require('@expo/snack-static/react-native-logo.png')}/>
       
      Meu repositorio não achou essa image então deixei comentado, para mostrar que implementei o codigo
      
      */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
      />

      <Image
        style={styles.logo}
        source={{
          uri: 'https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png'
        }}

      // source={{
      // uri: 'data:image/
      // png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFW
      // HRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/
      // ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgY
      // GBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',

      // Como esse URI A imagem estava em branco e o backgroundColor do App está branco botei outra image

      />

      <Text style={{ padding: 20, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> 2. Adicionando Estilos a uma Imagem: </Text>
      {/* Aqui estarei implementanto a Adicionando Estilos a uma Imagem: */}

      <Image
        style={styles.stretch}
        // source={require('@expo/snack-static/react-native-logo.png')} Não foi encontrado essa image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}        
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginLeft: 10
  },
  logo: {
    width: 66,
    height: 58,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 10
  },
  stretch: {
    width: 50,
    height: 200,
    marginLeft: 10,
    resizeMode: 'stretch',
  }
})

export default DisplayAnImage;