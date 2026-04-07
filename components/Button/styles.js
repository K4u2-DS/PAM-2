import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  danger: {
    backgroundColor: COLORS.danger,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
  },
  disabled: {
    opacity: 0.7,
  },
  text: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 16,
  },
});
