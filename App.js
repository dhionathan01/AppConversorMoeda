import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { PickerItem } from './src/PickerItem';
import api from './src/services/api';
export default function App() {
  const [loading, setLoading] = useState(true);
  const [moedas, setMoedas] = useState([]);

  const [moedaSelecionada, setMoedaSelecionada] = useState(null);

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get("all");
      let arrayMoedas = [];
      Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value:key,
        })
      })

      console.log(arrayMoedas);
      setMoedas(arrayMoedas);
      setMoedaSelecionada(arrayMoedas[0].key);
      setLoading(false);
    }
    loadMoedas();
  }, [])
  
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#101215'}}>
        <ActivityIndicator color={'#FFF'} size={"large"}></ActivityIndicator>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text>Selecione sua moeda </Text>
        <PickerItem
          moedas={moedas}
          moedaSelecionada={moedaSelecionada}
          onChange={(moeda) => {setMoedaSelecionada(moeda)}}
        ></PickerItem>
      </View>
        <View style={styles.areaValor}>
        <Text style={styles.titulo}>Digite um valor para converter em (R$)</Text>
        <TextInput placeholder='EX 1.50' style={styles.input} keyboardType='numeric'></TextInput>
      </View>
      <TouchableOpacity style={styles.botaoArea}>
        <Text style={styles.botaoText}>Converter</Text>
      </TouchableOpacity>
      <View style={styles.areaResultado}>
        <Text style={styles.valorConvertido}>
          3 BTC
        </Text>

        <Text style={{fontSize: 18, margin: 8}}>
           Corresponse a
        </Text>

        <Text style={styles.valorConvertido}>
          R$ 100,00
        </Text>
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
    padding: 8,
    marginBottom: 1,
  },
  titulo: {
    fontSize: 16,
    color: '#000',
    paddingLeft: 5,
    paddingTop: 5,
  },
  areaValor: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingTop: 8,
    Paddingbottom: 8,
  },
  input: {
    width: '100%',
    fontSize: 18,
    padding: 8,
  },
  botaoArea: {
    width: '90%',
    backgroundColor: '#FB4B57',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBotoomRightRadius: 8,
  },
  botaoText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  areaResultado: {
    width: '90%',
    backgroundColor: '#FFF',
    marginTop: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  valorConvertido: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold'
  }

});
