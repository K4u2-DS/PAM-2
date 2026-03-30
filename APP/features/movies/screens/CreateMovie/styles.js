import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  form: {
    padding: 16,
  },

  label: {
    color: "#BBBBBB",
    marginBottom: 6,
    marginTop: 10,
    fontSize: 14,
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2C2C2C",
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#BB86FC",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    elevation: 4,
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});