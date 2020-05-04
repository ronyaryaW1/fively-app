import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import MainFeature from '../../../components/molecules/MainFuture';

const Featur = (props) => {
    return (
        <View style={styles.mainFuture}>
            <View style={styles.iconSection}>
                <MainFeature
                    title="GO-RIDE"
                    img={require('../../../assets/icon/go-ride.png')}
                />
                <MainFeature
                    title="GO-CAR"
                    img={require('../../../assets/icon/go-car.png')}
                />
                <MainFeature
                    title="GO-BLUEBIRD"
                    img={require('../../../assets/icon/go-bluebird.png')}
                />
                <MainFeature
                    title="GO-SEND"
                    img={require('../../../assets/icon/go-send.png')}
                />
            </View>
            <View style={styles.iconSection}>
                <MainFeature
                    title="GO-DEALS"
                    img={require('../../../assets/icon/go-deals.png')}
                />
                <MainFeature
                    title="GO-PULSA"
                    img={require('../../../assets/icon/go-pulsa.png')}
                />
                <MainFeature
                    title="GO-FOOD"
                    img={require('../../../assets/icon/go-food.png')}
                />
                <MainFeature
                    title="GO-MORE"
                    img={require('../../../assets/icon/go-more.png')}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    mainFuture: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 18,
    },
    iconMain: {
        width: 58,
        height: 58,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#EFEFEF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuContainer: {
        width: `${100 / 4}%`,
        alignItems: 'center',
    },
    iconSection: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 18,
    },
    textMenuFuture: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    },
    menuContainer: {
        width: `${100 / 4}%`,
        alignItems: 'center',
    },
    iconMain: {
        width: 58,
        height: 58,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#EFEFEF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMenuFuture: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    },
});
export default Featur;