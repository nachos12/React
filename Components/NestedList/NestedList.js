import React from 'react';
import {View, Text, SafeAreaView, SectionList} from 'react-native';

export const NestedList = () => {
  const items = [
    {
      key: '1',
      titre: 'Le truc 1',
      data: ['truc1-1', 'truc1-2', 'truc1-3'],
    },
    {
      key: '2',
      titre: 'Le truc 2',
      data: ['truc2-1', 'truc2-2', 'truc2-3'],
    },
    {
      key: '3',
      titre: 'Le truc 3',
      data: ['truc3-1', 'truc3-2', 'truc3-3'],
    },
    {
      key: '4',
      titre: 'Le truc 4',
      data: ['truc4-1', 'truc4-2', 'truc4-3'],
    },
    {
      key: '5',
      titre: 'Le truc 5',
      data: ['truc5-1', 'truc5-2', 'truc5-3'],
    },
  ];

  const renderItem = ({item}) => (
    <View>
      <Text>{item}</Text>
    </View>
  );

  const keyExtractor = (item, index) => index.toString();

  const renderSectionHeader = ({section}) => (
    <View>
      <Text>{section.titre}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <Text>Ceci est le composant NestedList</Text>
      <SectionList
        /*
         * Permet de gérer "facilement" les listes imbriquées
         * section : Totalité de la liste d'objets
         * keyExtractor : Comme pour les flatlist
         * renderitem: idem flatlist
         * renderSectionHeader: Permet d'isoler ce qui sera affiché comme titre lors de l'affichage
         */
        sections={items}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        style={{height: 100}}
      />
    </SafeAreaView>
  );
};

export default NestedList;
