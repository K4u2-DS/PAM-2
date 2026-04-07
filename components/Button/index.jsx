import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function Button({
  title,
  onPress,
  disabled,
  variant = "primary",
  style,
  textStyle,
  children,
  ...props
}) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={[styles.text, textStyle]}>{children || title}</Text>
    </TouchableOpacity>
  );
}
