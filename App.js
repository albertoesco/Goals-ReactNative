import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';


export default function App() {

  // declaramos el hook de estado de componente "newGoal"
  const [newGoal, setNewGoal] = useState("");
  const [myGoals, setMyGoals] = useState([]);

  function textChangeHandler(enteredText) {
    setNewGoal(enteredText);
  }

  function addGoalHandler() {
    setMyGoals(myCurrentGoals => [...myCurrentGoals, newGoal])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={textChangeHandler}
          style={styles.textInput}
          placeholder='Input your Goal!!'
        />
        <Button
          title='Add Goal'
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {myGoals.map((goal, i) => {
            return (
              <View style={styles.goalItem} key={i}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            )
          })}
        </ScrollView>
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