import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Modal,
} from "react-native";

const InputArea = (props) => {
  const [peliInsertada, setPeliInsertada] = useState("");

  const addPelicula = () => {
    props.agregarItem(peliInsertada);
    setPeliInsertada("");
  };

  const cancelarPelicula = () => {
    props.cancelarPelicula();
  };

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.inputAreaContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Introduce el título..."
          onChangeText={(text) => setPeliInsertada(text)}
        />

        <View style={styles.btnContainer}>
          <TouchableHighlight
            style={[styles.btn, styles.addBtn]}
            onPress={addPelicula}
            underlayColor="#b2dfdb"
          >
            <Text style={styles.addBtnText}>Añadir</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.btn, styles.cancelarBtn]}
            onPress={cancelarPelicula}
            underlayColor="#ffcdd2"
          >
            <Text style={styles.addBtnText}>Cancelar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#ffffff",
    padding: "2%",
    paddingLeft: "5%",
    fontSize: 32,
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  btnContainer: {
    flexDirection: "row",
  },
  btn: {
    borderRadius: 50,
    paddingVertical: 15,
    margin: 15,
    width: "50%",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  addBtn: {
    backgroundColor: "#4db6ac",
  },
  cancelarBtn: {
    backgroundColor: "#e57373",
  },
  addBtnText: {
    color: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "700",
  },
  inputAreaContainer: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    padding: 50,
    backgroundColor: "#004d40",
  },
});

export default InputArea;
