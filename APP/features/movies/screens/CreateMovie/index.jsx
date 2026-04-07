import React, { useState } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  Alert,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { createMovie } from "../../services/movieService";
import { Button, Input } from "../../../../components";
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
  const [actorName2, setActorName2] = useState("");
  const [actorRole2, setActorRole2] = useState("");
  const [actorImage2, setActorImage2] = useState("");

  const handleCreateMovie = async () => {
    if (!nome || !ano || !img_capa || !sinopse || !actorName || !actorRole || !actorImage || !actorName2 || !actorRole2 || !actorImage2) {
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
          {
            id: Math.random().toString(36).substring(2, 8),
            nome: actorName2,
            personagem: actorRole2,
            imagem: actorImage2,
          }
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
          <Input
            value={nome}
            onChangeText={setNome}
            placeholder="Digite o nome"
          />

          <Text style={styles.label}>Ano</Text>
          <Input
            value={ano}
            onChangeText={setAno}
            placeholder="Ex: 2024"
            keyboardType="numeric"
          />

          <Text style={styles.label}>URL da Capa</Text>
          <Input
            value={img_capa}
            onChangeText={setImgCapa}
            placeholder="https://..."
          />

          <Text style={styles.label}>Sinopse</Text>
          <Input
            value={sinopse}
            onChangeText={setSinopse}
            placeholder="Digite a sinopse..."
            multiline
            style={styles.textArea}
          />

          <Text style={styles.sectionTitle}>Principal</Text>
          <Text style={styles.label}>Nome do Ator/Atriz</Text>
          <Input
            value={actorName}
            onChangeText={setActorName}
            placeholder="Digite o nome do ator"
          />

          <Text style={styles.label}>Personagem</Text>
          <Input
            value={actorRole}
            onChangeText={setActorRole}
            placeholder="Digite a personagem"
          />

          <Text style={styles.label}>Foto do Ator/Atriz</Text>
          <Input
            value={actorImage}
            onChangeText={setActorImage}
            placeholder="https://..."
          />

          <Text style={styles.sectionTitle}>Secundario</Text>
          <Text style={styles.label}>Nome do Ator/Atriz</Text>
          <Input
            value={actorName2}
            onChangeText={setActorName2}
            placeholder="Digite o nome do ator"
          />

          <Text style={styles.label}>Personagem</Text>
          <Input
            value={actorRole2}
            onChangeText={setActorRole2}
            placeholder="Digite a personagem"
          />

          <Text style={styles.label}>Foto do Ator/Atriz</Text>
          <Input
            value={actorImage2}
            onChangeText={setActorImage2}
            placeholder="https://..."
          />

          <Button
            title={loading ? "Cadastrando..." : "Cadastrar Filme"}
            onPress={handleCreateMovie}
            disabled={loading}
            style={loading ? styles.buttonDisabled : null}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}