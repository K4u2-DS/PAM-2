import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Alert,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { createMovie } from "../../services/movieService";
import styles from "./styles";

export default function CreateMovie({ navigation }) {
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  const [img_capa, setImgCapa] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [loading, setLoading] = useState(false);
  const [actorName, setActorName] = useState("");
  const [actorRole, setActorRole] = useState("");
  const [actorImage, setActorImage] = useState("");

  const handleCreateMovie = async () => {
    if (!nome || !ano || !img_capa || !sinopse || !actorName || !actorRole || !actorImage) {
      Alert.alert("Erro", "Preencha todos os campos do filme e do elenco!");
      return;
    }

    setLoading(true);
    try {
      const newMovie = {
        nome,
        ano,
        img_capa,
        sinopse,
        elenco: [
          {
            id: Math.random().toString(36).substring(2, 8),
            nome: actorName,
            personagem: actorRole,
            imagem: actorImage,
          },
        ],
      };

      await createMovie(newMovie);

      Alert.alert("Sucesso", "Filme cadastrado!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Falha ao cadastrar filme");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Text style={styles.label}>Nome do Filme</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome"
            placeholderTextColor="#888"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Ano</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 2024"
            placeholderTextColor="#888"
            value={ano}
            onChangeText={setAno}
            keyboardType="numeric"
          />

          <Text style={styles.label}>URL da Capa</Text>
          <TextInput
            style={styles.input}
            placeholder="https://..."
            placeholderTextColor="#888"
            value={img_capa}
            onChangeText={setImgCapa}
          />

          <Text style={styles.label}>Sinopse</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Digite a sinopse..."
            placeholderTextColor="#888"
            value={sinopse}
            onChangeText={setSinopse}
            multiline
          />

          <Text style={styles.sectionTitle}>Elenco (obrigatório)</Text>
          <Text style={styles.label}>Nome do Ator/Atriz</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do ator"
            placeholderTextColor="#888"
            value={actorName}
            onChangeText={setActorName}
          />

          <Text style={styles.label}>Personagem</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a personagem"
            placeholderTextColor="#888"
            value={actorRole}
            onChangeText={setActorRole}
          />

          <Text style={styles.label}>Foto do Ator/Atriz</Text>
          <TextInput
            style={styles.input}
            placeholder="https://..."
            placeholderTextColor="#888"
            value={actorImage}
            onChangeText={setActorImage}
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
    </KeyboardAvoidingView>
  );
}