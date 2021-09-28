// icone do mapa
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const color = '#97B6C7';

export default function ({ emoji }) {
  return (
    <View style={styles.container}>
      <Icon name='place' size={50} color={color} />
      <Text style={styles.emoji}>{emoji}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  emoji: {
    position: 'absolute',
    fontSize: 20,
    // Usa o background pra fazer um círculo em volta do emoji
    backgroundColor: color,
    borderRadius: 25,
    borderColor: '#97B6C7',
    borderWidth: 1,
    paddingRight: 2,
    paddingLeft: 4,
    paddingBottom: 4,
    fontFamily: 'NotoColorEmoji',
  },
});
