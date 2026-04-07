import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function MovieCard({ movie, onPress, width }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { width: width }]}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
          style={styles.image}
        />
        <Text style={styles.title}>
          {movie.title}
        </Text>
        <Text style={styles.year}>
          {movie.release_date}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
