import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    
  var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch("https://special-space-spork-975v9grxgpjp29ppw-3000.app.github.dev/posts", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#494848ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
