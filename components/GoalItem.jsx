import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function GoalItem({ value, onDelete, id }) {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, id)}>
      <View>
        <Text style={styles.listItem}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '60%',
    padding: 10,
    marginRight: 15,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
  },
});
