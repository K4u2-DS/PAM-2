import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import styles from "./styles";

export default function Loading({
  text = "Carregando...",
  size = "large",
  color = "#BB86FC",
}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {text ? <Text style={styles.text}>{text}</Text> : null}
    </View>
  );
}
