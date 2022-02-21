import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

export default function GoalInput({ addGoalHandler, show, cancelHandler }) {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  return (
    <Modal visible={show} animationType='slide'>
      <View style={styles.formContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='ADD'
              onPress={() => {
                addGoalHandler(enteredGoal);
                setEnteredGoal('');
              }}
            />
          </View>
          <Button title='CANCEL' color='red' onPress={cancelHandler} />
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '80%',
    padding: 10,
    marginBottom: 15,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
  },
  button: {
    width: '40%',
  },
});
