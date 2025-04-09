import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Image, Button, StyleSheet } from 'react-native';

export default function ListaFornecedoresScreen({ fornecedores }) {
    const [categoriaFiltro, setCategoriaFiltro] = useState('');
    const [localizacaoFiltro, setLocalizacaoFiltro] = useState('');

    const fornecedoresFiltrados = fornecedores.filter((fornecedor) => {

        const categoriaMatch =
            categoriaFiltro === '' || fornecedor.categorias.includes(categoriaFiltro);


        const localizacaoMatch =
            localizacaoFiltro === '' ||
            fornecedor.localizacao.toLowerCase().includes(localizacaoFiltro.toLowerCase());

        return categoriaMatch && localizacaoMatch;
    });

    return (

        <View style={{ margin: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Lista de Fornecedores</Text>

            <TextInput
                style={styles.input}
                placeholder="Filtrar por Categoria"
                value={categoriaFiltro}
                onChangeText={(text) => setCategoriaFiltro(text)}
            />

            {fornecedoresFiltrados.map((fornecedor, index) => (
                <View key={index} style={styles.fornecedorContainer}>
                    <Text style={styles.nomeFornecedor}>Nome: {fornecedor.nome}</Text>
                    <Text>Endereço: {fornecedor.endereco}</Text>
                    <Text>Contato: {fornecedor.contato}</Text>
                    <Text>Categorias de Produtos: {fornecedor.categorias}</Text>

                    {fornecedor.imagem && (
                        <Image
                            source={{ uri: fornecedor.imagem }}
                            style={styles.imagemFornecedor}
                        />
                    )}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    fornecedorContainer: {
        marginBottom: 20,
    },
    nomeFornecedor: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    imagemFornecedor: {
        width: 100,
        height: 100,
        marginTop: 10,
    },
});