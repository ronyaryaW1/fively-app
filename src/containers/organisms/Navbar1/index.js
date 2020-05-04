import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Navbar from '../../../components/molecules/Navbar';
import { withNavigation } from 'react-navigation';

class NavbarTab extends Component {
    render() {
        return (
            <View style={styles.bawah}>
                <Navbar onPress={() => this.props.navigation.navigate('MainPage')} title="Home" img={require('../../../assets/icon/homeact.png')} />
                <Navbar onPress={() => this.props.navigation.navigate('Orders')} title="Orders" img={require('../../../assets/icon/order.png')} />
                <Navbar onPress={() => this.props.navigation.navigate()} title="Help" img={require('../../../assets/icon/help.png')} />
                <Navbar onPress={() => this.props.navigation.navigate()} title="Inbox" img={require('../../../assets/icon/inbox.png')} />
                <Navbar onPress={() => this.props.navigation.navigate()} title="Account" img={require('../../../assets/icon/account.png')} />
            </View>
        );
    }
};
const styles = StyleSheet.create({
    bawah: {
        flexDirection: 'row',
        height: 54,
        backgroundColor: 'white',
    },
});
export default withNavigation(NavbarTab);