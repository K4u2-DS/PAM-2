import React from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';

export default function MovieDetails() {
    const route = useRoute();
    const { movie } = route.params;

    if (!movie) {
        return (
            <View style={styles.container}>
                <Text>Filme não encontrado</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image 
                source={{ uri: movie.img_capa }} 
                style={styles.poster}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{movie.nome}</Text>
                <Text style={styles.year}>Ano: {movie.ano}</Text>
                <Text style={styles.sectionTitle}>Sinopse</Text>
                <Text style={styles.synopsis}>{movie.sinopse}</Text>
                
                {movie.elenco && movie.elenco.length > 0 && (
                    <>
                        <Text style={styles.sectionTitle}>Elenco</Text>
                        <FlatList
                            scrollEnabled={false}
                            data={movie.elenco}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.actorContainer}>
                                    <Image 
                                        source={{ uri: item.imagem }} 
                                        style={styles.actorImage}
                                    />
                                    <View style={styles.actorInfo}>
                                        <Text style={styles.actorName}>{item.nome}</Text>
                                        <Text style={styles.actorRole}>{item.personagem}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </>
                )}
            </View>
        </ScrollView>
    );
}