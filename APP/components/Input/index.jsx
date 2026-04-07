import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

export default function Input({ style, ...props }) {
  return <TextInput style={[styles.input, style]} placeholderTextColor="#888" {...props} />;
}
