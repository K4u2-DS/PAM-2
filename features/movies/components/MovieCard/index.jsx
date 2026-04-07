import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import styles from "./styles";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 30) / 2;

export default function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.card, { width: CARD_WIDTH }]}
    >
      <Image
        source={{ uri: movie.img_capa }}
        style={[styles.image, { height: CARD_WIDTH * 1.5 }]}
        resizeMode="cover"
      />

      <View style={styles.cardFooter}>
        <Text style={styles.title} numberOfLines={1}>
          {movie.nome}
        </Text>

        <Text style={styles.year}>{movie.ano}</Text>
      </View>
    </TouchableOpacity>
  );
}