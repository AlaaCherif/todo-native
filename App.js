import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, SetGoals] = useState([]);
  const [modal, setModal] = useState(false);

  const deleteGoalHandler = goalId => {
    SetGoals(goals => {
      return goals.filter(goal => goal.id !== goalId);
    });
  };

  const addGoalHandler = enteredGoal => {
    SetGoals(currentState => [
      ...currentState,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setModal(false);
  };

  const cancelHandler = () => {
    setModal(false);
  };

  return (
    <View style={styles.screen}>
      <Button
        title='Add New Goal'
        onPress={() => {
          setModal(true);
        }}
      />
      <GoalInput
        show={modal}
        addGoalHandler={addGoalHandler}
        cancelHandler={cancelHandler}
      />
      <FlatList
        data={goals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={deleteGoalHandler}
            value={itemData.item.value}
          />
        )}
      />
    </View>
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
