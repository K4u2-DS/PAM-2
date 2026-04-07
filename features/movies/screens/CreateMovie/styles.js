import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },

  form: {
    marginTop: 10,
  },

  label: {
    color: COLORS.text,
    marginBottom: 5,
  },

  sectionTitle: {
    color: COLORS.text,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
  },

  input: {
    backgroundColor: COLORS.card,
    color: COLORS.text,
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  textArea: {
    height: 100,
  },

  castPreview: {
    marginTop: 10,
    marginBottom: 15,
  },

  actorRow: {
    backgroundColor: COLORS.card,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  actorName: {
    color: COLORS.text,
    fontWeight: "bold",
  },

  actorRole: {
    color: COLORS.text,
    opacity: 0.8,
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});