import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: COLORS.background,
  },
  text: {
    marginTop: 12,
    color: COLORS.text,
    fontSize: 16,
  },
});
