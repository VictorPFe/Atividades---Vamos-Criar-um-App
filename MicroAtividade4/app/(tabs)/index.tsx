import React from 'react';
import { SectionList, FlatList, StyleSheet, Text, View } from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={{padding: 20 , fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}> Criaçao de uma lista Simples </Text>
      <FlatList
        data={[
          { key: 'Victor' },
          { key: 'Vanessa' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
          { key: 'Carlos' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>} />
      <Text style={{padding: 20 , fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}> Criaçao de uma lista com Seções </Text>
      {/* Aqui estarei implementanto a criaçao de uma lista com seções */}
      <SectionList
        sections={[
          { 
            title: 'D', 
            data: [
              'Victor', 
              'Vanessa', 
              'Vanderson']},
          {
            title: 'J',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ]
          }
        ]}
        renderItem={({item}) => <Text style={styles.itemSection}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )} 
        keyExtractor={item => `basicListEntry-${item}`}/>
    </View >
  )
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  containerSection: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247,1.0)'
  },
  itemSection: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})