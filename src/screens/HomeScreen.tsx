import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import apiClient from '../api/client';
import AuthContext from '../context/AuthContext';
import { useIsFocused } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);
  const { logout } = useContext(AuthContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await apiClient.get('/entries');
        setEntries(response.data);
      } catch (error) {
        console.error('Failed to fetch entries', error);
      }
    };
    if (isFocused) fetchEntries();
  }, [isFocused]);

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Add Entry" onPress={() => navigation.navigate('AddEntry')} />
      <Button title="Logout" onPress={handleLogout} />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.content}</Text>
            <Button title="Edit" onPress={() => navigation.navigate('EditEntry', { id: item.id })} />
            <Button title="View" onPress={() => navigation.navigate('EntryDetail', { id: item.id })} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  entry: {
    marginBottom: 16,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
