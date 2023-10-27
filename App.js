
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, } from 'react-native';
import TodoList from './TodoList';

const App = () => {
  return (
    <View style={styles.container}>
      
        <Text>Todolist App</Text>
        <StatusBar style="auto" />
        <TodoList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
});


