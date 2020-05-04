import React from 'react';
import { Text, View, TouchableOpacity, Image, Appbar, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class VisualSearch extends React.Component {
    render() {
        return (
            //  />
            <View style={{
                flex: 1,
                flexDirection: "column"
            }}>
                <ImageBackground source={require('../../../assets/dummy/image.png')} style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}>
                    <View style={{ paddingHorizontal: 16, alignItems: 'center', marginTop: 25 }}>
                        <Text style={{ fontSize: 24, color: 'white' }}>Search for an outfit by taking a photo or uploading an image</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <TouchableOpacity style={{ width: 330, height: 50, backgroundColor: 'red', borderRadius: 30, justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('TakingPhoto')}>
                            <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>TAKE A PHOTO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 16 }}>
                        <TouchableOpacity style={{ width: 330, height: 50, borderRadius: 30, justifyContent: 'center', borderWidth: 1, borderColor: 'white' }}>
                            <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>TAKE A PHOTO</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

        )
    }
}
