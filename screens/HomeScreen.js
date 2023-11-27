import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
//import { UserCircleIcon, HomeIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { NavigationContainer } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid'

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
    return (
        <View className="flex-1 relative bg-white" style={{backgroundColor: '#A6D267'}}>
            <SafeAreaView>
                <View className="flex-row justify-start">
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        className="bg-gray-300 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2">
                        <ChevronLeftIcon size="20" color="black"/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <View className="flex-1 ml-5 mt-2">
                <Text className="text-3xl font-bold"> Do you wish to </Text>
                <Text className="text-3xl font-bold"> give away items?</Text>
            </View>
        </View>
    )
}