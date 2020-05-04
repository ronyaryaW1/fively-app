// functional component
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const GopayFeature = (props) => {
  return (
    <View style={styles.menuGopay}>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.img} />
        <Text style={styles.textMenuGopay}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  menuGopay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMenuGopay: {
    fontSize: 13,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
export default GopayFeature;
