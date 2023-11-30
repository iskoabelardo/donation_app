import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

const RedCross = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions
      ({ headerShown: false });
    }, []);

    return(
        <View className="flex-1 bg-gray" style={{backgroundColor: '#75BAA4'}}>
            <SafeAreaView className="flex">
                    <View className="flex-row justify-start">
                        <TouchableOpacity 
                            onPress={() => navigation.goBack()}
                            className="bg-gray-300 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2">
                            <ChevronLeftIcon size="20" color="black"/>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1 flex justify-center items-center px-4 py-4">
                        <Text className="text-3xl font-bold text-black text-center mt-5 mb-5"> Philippine Red Cross </Text>
                        <Image 
                            source={require("../assets/red_cross_logo.png")} // Replace with your image URL
                            className="w-36 h-24" // Tailwind CSS styling for width and height
                            resizeMode="contain" // or "cover", depending on your preference
                        />
                        <Text className="text-black mt-3 text-justify">
                            Born officially in 1947, but with roots that traces back to the revolutionary days, the Philippine Red Cross has truly become the premier humanitarian organization in the country, committed to provide quality life-saving services that protect the life and dignity especially of indigent Filipinos in vulnerable situations.
                        </Text>
                    </View>
                <View className="mt-8">
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Donation')}
                    className="py-3 mx-3 rounded-xl" style={{backgroundColor: '#38517E'}}>
                    <Text className="text-xl font-bold text-center text-white">
                        Donate Now
                    </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default RedCross