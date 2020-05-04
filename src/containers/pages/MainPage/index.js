import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import MainBanner from '../../../components/molecules/MainBanner'
import ScrollableItem from '../../../components/molecules/ScrollableItem'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Navbar1 from '../../../containers/organisms/Navbar1';


export default class MainPage extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View>
                        <MainBanner />
                    </View>
                    <View style={{ paddingHorizontal: 16 }}>
                        <View style={{ paddingHorizontal: 14, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 34, fontWeight: 'bold', marginTop: 30 }}>New</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'normal', marginTop: 50, color: '#DB3022' }}>View all</Text>
                        </View>
                        <View style={{ paddingHorizontal: 14 }}>
                            <Text style={{ color: 'gray', fontSize: 11 }}>You’ve never seen it before!</Text>
                        </View>
                        <ScrollView horizontal={true} style={{ flexDirection: 'row', marginTop: 22 }}>
                            <TouchableOpacity>
                                <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={{ paddingHorizontal: 16 }}>
                        <View style={{ paddingHorizontal: 14, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 34, fontWeight: 'bold', marginTop: 30 }}>Discount</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'normal', marginTop: 50, color: '#DB3022' }}>View all</Text>
                        </View>
                        <View style={{ paddingHorizontal: 14 }}>
                            <Text style={{ color: 'gray', fontSize: 11 }}>You’ve never seen it before!</Text>
                        </View>
                        <ScrollView horizontal={true} style={{ flexDirection: 'row', marginTop: 22, marginBottom: 20 }}>
                            <TouchableOpacity>
                                <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </ScrollView>
                {/* <Navbar1 /> */}
            </View>

        )
    }
}
