import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const InputArea = (props) => {
  const [peliInsertada, setPeliInsertada] = useState("");

  return (
    <View style={styles.inputAreaContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Introduce el título..."
        onChangeText={(text) => setPeliInsertada(text)}
      />
      <TouchableHighlight
        style={styles.addBtn}
        onPress={props.agregarItem.bind(this, peliInsertada)}
        underlayColor="#FFDC2E"
      >
        <Text style={styles.addBtnText}>+</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#ffffff",
    padding: "2%",
    paddingLeft: "5%",
    fontSize: 16,
    justifyContent: "center",
    borderRadius: 8,
    width: "75%",
    marginRight: "10%",
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
    borderRadius: 8,
    width: "15%",
    padding: "1%",
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
    width: "100%",
    marginHorizontal: "5%",
    textAlign: "center",
    marginBottom: "5%",
    padding: "1%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default InputArea;
