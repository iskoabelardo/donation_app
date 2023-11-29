import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { BellIcon, Cog6ToothIcon } from 'react-native-heroicons/outline';

const Profile = () => {
  const navigation = useNavigation();
  
  const donationInfo = [
    {
      title: "Rough Shirt 1",
      description: "Lorem ipsum dolor sit amet, consectetur",
      key: '1', // Unique key for this item
    },
    {
      title: "Rough Shirt 2",
      description: "Lorem ipsum dolor sit amet, consectetur",
      key: '2',
    },
    {
      title: "Rough Shirt 3",
      description: "Lorem ipsum dolor sit amet, consectetur",
      key: '3',
    },
    {
      title: "Rough Shirt 4",
      description: "Lorem ipsum dolor sit amet, consectetur",
      key: '4',
    },
  ];
  return (
    <View className=" flex-1 relative bg-white" style={{backgroundColor: '#75BAA4'}}>
      <SafeAreaView style={{backgroundColor: '#90A09B'}}>
        <View className="flex-row justify-between ml-5 mt-3 mr-3 mb-3">
          <View className="mt-7">
            <Image source={require("../assets/iu_bonnet.jpg")}
            className="h-24 w-24 rounded-full"/>
            <Text className="text-3xl font-bold mt-2">Isko Abelardo</Text>
            <Text className="text-base"> Cainta Rizal </Text>
          </View>
          {/* Icons */}
          <View className="flex-row">
            <TouchableOpacity 
              onPress={() => navigation.navigate('Notif')}
              className="p-2">
              <BellIcon size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Settings')} 
              className="p-2">
              <Cog6ToothIcon size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <FlatList
        data={donationInfo} // data source
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle="flex-1 px-2 pt-2"
        numColumns={2}
        ListHeaderComponent={
          <View className="flex ml-3 mt-2 mb-2">
            <Text className="text-2xl font-bold"> My Donations </Text>
          </View>
        }
        renderItem={({ item }) => (
          <ScrollView>
            <View className="flex-row flex-wrap justify-between py-1 px-3">
              <View className="bg-white rounded-lg mb-4 w-40 shadow-lg">
                <Image
                  source={require("../assets/iu_bonnet.jpg")}
                  className="h-36 w-full mb-2 rounded-lg"
                  resizeMode="cover"
                />
                <View className="px-3 py-2">
                  <Text className="text-lg font-bold"> {item.title} </Text>
                  <Text className="text-sm text-gray-500"> {item.description} </Text>
                  <TouchableOpacity className="mt-2 mb-2 bg-red-500 rounded px-4 py-1">
                    <Text className="text-white text-center"> Delete </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        )}/>
    </View>
  );
};

export default Profile;
