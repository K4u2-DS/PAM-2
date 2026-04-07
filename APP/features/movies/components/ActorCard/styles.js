import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  name: {
    color: COLORS.text,
    fontWeight: "bold",
  },

  role: {
    color: COLORS.textSecondary,
  },
});
