import React from "react";
import {
  View,
  FlatList,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMovies } from "../../hooks/useMovies";
import MovieCard from "../../components/MovieCard";
import { ROUTES } from "../../../../constants/routes";
import styles from "./styles";
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { Button, Loading } from "../../../../components";

export default function MovieList() {
  const { movies, loading, refresh } = useMovies();
  const navigation = useNavigation();
 
useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh])
  ); 

  if (loading) {
    return <Loading text="Carregando filmes..." />;
  }

  return (
    <View style={styles.container}>
      
      <Button
        title="+ Adicionar Filme"
        onPress={() => navigation.navigate(ROUTES.CREATE_MOVIE)}
        style={styles.addButton}
        textStyle={styles.addButtonText}
      />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() =>
              navigation.navigate(ROUTES.MOVIE_DETAILS, {
                movie: item,
              })
            }
          />
        )}
      />
    </View>
  );
}