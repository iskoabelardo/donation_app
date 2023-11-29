import { View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'

export default function OrgLogin() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
    
      return (
        <View className="flex-1 bg-white" style={{backgroundColor: '#75BAA4'}}>
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
                            style={{width:200, height: 200}}/>
                </View>
            </SafeAreaView>
            <KeyboardAvoidingView 
                className="flex-1 bg-white px-8 pt-8"
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
                style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
                <View className="form space-y-2">
                    <Text className="text-xl font-semibold"> Organization Account </Text>
                    <Text className="text-gray-700 ml-4"> Email Address </Text>
                    <TextInput 
                    className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3" 
                    //placeholder='Enter email'
                    />
                    <Text className="text-gray-700 ml-4"> Password </Text>
                    <TextInput 
                        className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3" 
                        secureTextEntry={true}
                        //placeholder='Enter password'
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('TabScreen')}
                    className="mt-4 py-4 rounded-xl" style={{backgroundColor: '#38517E'}}>
                    <Text className="text-white font-2xl font-bold text-center"> Login </Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
        </View>
    )
}

