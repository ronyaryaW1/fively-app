import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';

const IconWIthText = (props) => {
    return (
        <View>
            <View style={{ width: 60, height: 60, backgroundColor: '#61A756', borderRadius: 60 }} />
            <Text style={{ maxWidth: 70, textAlign: 'center', marginTop: 10 }}>{props.title}</Text>
        </View>
    )
}
const IconAction = () => {
    return (
        <View style={{ width: 35, height: 35, backgroundColor: 'white', borderRadius: 35 }}>
            <Text>i</Text>
        </View>
    )
}
export default class ScanQRCode extends React.Component {
    // state = {
    //     barcode: 'More Option'
    // }
    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'grey' }}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onBarCodeRead={(barcode) => {
                            console.log(barcode);
                            this.setState({
                                barcode: barcode.data
                            })
                        }}
                    />
                </View>
                <View style={{ height: 100, backgroundColor: 'white', paddingHorizontal: 16 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={{
                            flex: 0,
                            backgroundColor: '#fff',
                            borderRadius: 5,
                            padding: 15,
                            paddingHorizontal: 20,
                            alignSelf: 'center',
                            margin: 20,
                        }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity>
                                    <Image source={require('../../../assets/icon/flash.png')} style={{ width: 24, height: 24 }} />
                                </TouchableOpacity>
                                <View style={{ marginLeft: 30, marginRight: 30 }}>
                                    <Image source={require('../../../assets/icon/Big.png')} style={{ width: 52, height: 52 }} />
                                </View>
                                <TouchableOpacity style={{}}>
                                    <Image source={require('../../../assets/icon/refres.png')} style={{ width: 24, height: 24 }} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
