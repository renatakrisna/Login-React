import { View, Image, Button, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { API_URL, useAuth } from "../context/AuthContext";
import { handleLogin, handleSignIn } from "../context/loginController";


const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const {onLogin, onRegister} = useAuth();


    const login = async () => {
        handleLogin(email, password, navigation );
    };

    // Chamamos automaticamente o login após um registro bem-sucedido
    const register = async () => {

    };
    
    return (
    <View style={styles.container}>
        <Image source={{ uri: 'https://galaxies.dev/img/logos/logo--blue.png'}} style={styles.image}/>
        <View style = {styles.from}>
            <TextInput style={styles.input} placeholder="Email" onChangeText={(text:string) => setEmail(text)} value={email}/>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text:string) => setPassword(text)} value={password}/>
            <Button onPress={login} title="Sign in"/>
            <Button onPress={register} title="Create Account" />
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
    },
    from: {
        gap: 10,
        width: '60%',
    },
    input: {
        height: 44,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
    },
    container: {
        alignItems: 'center',
        width: '100%',
    },
});
export default Login;
