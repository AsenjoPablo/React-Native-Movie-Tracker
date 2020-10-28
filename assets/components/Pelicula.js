import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Pelicula = (props) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={props.onDelete.bind(this, props.id)}
      activeOpacity="0.7"
    >
      <View>
        <Text style={styles.listItemText}>{props.item}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#ffffff",
    padding: "8%",
    width: "100%",
    borderRadius: 6,
    marginVertical: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  listItemText: {
    color: "#111D5B",
    fontSize: 24,
    fontWeight: "700",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default Pelicula;
