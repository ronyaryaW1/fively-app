import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
const MainBanner = (props) => {
    return (
        <View>
            <View style={styles.imageContainerNews}>
                <Image
                    source={require('../../../assets/dummy/MainBaner.png')}
                    style={styles.imgNews}
                />
                <View style={styles.item} />
                <View style={{ paddingRight: 140, paddingLeft: 16, alignItems: 'center', marginTop: 300, position: 'absolute' }}>
                    <Text style={{ fontSize: 48, color: 'white', fontWeight: 'bold' }}>Fashion sale</Text>
                    <TouchableOpacity style={{ width: 160, height: 40, borderRadius: 30, justifyContent: 'center', backgroundColor: 'red', marginTop: 30, alignSelf: 'flex-start' }}>
                        <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>Check</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    imageContainerNews: {
        position: 'relative',
    },
    imgNews: {
        width: '100%',
        height: 500
    },
    item: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0.2,
        borderRadius: 7,
    },
    containerLogoWhite: {
        width: 55,
        height: 15,
        position: 'absolute',
        left: 16,
        top: 16,
    },
    logoWhite: {
        width: undefined,
        height: undefined,
        flex: 1,
        resizeMode: 'contain',
    },
    news: {
        paddingTop: 12,
        paddingBottom: 20,
    },
    gofoodBanner: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    textJudulGofood: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 8,
    },
    desGofood: {
        fontSize: 12,
        color: 'white',
        fontWeight: '400',
    },
    buttonGofood: {
        backgroundColor: '#61A756',
        paddingHorizontal: 12,
        paddingVertical: 11,
        alignSelf: 'stretch',
        borderRadius: 5,
    },
    textButtonGofood: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

});
export default MainBanner;