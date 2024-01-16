import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput}
          placeholder='Input your Goal' />
        <Button title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Tu lista de objetivos...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCCC",
    padding: 10,
    alignItems: 'center'
  },
  TextInput: {
    borderColor: "#CCCCccC",
    borderWidth: 1,
    width: "70%",
    padding: 10
  },
  goalsContainer: {
    flex: 5
  }
});
