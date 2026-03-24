import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import { createMovie } from "../../services/movieService";
import styles from "./styles";

export default function CreateMovie({ navigation }) {
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  const [img_capa, setImgCapa] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateMovie = async () => {
    if (!nome || !ano || !img_capa || !sinopse) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    setLoading(true);
    try {
      const newMovie = {
        id: Date.now(),
        nome,
        ano,
        img_capa,
        sinopse,
        elenco: []
      };

      await createMovie(newMovie);
      Alert.alert("Sucesso", "Filme cadastrado com sucesso!");
      setNome("");
      setAno("");
      setImgCapa("");
      setSinopse("");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Falha ao cadastrar filme");
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nome do Filme</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do filme"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Ano</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o ano"
          value={ano}
          onChangeText={setAno}
          keyboardType="numeric"
        />

        <Text style={styles.label}>URL da Capa</Text>
        <TextInput
          style={styles.input}
          placeholder="Cole a URL da imagem"
          value={img_capa}
          onChangeText={setImgCapa}
        />

        <Text style={styles.label}>Sinopse</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite a sinopse"
          value={sinopse}
          onChangeText={setSinopse}
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleCreateMovie}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Cadastrando..." : "Cadastrar Filme"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
