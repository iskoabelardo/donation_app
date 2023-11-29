import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

const SettingScreen = () => {
    const navigation = useNavigation();

    const SettingButton = ({ title, onPress }) => (
        <TouchableOpacity
            onPress={onPress}
            className="mt-4 p-3 bg-white rounded-2xl">
            <Text className="text-lg font-semibold"> {title} </Text>
        </TouchableOpacity>
    );

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
                <View className="ml-4 mt-3"> 
                    <Text className="text-3xl font-bold mt-2"> Settings </Text>
                </View>
                <View className="px-4 py-4">
                    <SettingButton title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
                    <SettingButton title="Logout" onPress={() => navigation.navigate('Welcome')} />
                </View>
            </SafeAreaView>
        </View>
    );
}

export default SettingScreen;
