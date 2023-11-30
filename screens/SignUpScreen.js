import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { useState } from 'react'
import { showMessage, hideMessage } from "react-native-flash-message";

export default function SignUpScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);
    
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    const [inputLocation, setLocation] = useState('');
    const [inputPassword, setInputPassword] = useState('')
    const [inputConfirmPassword, setInputConfirmPassword] = useState('')


    const handleChange = ({input, type}) => {
        if (type === 'name'){
          setInputName(input)
        } else if (type === 'email'){
          setInputEmail(input)
        } else if (type === 'mobile_number'){
          setInputNumber(input)
        } else if (type === 'location'){
          setLocation(input)
        } else if (type === 'password'){
          setInputPassword(input)
        } else if (type === 'confirm_password'){
          setInputConfirmPassword(input)
        }
      }

    const handleSignup = () => {
        try {
          if (inputName.trim() === '' || inputEmail.trim() === '' || inputNumber.trim() === '' || inputLocation.trim() === '' || inputPassword.trim() === '' ||
                inputConfirmPassword.trim() === '') {
              
            showMessage({
              message: "Invalid Input: Please fill in all fields.",
              type: "danger",
            });
    
            return;
            }
          if (inputPassword.trim() !== inputConfirmPassword.trim() ) {

            showMessage({
            message: "Invalid Input: Password does not match!",
            type: "danger",
            });
    
            return;
            }
            navigation.replace('Login');
        }

        catch (error) {
            showMessage({
              message: error.message,
              type: "danger",
            });
          }
    }

    return (
        <KeyboardAvoidingView 
            className="flex-1 bg-white" style={{backgroundColor: '#75BAA4'}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}>
            <ScrollView className="flex-1">
                <SafeAreaView className="flex">
                    <View className="flex-row justify-start">
                        <TouchableOpacity 
                            onPress={() => navigation.goBack()}
                            className="bg-gray-300 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2">
                            <ChevronLeftIcon size="20" color="black"/>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-center">
                        <Image source={require("../assets/clothing-donation.png")}
                                style={{width:150, height: 150}}/>
                    </View>
                    <View className="flex-row justify-start ml-5 mb-1">
                        <Text className="text-black font-bold text-2xl text-right">
                            Create new account
                        </Text>
                    </View>
                    <View 
                        className="flex-1 bg-white px-8 pt-8 pb-8"
                        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
                        <View className="form space-y-3">
                            <Text className="text-gray-700 ml-4"> Full Name </Text>
                            <TextInput 
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                                placeholder='Enter full name'
                                value = {inputName} 
                                onChangeText={(text)=>handleChange({input: text, type: 'name'})}
                            />
                            <Text className="text-gray-700 ml-4"> Email </Text>
                            <TextInput 
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                                placeholder='Enter email'
                                value = {inputEmail} 
                                onChangeText={(text)=>handleChange({input: text, type: 'email'})}
                                />
                            <Text className="text-gray-700 ml-4"> Mobile Number </Text>
                            <TextInput 
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                                placeholder='Enter mobile number'
                                value = {inputNumber} 
                                onChangeText={(text)=>handleChange({input: text, type: 'mobile_number'})}
                                />
                            <Text className="text-gray-700 ml-4"> Location </Text>
                            <TextInput 
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                                placeholder='Enter location'
                                value = {inputLocation} 
                                onChangeText={(text)=>handleChange({input: text, type: 'location'})}
                                />                            
                            <Text className="text-gray-700 ml-4"> Password </Text>
                            <TextInput 
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                                secureTextEntry={true}
                                placeholder='Enter password'
                                value = {inputPassword} 
                                onChangeText={(text)=>handleChange({input: text, type: 'password'})}
                                />
                            <Text className="text-gray-700 ml-4"> Confirm Password </Text>
                            <TextInput 
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                                secureTextEntry={true}
                                placeholder='Confirm password'
                                value = {inputConfirmPassword} 
                                onChangeText={(text)=>handleChange({input: text, type: 'confirm_password'})}
                                />
                        </View>
                        <TouchableOpacity
                            onPress={handleSignup}
                            className="py-3 rounded-2xl mt-5 mb-5" style={{backgroundColor: '#38517E'}}>
                            <Text className="text-white text-xl font-bold text-center"> Sign up </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}