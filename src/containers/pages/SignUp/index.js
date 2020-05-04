import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SignUp extends React.Component {
    state = {
        email: '',
        name: '',
        Password: ''
    };
    render() {
        return (
            <View style={{ paddingHorizontal: 16 }}>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>SignUp</Text>
                </View>
                <View style={{ alignContent: 'center', marginTop: 28 }}>
                    <TextInput
                        label='Name'
                        value={this.state.name}
                        mode="outlined"
                        underlineColorAndroid='#DADADA'
                        placeholderTextColor="#DADADA"
                        onChangeText={name => this.setState({ name })}
                    />
                </View>
                <View style={{ alignContent: 'center', marginTop: 14 }}>
                    <TextInput
                        label='Email'
                        value={this.state.email}
                        mode="outlined"
                        underlineColorAndroid='#DADADA'
                        placeholderTextColor="#DADADA"
                        onChangeText={email => this.setState({ email })}
                    />
                </View>
                <View style={{ alignContent: 'center', marginTop: 14 }}>
                    <TextInput
                        label='Password'
                        value={this.state.Password}
                        mode="outlined"
                        underlineColorAndroid='#DADADA'
                        placeholderTextColor="#DADADA"
                        onChangeText={Password => this.setState({ Password })}
                    />
                </View>
                <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'flex-end' }} onPress={() => this.props.navigation.navigate('SignIn')}>
                    <View style={{ marginTop: 2 }}>
                        <Text>Already have an account ?</Text>
                    </View>
                    <View>
                        <Image source={require('../../../assets/icon/foward.png')} style={{ width: 25, height: 25 }} />
                    </View>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', marginTop: 34 }}>
                    <TouchableOpacity style={{ width: 330, height: 50, backgroundColor: 'red', borderRadius: 30, justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>SIGNUP</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ textAlign: 'center' }}>Or sign up with social account</Text>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <TouchableOpacity style={{ width: 92, height: 64, backgroundColor: 'white', borderRadius: 20 }}>
                            <Image source={require('../../../assets/logo/google.png')} style={{ width: 23, height: 25, marginTop: 20, alignSelf: 'center' }} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ width: 92, height: 64, backgroundColor: 'white', borderRadius: 20 }}>
                            <Image source={require('../../../assets/logo/facebook.png')} style={{ width: 25, height: 25, marginTop: 20, alignSelf: 'center' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
