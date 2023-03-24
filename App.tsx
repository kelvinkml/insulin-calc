import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [ratio, setRatio] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [dose, setDose] = useState();
  const calculateInsulin = (ratio, carbs) => {
    console.log(ratio);
    console.log(carbs);
    setDose(carbs / ratio);
  };
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: "large", margin: 10 }}>Insulin Calculator</Text>
      <View style={styles.inputArea}>
        <Text>Input your ratio 1:</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(ratio) => setRatio(+ratio)}
          style={styles.inputBox}
        />
      </View>

      <View style={styles.inputArea}>
        <Text>Input the total carbohydrates in grams:</Text>
        <TextInput
          onChangeText={(carbs) => setCarbs(+carbs)}
          style={styles.inputBox}
        />
      </View>
      <TouchableOpacity
        onPress={() => calculateInsulin(ratio, carbs)}
        style={styles.button}
      >
        <Text>Calculate!</Text>
      </TouchableOpacity>
      <Text>Your rapid acting insulin dose is: {dose}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    height: 40,
    width: 40,
    borderWidth: 2,
    margin: 5,
  },
  button: {
    height: 40,
    width: 100,
    margin: 10,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
