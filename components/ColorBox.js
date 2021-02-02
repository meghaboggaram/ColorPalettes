import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const bgColor = {
    backgroundColor: hexCode,
  };
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.container, bgColor]}>
      <Text style={(styles.boxText, textColor)}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    /*For IOS*/
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    /*For Android*/
    elevation: 5,
  },
  boxText: {
    color: 'white',
    fontSize: 14,
  },
});

export default ColorBox;
