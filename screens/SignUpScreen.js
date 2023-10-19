import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { auth } from '../config/Firebase';

export default function SignUpScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const handleSignUp = async () => {
        try {
            setError(null); // Clear any previous errors

            if (password !== confirmPassword) {
                setError("Passwords do not match");
                return;
            }

            if (!/(?=.*[A-Z])(?=.*\d)(?![a-zA-Z\d]+$).{8,}/.test(password)) {
                setError("Your password should be strong, including at least one uppercase letter, one lowercase letter, and one number.");
                return;
            }

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;


        } catch (error) {
            setError(error.message);
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
                        style={{ width: 100, height: 100 }} />
                </View>
            </SafeAreaView>
            <View className="flex-row justify-start ml-5 mb-1">
                <Text className="text-black font-bold text-2xl text-right">
                    Create a new account
                </Text>
            </View>
            <View className="flex-1 bg-white px-8 pt-8"
                style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View className="form space-y-2">
                    <Text className="text-gray-700 ml-4"> Name </Text>
                    <TextInput
                        className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Text className="text-gray-700 ml-4"> Email </Text>
                    <TextInput
                        className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Text className="text-gray-700 ml-4"> Mobile Number </Text>
                    <TextInput
                        className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
                        value={phoneNumber}
                        onChangeText={(text) => {
                            const numericText = text.replace(/[^0-9]/g, '');
                            setPhoneNumber(numericText);
                        }}
                        keyboardType="numeric"
                    />

                    <Text className="text-gray-700 ml-4"> Password </Text>
                    <TextInput
                        className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                    <Text className="text-gray-700 ml-4"> Confirm Password </Text>
                    <TextInput
                        className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        secureTextEntry
                    />
                </View>

                {error && (
                    <Text className="text-red-500 ml-4 mb-2">
                        {error}
                    </Text>
                )}

                <TouchableOpacity
                    onPress={handleSignUp}
                    className="py-3 rounded-xl mt-5"
                    style={{ backgroundColor: '#81D2C7' }}
                >
                    <Text className="text-gray-700 font-xl font-bold text-center"> Sign up </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
