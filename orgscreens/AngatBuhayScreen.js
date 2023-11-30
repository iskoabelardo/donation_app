import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

const AngatBuhay = () => {
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
                        <Text className="text-3xl font-bold text-black text-center mt-5 mb-5">Angat Buhay</Text>
                        <Image 
                            source={require("../assets/Angat_Buhay_logo.png")} // Replace with your image URL
                            className="w-36 h-24" // Tailwind CSS styling for width and height
                            resizeMode="contain" // or "cover", depending on your preference
                        />
                        <Text className="text-black mt-3 text-justify">
                            Angat Buhay is a non-government organization that inspires hope and bayanihan by harnessing the energies of partners, volunteers, and supporters to empower Filipino communities, especially the marginalized.
                        </Text>
                        <Text className="text-black mt-3 text-justify">
                            Following the people's campaign of former Vice President Leni Robredo in 2022, Angat Buhay traces its roots as a government program under the Office of the Vice President of the Philippines that had several successful initiatives and projects.
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

export default AngatBuhay