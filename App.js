import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import react from "react";
import CarItem from "./compenents/CarItem/index";
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
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
});
