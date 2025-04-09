import React from "react";
import { Text, View, TextInput, Image } from "react-native";

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}</Text>
    </View>
  )
}

const index = () => {
  const name = 'Maru';
  return (
    <View>
      <Text style={{ padding: 20, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> 1. Criando um Componente Simples: </Text>
      <Text style={{ paddingTop: 50 }}>Hello, Iam {name}</Text>

      <Text style={{ padding: 20, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> 2. Adicionando Elementos ao Componente: </Text>
      <Text>Hello, I am...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Name me!" />

      <Text style={{ padding: 20, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> 3. Utilizando Props: </Text>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />

      <Text style={{ padding: 20, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}> 4. Utilizando Imagens: </Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={{ width: 200, height: 200 }} />

      <Text>Hello, I am your cat!</Text>
    </View>
  )
}


export default index;