import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useMovies } from "../../hooks/useMovies";
import MovieCard from "../../components/MovieCard";
import { ROUTES } from "../../../../constants/routes";
import styles from "./styles";

export default function MovieList() {
  const { movies, loading, refresh } = useMovies();
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      refresh();
    }, [refresh])
  );

  if (loading) { 
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando filmes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate(ROUTES.CREATE_MOVIE)}
      >
        <Text style={styles.addButtonText}>+ Adicionar Filme</Text>
      </TouchableOpacity>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() =>
              navigation.navigate(ROUTES.MOVIE_DETAIL, {
                movie: item,
              })
            }
            width={"45%"}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum filme encontrado</Text>
          </View>
        }
      />
    </View>
  );
}

/*
A tela MovieList é responsável por exibir a lista de filmes. Ela utiliza o hook useMovies para obter os dados dos filmes e o estado de carregamento. 
Se os dados ainda estiverem sendo carregados, ela exibe uma mensagem de "Carregando...". 
Caso contrário, ela renderiza uma FlatList com os filmes, utilizando o componente MovieCard para exibir cada filme individualmente. 
Quando um usuário toca em um card de filme, a função onPress é chamada, navegando para a tela de detalhes do filme (ROUTES.MOVIE_DETAIL) e passando as informações do filme selecionado como parâmetro.
*/