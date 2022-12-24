import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';


const App = () => {
  const [items, setItems] = useState([
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
    {
      id: uuid.v4(),
      text: 'Taste',
    },
    {
      id: uuid.v4(),
      text: 'Good',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
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
