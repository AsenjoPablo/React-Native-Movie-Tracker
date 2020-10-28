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

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.inputAreaContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Introduce el título..."
          onChangeText={(text) => setPeliInsertada(text)}
          onSubmitEditing={(text) => setPeliInsertada("")}
        />
        <TouchableHighlight
          style={styles.addBtn}
          onPress={props.agregarItem.bind(this, peliInsertada)}
          underlayColor="#FFDC2E"
        >
          <Text style={styles.addBtnText}>+</Text>
        </TouchableHighlight>
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
    marginBottom: "10%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  addBtn: {
    backgroundColor: "#FFB800",
    borderRadius: 50,
    padding: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  addBtnText: {
    color: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 24,
  },
  inputAreaContainer: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    padding: 50,
  },
});

export default InputArea;
