import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import apiClient from '../api/client';

const EntryDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await apiClient.get(`/entries/${id}`);
        setEntry(response.data);
      } catch (error) {
        console.error('Failed to fetch entry details', error);
      }
    };
    fetchEntry();
  }, [id]);

  if (!entry) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{entry.title}</Text>
      <Text>{entry.content}</Text>
      <Text>Category: {entry.category}</Text>
      <Text>Date: {entry.date}</Text>
      <Button title="Edit" onPress={() => navigation.navigate('EditEntry', { id })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default EntryDetailScreen;
