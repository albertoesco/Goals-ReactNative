import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';


export default function App() {


  const [myGoals, setMyGoals] = useState([]);



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

  return (

    <View style={styles.goalsContainer}>
      <GoalInput onNewGoal={addGoalHandler} />
      <FlatList
        data={myGoals}
        renderItem={(dataItem) => (
          <View style={styles.goalItem} key={dataItem.item.id}>
            <Text style={styles.goalText}>{dataItem.item.text}</Text>
          </View>
        )
        }
      />
    </View>

  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    alignItems: 'center'
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    width: "70%",
    padding: 10
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    padding: 20,
    backgroundColor: "#092FE0",
    marginBottom: 10,
    borderRadius: 12,
  },
  goalText: {
    color: "white"
  }


})