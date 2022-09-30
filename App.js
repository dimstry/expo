import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      {/* membuat button  */}
      <StatusBar style="auto" />
      <Button title="Click Me" onPress={() => alert("Hello World!!")} />
      {/* Membuat footer */}
      <View style={styles.footer}>
        <Text style={styles.textFooter}>My Footer</Text>
      </View>
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
  footer: {
    backgroundColor: "red",
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
  },
  textFooter: {
    color: "white",
  },
});
