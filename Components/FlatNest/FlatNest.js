import React, {useState} from 'react';
import {View, Text, FlatList, SafeAreaView, RefreshControl} from 'react-native';

export const FlatNest = () => {
  let [items, setItems] = useState([
    {
      key: '1',
      nom: 'Objet01',
    },
    {
      key: '2',
      nom: 'Objet02',
    },
    {
      key: '3',
      nom: 'Objet03',
    },
    {
      key: '4',
      nom: 'Objet04',
    },
    {
      key: '5',
      nom: 'Objet05',
    },
    {
      key: '6',
      nom: 'Objet06',
    },
    {
      key: '7',
      nom: 'Objet07',
    },
    {
      key: '8',
      nom: 'Objet08',
    },
    {
      key: '9',
      nom: 'Objet09',
    },
    {
      key: '10',
      nom: 'Objet10',
    },
  ]);

  let [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(true);
    let size = items.length + 1;
    setItems([...items, {key: size, nom: `Objet${size}`}]);
    setRefresh(false);
  };

  const renderItem = ({item}) => (
    <View>
      <Text>{item.nom}</Text>
    </View>
  );

  const keyExtractor = (item, index) => index.toString();
  return (
    <SafeAreaView>
      <Text>Ceci est le composant Flatlist</Text>
      {/* FlatList sert à gérer les liste. Il ne sera donc pas nécessaire de mapper */}
      <FlatList
        // data: Permet de pointer vers la liste
        // renderItem: Accueillera la fonction qu'on pourra appliquer à la liste
        //  - Pas besoin de key si il y a déjà un attribu "key" dans les objets, mais doivent être en format string !
        // keyExtractor: Attribu pour accueillir les clefs.
        // numColums: Nombre de colonnes pour afficher les éléments
        // horizontal: affiche la liste horizontalement au lieu de verticalement.
        // inverted : Inverse le sens de la liste
        style={{height: 50}}
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        // numColumns={2}
        // horizontal
        // inverted
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={handleRefresh}
            colors={['#800080']}
          />
        }
      />
    </SafeAreaView>
  );
};

export default FlatNest;
