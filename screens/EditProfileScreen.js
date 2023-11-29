import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { useState } from 'react'


export default EditProfile = () => {
    const navigation = useNavigation();

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    const [inputPassword, setInputPassword] = useState('')
    const [inputConfirmPassword, setInputConfirmPassword] = useState('')

    const handleChange = ({input, type}) => {
        if (type === 'name'){
          setInputName(input)
        } else if (type === 'email'){
          setInputEmail(input)
        } else if (type === 'mobile_number'){
          setInputNumber(input)
        } else if (type === 'password'){
          setInputPassword(input)
    }
}

    return(
        <ScrollView className="flex-1 bg-gray" style={{backgroundColor: '#75BAA4'}}>
            <SafeAreaView className="flex">
                <View className="flex-row justify-start">
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        className="bg-gray-300 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2">
                        <ChevronLeftIcon size="20" color="black"/>
                    </TouchableOpacity>
                </View>
                <View className="ml-4 mt-3"> 
                    <Text className="text-3xl font-bold mt-2"> Edit Profile </Text>
                </View>
                <View className="flex justify-center items-center mt-3 mb-3">
                    <TouchableOpacity className="mt-7">
                        <Image source={require("../assets/iu_bonnet.jpg")}
                            className="h-24 w-24 rounded-full"/>
                    </TouchableOpacity>
                    <Text className="mt-2 text-base"> Change photo</Text>
                </View>
                <KeyboardAvoidingView 
                    className="flex-1 px-8 pt-8"
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
                    <View className="form space-y-2">
                        <Text className="text-gray-700 ml-4"> Full Name </Text>
                            <TextInput 
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                                placeholder='Change full name'
                                value = {inputName} 
                                onChangeText={(text)=>handleChange({input: text, type: 'name'})}
                            />
                        <Text className="text-gray-700 ml-4"> Email </Text>
                            <TextInput 
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                                placeholder='Change email'
                                value = {inputEmail} 
                                onChangeText={(text)=>handleChange({input: text, type: 'email'})}
                            />
                        <Text className="text-gray-700 ml-4"> Mobile Number </Text>
                            <TextInput 
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                                placeholder='Change mobile number'
                                value = {inputNumber} 
                                onChangeText={(text)=>handleChange({input: text, type: 'mobile_number'})}
                            />
                        <Text className="text-gray-700 ml-4"> Password </Text>
                            <TextInput 
                                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                                secureTextEntry={true}
                                placeholder='Change password'
                                value = {inputPassword} 
                                onChangeText={(text)=>handleChange({input: text, type: 'password'})}
                            />
                        </View>
                        <TouchableOpacity onPress={() => {}}
                            className="mt-2 mb-4 py-3 rounded-2xl" style={{backgroundColor: '#38517E'}}>
                            <Text className="text-xl text-white font-bold text-center"> Save </Text>
                        </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ScrollView>
    )
}