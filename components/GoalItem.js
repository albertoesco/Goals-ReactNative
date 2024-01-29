import { StyleSheet, View, Text } from "react-native";

export default function GoalItem({ goal }) {
    return (
        <View style={styles.goalItem} >
            <Text style={styles.goalText}>{goal.text}</Text>
        </View>
    )
}

const styles = new StyleSheet.create({
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