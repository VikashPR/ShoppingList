import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';
const items = [
  {
    id: uuid.v4(),
    text: 'Cat',
  },
  {
    id: uuid.v4(),
    text: 'Fish',
  },
  {
    id: uuid.v4(),
    text: 'Meat',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
