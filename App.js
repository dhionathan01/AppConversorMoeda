import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PickerItem } from './src/PickerItem';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text>Selecione sua moeda </Text>
        <PickerItem></PickerItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center',
  },
  areaMoeda: {
    backgroundColor: '#f9f9f9',
    width: "90%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8
  },
  titulo: {
    fontSize: 16,
    color: '#000',
    paddingLeft: 5,
    paddingTop: 5,
  }
});
