import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';

export const Scroller = () => {
  let [items, setItems] = useState([
    {
      key: 1,
      nom: 'Objet01',
    },
    {
      key: 2,
      nom: 'Objet02',
    },
    {
      key: 3,
      nom: 'Objet03',
    },
    {
      key: 4,
      nom: 'Objet04',
    },
    {
      key: 5,
      nom: 'Objet05',
    },
    {
      key: 6,
      nom: 'Objet06',
    },
    {
      key: 7,
      nom: 'Objet07',
    },
    {
      key: 8,
      nom: 'Objet08',
    },
    {
      key: 9,
      nom: 'Objet09',
    },
    {
      key: 10,
      nom: 'Objet10',
    },
  ]);

  /**
   * Ajoute un objet supplémentaire à chaque raffraichissement
   */
  const handleRefresh = () => {
    setRefresh(true);
    let size = items.length + 1;
    setItems([...items, {key: size, nom: `Objet${size}`}]);
    setRefresh(false);
  };

  let [refresh, setRefresh] = useState(false);

  return (
    <SafeAreaView>
      <Text>Ceci est le composant Scroller</Text>
      {/*
        ScrollView a des options :
        - RefreshControll: Reload quand on remonte dans la liste
            - refreshing: false par défaut pour éviter un chargement infini
            - onRefresh: Définit ce qu'il faut faire lors du refresh
            - colors: Permet de définir la couleur de la roue de chargement. Doit être indiqué dans un tableau d'un élément.
        */}
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={handleRefresh}
            colors={['#800080']}
          />
        }>
        {/* <Text>Composant Scroller</Text> */}
        {items &&
          items.map(i => {
            // Key : Oblibatoire : Définit un identifiant unique pour chaque élément de la liste
            // i : Element
            // i.nom : attibut 'nom' de l'élément
            return (
              <Text key={i.key} style={styles.text}>
                {i.nom}
              </Text>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  scrollView: {
    height: 100,
    backgroundColor: 'pink',
  },
});

export default Scroller;
