import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
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

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'Error Kiddo',
        "Don't be stupid, Type something:🤦‍♂️", // <- this part is optional, you can pass an empty string
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
      setItems(prevItems => {
        return [{id: uuid.v4(), text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
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
