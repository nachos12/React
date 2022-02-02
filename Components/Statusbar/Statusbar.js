import React, {useState} from 'react';
import {View, Text, SafeAreaView, StatusBar, Button} from 'react-native';

const STYLES = ['default', 'dark-content', 'light'];

export const Statusbar = () => {
  const [hidden, setHidden] = useState(false);
  const [animated, setAnimated] = useState(true);
  const [statusStyle, setStatusStyle] = useState(STYLES[0]);

  const handleVisibility = () => {
    setHidden(!hidden);
  };
  const handleAnimated = () => {
    setAnimated(!animated);
  };

  /**
   * Modifie le style de la statusbar. Retourne à 0 si supérieur à la taille du tableau
   */
  const handleTheme = () => {
    let styleIndex = STYLES.indexOf(statusStyle);

    styleIndex += 1;

    if (styleIndex === STYLES.length) {
      styleIndex = 0;
    }

    setStatusStyle(STYLES[styleIndex]);
  };

  return (
    //   Balise pour délilmiter la taille de l'écran
    <SafeAreaView>
      {/* Balise qui permet de gérer la status bar */}
      <StatusBar hidden={hidden} barStyle={statusStyle} animated={animated} />
      <View>
        <Text>Ceci est ma StatusBar</Text>
      </View>
      <View>
        <Text>La statusbar est : {hidden ? 'caché' : 'visible'}</Text>
      </View>
      <View>
        <Button title="Visibilité" onPress={handleVisibility} />
      </View>
      <View>
        <Text>Le thème est {statusStyle}</Text>
      </View>
      <View>
        <Button title="Switch theme" onPress={handleTheme} />
      </View>
      <View>
        <Text>Animated est à {animated}</Text>
      </View>
      <View>
        <Button title="Switch Animated" onPress={handleAnimated} />
      </View>
    </SafeAreaView>
  );
};

export default Statusbar;
