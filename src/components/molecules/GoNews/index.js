import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
const GoNews = ({ onPress }) => {
    return (
        <View>
            <View style={styles.imageContainerNews}>
                <Image
                    source={require('../../../assets/dummy/sepak-bola.jpg')}
                    style={styles.imgNews}
                />
                <View style={styles.item} />
                <View style={styles.containerLogoWhite}>
                    <Image
                        source={require('../../../assets/logo/white.png')}
                        style={styles.logoWhite}
                    />
                </View>
            </View>
            <View style={styles.news}>
                <Text style={styles.judulNews}>GO-NEWS</Text>
                <Text style={styles.descNews}>
                    EGI Menyelamatkan indonesia atas malaiya dengan cetak 3 gol
                </Text>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.textButton}>READ</Text>
                </TouchableOpacity>
                <View style={styles.borderButtom} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    newsContainer: {
        paddingTop: 16,
        paddingHorizontal: 17,
    },
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
    borderButtom: {
        marginTop: 20,
        borderBottomColor: '#E8E9ED',
        opacity: 0.1,
        borderWidth: 1,
    },
    judulNews: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1C1C1C',
    },
    descNews: {
        color: '#7A7A7A',
        fontSize: 14,
        fontWeight: 'normal',
        marginBottom: 11,
    },
    button: {
        backgroundColor: '#61A756',
        paddingHorizontal: 12,
        paddingVertical: 11,
        alignSelf: 'flex-end',
        borderRadius: 5,
    },
    textButton: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
});
export default GoNews;