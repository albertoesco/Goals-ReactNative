import { StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import React from 'react';

export default function GoalItem({ goal, onDeleteGoal }) {
    return (
        /*
        <Pressable onPress={() => {
            onDeleteGoal(goal.id);
        }}>
            <View style={styles.goalItem} >
                <Text style={styles.goalText}>{goal.text}</Text>
            </View>
        </Pressable>
        */
        <TouchableOpacity>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{goal.text}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => onDeleteGoal(goal.id)}>
                    <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    goalItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#092FE0",
        marginBottom: 10,
        borderRadius: 12,
    },
    goalText: {
        color: "white",
        flex: 1,
    },
    deleteButton: {
        padding: 10,  // Aumenta el valor para hacer el botón más grande
        backgroundColor: "red",
        borderRadius: 5,
        marginLeft: 10,
    },
    deleteText: {
        color: "white",
        fontSize: 12,
    },
});
