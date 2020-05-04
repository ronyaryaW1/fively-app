import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
const GoNews = (props) => {
    return (
        <View style={styles.foodBanner}>
            <View style={styles.imageContainerNews}>
                <Image
                    source={require('../../../assets/dummy/food-banner.jpg')}
                    style={styles.imgNews}
                />
                <View style={styles.item} />
                <View style={styles.containerLogoWhite}>
                    <Image
                        source={require('../../../assets/logo/white.png')}
                        style={styles.logoWhite}
                    />
                </View>
                <View style={styles.gofoodBanner}>
                    <View>
                        <Text style={styles.textJudulGofood}>
                            Free GO-FOOD voucher
                </Text>
                        <Text style={styles.desGofood}>
                            Quick, before they run out !
                </Text>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 12 }}>
                        <TouchableOpacity style={styles.buttonGofood}>
                            <Text style={styles.textButtonGofood}>GET VOUCHER</Text>
                        </TouchableOpacity>
                    </View>
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
        height: 170,
        borderRadius: 7,
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
    foodBanner: {
        padding: 14,
    },
    gofoodBanner: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        flexDirection: 'row',
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
export default GoNews;