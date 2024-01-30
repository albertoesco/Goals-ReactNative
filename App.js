import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {
  const [myGoals, setMyGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);


  /*
  sustituimos  setMyGoals(myCurrentGoals => [...myCurrentGoals, newGoal])
  para en vez de añadir texto añadamos objetos
  */
  function addGoalHandler(newGoal) {
    setMyGoals(myCurrentGoals => [...myCurrentGoals,
    {
      id: Date.now(),
      text: newGoal,
    }
    ])
  }

  function onDeleteGoalHandler(id) {
    setMyGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>

      <Button
        title='Add New Goal'
        onPress={() => setModalVisible(true)}
      />

      <GoalInput
        onNewGoal={addGoalHandler}
        onCancel={() => setModalVisible(false)}
        visible={modalVisible}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={myGoals}
          renderItem={(dataItem) => (
            <GoalItem
              key={dataItem.item.id} ç
              goal={dataItem.item}
              onDeleteGoal={onDeleteGoalHandler}
            />
          )
          }
        />
      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15
  },
  goalsContainer: {
    flex: 5,
  }
})