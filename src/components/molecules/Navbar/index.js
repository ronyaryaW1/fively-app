import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Navbar = (props) => {
    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.icon}>
                    <Image source={props.img} />
                </View>
                <Text style={{
                    fontSize: 10,
                    color: '#545454',
                    marginTop: 4,
                    color: props.active ? '#61A756' : '#545454',
                }}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    bottomNav: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 30,
        height: 42,
        backgroundColor: 'white',
    },
    textIcon: {
        fontSize: 10,
        color: '#545454',
        marginTop: 4,
    },
});
export default Navbar;