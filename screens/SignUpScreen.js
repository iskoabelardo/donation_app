import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'

export default function SignUpScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);

    return (
        <ScrollView className="flex-1 bg-white" style={{backgroundColor: '#3EB489'}}>
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
            </SafeAreaView>
            <View className="flex-row justify-start ml-5 mb-1">
                <Text className="text-black font-bold text-2xl text-right">
                    Create new account
                </Text>
            </View>
            <View className="flex-1 bg-white px-8 pt-8 pb-8"
                style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
                <View className="form space-y-3">
                    <Text className="text-gray-700 ml-4"> Full Name </Text>
                    <TextInput 
                    className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                    //placeholder='Enter full name'
                    />
                    <Text className="text-gray-700 ml-4"> Email </Text>
                    <TextInput 
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                        secureTextEntry
                        //placeholder='Enter email'
                        />
                    <Text className="text-gray-700 ml-4"> Mobile Number </Text>
                    <TextInput 
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                        secureTextEntry
                        //placeholder='Enter mobile number'
                        />
                    <Text className="text-gray-700 ml-4"> Password </Text>
                    <TextInput 
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                        secureTextEntry
                        //placeholder='Enter password'
                        />
                    <Text className="text-gray-700 ml-4"> Retype Password </Text>
                    <TextInput 
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
                        secureTextEntry
                        //placeholder='Retype password'
                        />
                </View>
                <TouchableOpacity className="py-3 rounded-xl mt-5 mb-5" style={{backgroundColor: '#59F0E0'}}>
                    <Text className="text-gray-700 font-xl font-bold text-center"> Sign up </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}