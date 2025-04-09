import React, { useState } from "react";
import { View, Text, Alert, TextInput, Button, Image, StyleSheet }  from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CadastroFornecedorScreen({onSalvar}){
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [endereco, setEndereco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState(null);

    const escolherImagem = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1
        })

        if (!result.canceled){
            setImagem(result.uri)
        }
    }

    const salvar = () => {

        if(!nome || !contato || !endereco || !categoria) {
            Alert.alert('Erro', 'Certifique-se de que todos os campos estejam preenchidos')
            return
        }

        const novoFornecedor = {
            nome,
            contato,
            endereco,
            categoria,
            imagem
        }
        onSalvar(novoFornecedor)
        setNome('')
        setContato('')
        setEndereco('')
        setCategoria('')
        setImagem(null)
    }
    return (
        <View style={styles.container}>
            <Text>Nome:</Text>
            <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.textosInput}/>

            <Text>Contato:</Text>
            <TextInput placeholder="Contato" value={contato} onChangeText={setContato} style={styles.textosInput}/>

            <Text>Endereço:</Text>
            <TextInput placeholder="Endereço" value={endereco} onChangeText={setEndereco} style={styles.textosInput}/>

            <Text>Categoria:</Text>
            <TextInput placeholder="Categoria" value={categoria} onChangeText={setCategoria} style={styles.textosInput}/>

            <Button title="Escolher Imagem" onPress={escolherImagem}/>
            {imagem && <Image source={{uri: imagem}} style={styles.imagem}/>}

            <Button title="Salvar Fornecedor" onPress={salvar}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    textosInput: {
        borderWidth: 1,
        marginBottom: 10
    },
    imagem: {
        width: 100, 
        height: 100,
        marginTop: 10
    }
})