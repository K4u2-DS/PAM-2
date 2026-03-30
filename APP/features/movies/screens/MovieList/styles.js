import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },

  addButton: {
    backgroundColor: "#BB86FC",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
    elevation: 5,
  },

  addButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },

  columnWrapper: {
    justifyContent: "space-between",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },

  loadingText: {
    color: "#fff",
    marginTop: 10,
  },
});