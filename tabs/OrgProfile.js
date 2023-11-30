import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { BellIcon } from 'react-native-heroicons/outline'

export default function OrgProfile() {

    const orgDetails = [
        {
          label: 'NGO Name:',
          value: 'Philippine Red Cross',
          key: '1',
        },
        {
          label: 'Email:',
          value: 'phredcross@gmail.com',
          key: '2',
        },
        {
          label: 'Mobile Number:',
          value: '09516531345',
          key: '3',
        },
        {
          label: 'Location:',
          value: 'Quezon City',
          key: '4',
        },
      ];


    return(
        <SafeAreaView className="flex-1 bg-gray" style={{backgroundColor: '#75BAA4'}}>
            <View className="ml-4 mt-3"> 
                <Text className="text-3xl font-bold mt-5"> Organizational Profile </Text>
            </View>
            <View className="flex justify-center items-center mt-2 mb-3">
                <TouchableOpacity className="mt-7">
                    <Image source={require("../assets/red_cross_logo.png")}
                        className="h-24 w-36 rounded-xl"
                        resizeMode="contain"/>
                </TouchableOpacity>
            </View>
            <View className="flex px-4 py-4">
                {orgDetails.map((detail) => (
                    <View key={detail.key} className="flex-row items-center mb-4">
                        <Text className="font-bold text-xl"> {detail.label} </Text>
                        <Text className="text-base ml-3"> {detail.value} </Text>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    )
}