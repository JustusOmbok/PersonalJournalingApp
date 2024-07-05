import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import apiClient from '../api/client';

const EditEntryScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await apiClient.get(`/entries/${id}`);
        const { title, content, category } = response.data;
        setTitle(title);
        setContent(content);
        setCategory(category);
      } catch (error) {
        console.error('Failed to fetch entry details', error);
      }
    };
    fetchEntry();
  }, [id]);

  const handleEditEntry = async () => {
    try {
      await apiClient.put(`/entries/${id}`, { title, content, category });
      navigation.navigate('Home');
    } catch (error) {
      console.error('Failed to edit entry', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Save Changes" onPress={handleEditEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default EditEntryScreen;
