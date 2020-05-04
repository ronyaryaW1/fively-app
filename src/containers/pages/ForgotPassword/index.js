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
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Forgot Password</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'normal' }}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
                </View>
                <View style={{ alignContent: 'center', marginTop: 28 }}>
                    <TextInput
                        label='Email'
                        value={this.state.email}
                        mode="outlined"
                        underlineColorAndroid='#DADADA'
                        placeholderTextColor="#DADADA"
                        onChangeText={email => this.setState({ email })}
                    />
                </View>
                <View style={{ alignItems: 'center', marginTop: 34 }}>
                    <TouchableOpacity style={{ width: 330, height: 50, backgroundColor: 'red', borderRadius: 30, justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>SEND</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
