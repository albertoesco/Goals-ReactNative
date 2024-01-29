import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function GoalInput(props) { //export default function GoalInput( addGoalHandler ) {}

    // declaramos el hook de estado de componente "newGoal"
    const [newGoal, setNewGoal] = useState("");

    function textChangeHandler(enteredText) {
        setNewGoal(enteredText);
    }

    function onPressHandler() {
        if (newGoal) {
            props.onNewGoal(newGoal) //onNewGoal(newGoal)
        }
        setNewGoal("")
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={textChangeHandler}
                style={styles.textInput}
                value={newGoal}
                placeholder='Input your Goal!!'
            />
            <Button
                title='Add Goal'
                onPress={onPressHandler}
            />
        </View>
    )
}

const styles = new StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
        alignItems: 'center'
    }
})