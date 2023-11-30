import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

const SegundaMana = () => {
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
                        <Text className="text-3xl font-bold text-black text-center mt-5 mb-5"> Segunda Mana </Text>
                        <Image 
                            source={require("../assets/segunda_mana_logo.png")}
                            className="w-36 h-24" 
                            resizeMode="contain" 
                        />
                        <Text className="text-black mt-3 text-justify">
                            Caritas Manila is a non-profit organization that serves as the lead social service and development ministry of the Catholic Church in the Philippines. The organization is geared towards total human development, poverty alleviation, and the creation of a Christian community with a strong social conscience.
                        </Text>
                        <Text className="text-black mt-3 text-justify">
                            First known as Catholic Charities, Caritas Manila was established by the late Manila Archbishop Rufino Cardinal Santos on October 1, 1953, as a social welfare program “for uplifting the spirit and soul of the unfortunate members of our community, to assist them in all their needs, and to bring the help of God in their miseries and distress.”
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

export default SegundaMana