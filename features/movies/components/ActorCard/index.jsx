import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function ActorCard({ actor = {} }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: actor.imagem }} style={styles.image} />
      <View>
        <Text style={styles.name}>{actor.nome}</Text>
        <Text style={styles.role}>{actor.personagem}</Text>
      </View>
    </View>
  );
}
