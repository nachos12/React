import { View, Text, Pressable, StyleSheet, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

export const Calculatrice = () => {
  /*creation des etats*/ 
  let [calcul, setCalcul] = useState("");
  let [resultat, setResultat] = useState(0);
  /*le calcul*/
  const handlePress = (value) => {
    setCalcul(calcul += value)
  }
  const handleClear = () => {
    setCalcul("")
    setResultat(0)
  }
  /*resultat*/
  const handleResult = () => {
    setResultat(eval(calcul))
  }
  /*afficher le calcule*/
  const handleChange = (value) => {
    setCalcul(value)
  }
  return (
/*les boutons*/
    <View style={styles.body}>
      <View>
        <Text style={styles.textCalcul}>{calcul}</Text>
      </View>
      <View>
        <Text style={styles.textCalcul}> Resultat : {resultat}</Text>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.press} onPress={() => handlePress("0")}>
          <Text style={styles.textPress}>0</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("1")}>
          <Text style={styles.textPress}>1</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("2")}>
          <Text style={styles.textPress}>2</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable style={styles.press} onPress={() => handlePress("3")}>
          <Text style={styles.textPress}>3</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("4")} >
          <Text style={styles.textPress}>4</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("5")}>
          <Text style={styles.textPress}>5</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable style={styles.press} onPress={() => handlePress("6")}>
          <Text style={styles.textPress}>6</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("7")}>
          <Text style={styles.textPress}>7</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("8")}>
          <Text style={styles.textPress}>8</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable style={styles.press} onPress={() => handlePress("9")}>
          <Text style={styles.textPress}>9</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress(".")}>
          <Text style={styles.textPress}>.</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable style={styles.press} onPress={() => handlePress("+")}>
          <Text style={styles.textPress}>+</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("-")}>
          <Text style={styles.textPress}>-</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable style={styles.press} onPress={() => handlePress("*")}>
          <Text style={styles.textPress}>*</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => handlePress("/")}>
          <Text style={styles.textPress}>/</Text>
        </Pressable>
      </View>
       {/* input du calcul pour lecrir sans les presse bouton*/}
      <TextInput
        onChangeText={handleChange}
        placeholder='Ecrire le calcul'
        style={styles.input}
        keyboardType="default"

      />
      <View>
        <Pressable style={styles.press} onPress={handleResult}>
          <Text style={styles.textPress}>=</Text>
        </Pressable>
      </View>

      <Button onPress={handleClear} title='EFFACER'></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 25,
    margin: 5
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  press: {
    width: 50,
    height: 50,
    borderRadius: 1,
    backgroundColor: "#27b197",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:50,
  },
  textPress: {
    color: "white"
  },
  textCalcul: {
    fontSize: 30,
    margin: 3,
    color: "black"
  },
  input: {
    maxWidth: 300,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    fontSize: 20,
    margin: 5,
    color: "grey"
  }
})
export default Calculatrice;