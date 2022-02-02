// Import React
/* 
View : Equivalent RN de <div></div>
Text : Equivalent RN du <p></p>
Button : Equivalent RN de <button></button>
StyleSheet : Permet de gérer les styles car RN ne permet pas l'utilisation de fichiers .css : tout se fait dans un objet StyleSheet. Voir fin de la page pour exemple
 */
import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

// Structure du composant fonction classique.
export const Introduction = props => {
  let [cour, setCour] = useState({
    nom: '',
    numero: '',
  });

  const handlePress = e => {
    setCour({
      nom: 'ReactNative : Tuto',
      numero: 42,
    });
  };

  return (
    <View>
      <View>
        <Text>Composant Intro</Text>
      </View>
      <View>
        <Text style={styles.text}>Bienvenue</Text>
        <Text>Cour : {cour.nom}</Text>
        <Text>Numéro : {cour.numero}</Text>
        <Text>Je suis suivi par {props.monNom}</Text>
      </View>
      <View>
        {/*
        Button : Element bouton spécifique à ReactNative
            - onPress est l'équivalent du onClick
        */}
        <Button
          title="Click me !"
          onPress={handlePress}
          style={styles.button}
        />
      </View>
    </View>
  );
};

// Style :
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
});

export default Introduction;
