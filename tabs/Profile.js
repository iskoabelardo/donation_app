import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { BellIcon, Cog6ToothIcon } from 'react-native-heroicons/outline';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View className=" flex-1 relative bg-white" style={{backgroundColor: '#75BAA4'}}>
      <SafeAreaView style={{backgroundColor: '#90A09B'}}>
        <View className="flex-row justify-between ml-5 mt-3 mr-3 mb-3">
          <View className="mt-7">
            <Image source={require("../assets/iu_bonnet.jpg")}
            className="h-24 w-24 rounded-full"/>
          <Text className="text-3xl font-bold mt-2">Isko Abelardo</Text>
          <Text className="text-base">Cainta Rizal</Text>
          </View>
          {/* Icons */}
          <View className="flex-row">
            <TouchableOpacity 
              onPress={() => navigation.navigate('Notif')}
              className="p-2">
              <BellIcon size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {/* Navigation action for settings */}} className="p-2">
              <Cog6ToothIcon size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView className="flex-2 px-1 pt-2"> 
        <View className="flex ml-3">
          <Text className="text-2xl font-bold"> My Listings </Text>
        </View>
        <View className="flex-row flex-wrap justify-between py-3 px-3">
          {/* Repeat this block for each item */}
          <View className="bg-white rounded-lg mb-4 w-40">
            {/* Replace with an Image component if you have images */}
              <Image 
                source={require("../assets/iu_bonnet.jpg")}
                className="h-28 w-full mb-2 rounded-lg"
                resizeMode="cover"/>
              <View className="items-center px-3 py-2">
                <Text className="text-lg font-bold">Rough Shirt 2</Text>
                <Text className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur</Text>
                <TouchableOpacity className="mt-2 mb-2 bg-red-500 rounded px-4 py-1">
                  <Text className="text-white text-center">Delete</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View className="bg-white rounded-lg mb-4 w-40">
            {/* Replace with an Image component if you have images */}
            <Image 
                source={require("../assets/iu_bonnet.jpg")}
                className="h-28 w-full mb-2 rounded-lg"
                resizeMode="cover"/>
            <View className="items-center px-3 py-2">
                <Text className="text-lg font-bold">Rough Shirt 2</Text>
                <Text className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur</Text>
                <TouchableOpacity className="mt-2 mb-2 bg-red-500 rounded px-4 py-1">
                  <Text className="text-white text-center">Delete</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View className="bg-white rounded-lg mb-4 w-40">
            {/* Replace with an Image component if you have images */}
            <Image 
                source={require("../assets/iu_bonnet.jpg")}
                className="h-28 w-full mb-2 rounded-lg"
                resizeMode="cover"/>
            <View className="items-center px-3 py-2">
                <Text className="text-lg font-bold">Rough Shirt 2</Text>
                <Text className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur</Text>
                <TouchableOpacity className="mt-2 mb-2 bg-red-500 rounded px-4 py-1">
                  <Text className="text-white text-center">Delete</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View className="bg-white rounded-lg mb-4 w-40">
            {/* Replace with an Image component if you have images */}
            <Image 
                source={require("../assets/iu_bonnet.jpg")}
                className="h-28 w-full mb-2 rounded-lg"
                resizeMode="cover"/>
            <View className="items-center px-3 py-2">
                <Text className="text-lg font-bold">Rough Shirt 2</Text>
                <Text className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur</Text>
                <TouchableOpacity className="mt-2 mb-2 bg-red-500 rounded px-4 py-1">
                  <Text className="text-white text-center">Delete</Text>
                </TouchableOpacity>
              </View>
          </View>
          {/* End of repeatable item block */}
          {/* Repeat the block above for each item you have */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
