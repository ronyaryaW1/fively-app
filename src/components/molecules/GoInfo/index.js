import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
const GoInfo = (props) => {
    return (
        <View>
            <View style={styles.wraperInfo}>
                <View style={styles.logoGojek}>
                    <Image
                        source={require('../../../assets/logo/gojek.png')}
                        style={styles.logoWhite}
                    />
                </View>
                <Text style={styles.textInfo}>Complete Your profile</Text>
                <View style={styles.wraperFb}>
                    <View>
                        <Image source={require('../../../assets/dummy/facebook-connect.png')} />
                    </View>
                    <View style={styles.wrapText}>
                        <Text style={styles.fb}>Connect with Facebook</Text>
                        <Text style={styles.descFb}>
                            Login faster without verification code
                    </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>CONNECT</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.borderButtom} />
        </View>
    );
};
const styles = StyleSheet.create({
    wraperInfo: {
        padding: 16,
    },
    logoGojek: {
        width: 55,
        height: 15,

    },
    logoWhite: {
        width: undefined,
        height: undefined,
        flex: 1,
        resizeMode: 'contain',
    },
    textInfo: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 15,
        color: '#1C1C1C',
        marginBottom: 20,
    },
    wraperFb: {
        flexDirection: 'row',
    },
    wrapText: {
        marginLeft: 16,
        flex: 1,
        marginRight: 36,
        marginBottom: 16,
    },
    fb: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#4A4A4A',
    },
    descFb: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#4A4A4A',
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
    borderButtom: {
        marginTop: 20,
        borderBottomColor: '#E8E9ED',
        opacity: 0.1,
        borderWidth: 1,
    },
});
export default GoInfo;