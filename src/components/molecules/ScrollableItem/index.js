import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
const ScrollableItem = (props) => {
    return (
        <View style={styles.contenRestoran}>
            <View style={styles.imgRestoran}>
                <Image
                    source={props.img}
                    style={styles.imgNearbyRest}
                />
            </View>
            <Text style={styles.namaRestoran}>{props.title}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    contenRestoran: {
        marginRight: 15,
    },
    imgRestoran: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
    imgNearbyRest: {
        width: undefined,
        height: undefined,
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    logoFood: {
        width: undefined,
        height: undefined,
        flex: 1,
        resizeMode: 'contain',
    },
    namaRestoran: {
        marginTop: 12,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1C1C1C',
    },
});
export default ScrollableItem;