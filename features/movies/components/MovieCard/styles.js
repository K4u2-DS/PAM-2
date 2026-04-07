import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export default StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: COLORS.card,
  },
  image: {
    width: "100%",
  },
  cardFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  title: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 14,
  },
  year: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
});