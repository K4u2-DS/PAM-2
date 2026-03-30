import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: width * 0.44, // 🔥 tamanho correto
        backgroundColor: "#1E1E1E",
        borderRadius: 12,
        marginBottom: 12,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#2C2C2C",
      }}
    >
      <Image
        source={{ uri: movie.img_capa }}
        style={{
          width: "100%",
          height: 180,
        }}
        resizeMode="cover"
      />

      <View style={{ padding: 10 }}>
        <Text
          style={{ color: "#fff", fontWeight: "bold" }}
          numberOfLines={1}
        >
          {movie.nome}
        </Text>

        <Text style={{ color: "#aaa", marginTop: 4 }}>
          {movie.ano}
        </Text>
      </View>
    </TouchableOpacity>
  );
}