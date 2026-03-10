import { StyleSheet, Text, View } from 'react-native';
import AppRoutes from './routes/app.routes';
import react from 'react';

export default function App() {
  return <AppRoutes />;
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#494848ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
