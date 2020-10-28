import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import InputArea from "./assets/components/InputArea";
import Pelicula from "./assets/components/Pelicula";

export default function App() {
  const [lista, setLista] = useState([]);

  const [itemCounter, setitemCounter] = useState(0);

  const agregarItem = (item) => {
    if (!item == "") {
      setLista([...lista, { id: itemCounter, valor: item }]);
      setitemCounter(itemCounter + 0.000001);
      console.log("Agregada la película: " + item);
      setIsModalVisible(false);
    }
  };

  const cancelarPelicula = () => {
    setIsModalVisible(false);
  };

  const onDelete = (peliculaID) => {
    console.log("ID de la pelicula:" + peliculaID);
    setLista((lista) => {
      return lista.filter((peli) => peli.id !== peliculaID);
    });
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>¡Bienvenid@ {"\n"} a tu watch-list!</Text>
        <TouchableHighlight
          style={styles.activador}
          onPress={() => setIsModalVisible(true)}
          underlayColor={"#00796b"}
        >
          <Text style={styles.activadorText}>Añadir una película</Text>
        </TouchableHighlight>
      </View>

      <InputArea
        style={{ padding: "1%" }}
        cancelarPelicula={cancelarPelicula}
        agregarItem={agregarItem}
        resetter={""}
        isModalVisible={isModalVisible}
      />

      {lista.length > 0 ? (
        <Text style={styles.helper}>
          Pulsa sobre una película para eliminarla
        </Text>
      ) : null}

      {lista.length == 0 ? (
        <Text style={styles.helperEmpty}>¡Vaya! Tu lista está vacía.</Text>
      ) : null}

      <ScrollView style={{ width: "100%", padding: "1%" }}>
        {lista.map((item, index) => (
          <Pelicula
            item={item.valor}
            key={index}
            onDelete={onDelete}
            id={item.id}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00796b",
    alignItems: "center",
    justifyContent: "center",
    padding: "15%",
  },
  headerContainer: {
    marginTop: "10%",
    marginBottom: "5%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 30,
    borderRadius: 15,
    padding: 3,
  },
  header: {
    color: "#004d40",
    fontSize: 24,
    fontWeight: "700",
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 2,
  },
  helper: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  helperEmpty: {
    position: "absolute",
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  activador: {
    backgroundColor: "#004d40",
    borderRadius: 8,
    padding: "5%",
    margin: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  activadorText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "500",
  },
});
