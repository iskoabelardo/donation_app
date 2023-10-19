import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from '../config/Firebase';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); 

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const handleLogin = async () => {
        try {
          setError(null);
      
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
          const user = userCredential.user;
        } catch (error) {
          console.error("Firebase Error:", error);
          if (error.code === 'auth/wrong-password') {
            setError('Wrong Password');
          } else if (error.code === 'auth/user-not-found') {
            setError('Incorrect email');
          } else {
            setError('An error occurred while trying to log in.');
          }
        }
      };
    
    

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: '#A6D267' }}>
            <SafeAreaView className="flex">
                <View className="flex-row justify-start">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="bg-gray-300 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2">
                        <ChevronLeftIcon size="20" color="black" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                    <Image source={require("../assets/clothing-donation.png")}
                        style={{ width: 350, height: 350 }} />
                </View>
            </SafeAreaView>
            <View className="flex-1 bg-white px-8 pt-8"
                style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View className="form space-y-2">
                    <Text className="text-gray-700 ml-4"> Email Address </Text>
                    <TextInput
                        className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Text className="text-gray-700 ml-4"> Password </Text>
                    <TextInput
                        className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                </View>
                {error && (
                    <Text className="text-red-500 ml-4 mb-2">
                        {error}
                    </Text>
                )}
                <TouchableOpacity className="flex items-end mb-5">
                    <Text className="text-gray-700">Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleLogin}
                    className="mt-5 py-3 rounded-xl"
                    style={{ backgroundColor: '#81D2C7' }}>
                    <Text className="text-gray-700 font-xl font-bold text-center"> Login </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
