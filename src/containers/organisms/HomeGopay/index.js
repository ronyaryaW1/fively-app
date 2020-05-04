import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature';
import { withNavigation } from 'react-navigation';

class HomeGopay extends Component {
    render() {
        return (
            <View style={styles.boxGopay}>
                <View style={styles.gopay}>
                    <Image source={require('../../../assets/icon/gopay.png')} />
                    <Text style={styles.textGopay}>Rp 50.000</Text>
                </View>
                <View style={styles.wrapGopay}>
                    <GopayFeature title="Pay" img={require('../../../assets/icon/pay.png')} onPress={() => this.props.navigation.navigate('ScanQRCode')} />
                    <GopayFeature
                        title="Nerbay"
                        img={require('../../../assets/icon/nearby.png')}
                    />
                    <GopayFeature
                        title="Top Up"
                        img={require('../../../assets/icon/topup.png')}
                    />
                    <GopayFeature title="More" img={require('../../../assets/icon/more.png')} />
                </View>
            </View>
        );
    };
}
const styles = StyleSheet.create({
    boxGopay: {
        marginHorizontal: 17,
        marginTop: 15,
    },
    gopay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2C5FB8',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        padding: 14,
        marginTop: 15,
    },
    textGopay: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Roboto',
    },
    wrapGopay: {
        flexDirection: 'row',
        paddingBottom: 14,
        paddingTop: 20,
        backgroundColor: '#2F65BD',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
});
export default withNavigation(HomeGopay);