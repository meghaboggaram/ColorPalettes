import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const PalettePreview = ({ colorPalette, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <Text style={styles.text}>{colorPalette.paletteName}</Text>
        <FlatList
          style={styles.list}
          horizontal={true}
          data={colorPalette.colors.slice(0, 5)}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => (
            <View style={[styles.box, { backgroundColor: item.hexCode }]} />
          )}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 10,
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
    /*For IOS*/
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    /*For Android*/
    elevation: 5,
  },
  list: {
    marginBottom: 20,
  },
});

export default PalettePreview;
