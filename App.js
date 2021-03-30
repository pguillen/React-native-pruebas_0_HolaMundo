import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Texto = ({ style }) => {
  // const { texto } = props;
  // return <Text> {texto} </Text>;

  // const { children } = props;
  // return <Text> {children} </Text>;

  const [texto, setTexto] = useState("Hola mundo!");
  const actualizaTexto = () => {
    setTexto("Chao mundo!");
  };
  return (
    <Text style={[styles.text, style]} onPress={actualizaTexto}>
      {texto}
    </Text>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red} />
      <Texto style={styles.green} />
      <Texto style={styles.blue} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 24,
    height: 100,
    width: 100,
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
});
