import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { BellIcon, Cog6ToothIcon } from 'react-native-heroicons/outline';

const Profile = () => {
  const navigation = useNavigation();

  const users = [
    {
      userImage: require("../assets/iu_bonnet.jpg"), 
      inputName: "Angelo Abelardo",
      location: "Cainta Rizal",
      key: '1', // Unique key for the user
    },
    // Add more user objects as needed
  ];

  const donationInfo = [
    {
      selectedImage: require("../assets/black_tshirt.png"),
      itemName: "Rough Shirt 1",
      itemDescription: "Pre-loved TShirt\n Medium\n Black",
      location: "Quezon City",
      key: '1', // Unique key for this item
    },
    {
      selectedImage: require("../assets/black_tshirt.png"),
      itemName: "Rough Shirt 2",
      itemDescription: "Pre-loved TShirt\n Medium\n Black",
      location: "Quezon City",
      key: '2',
    },
    {
      selectedImage: require("../assets/black_tshirt.png"),
      itemName: "Rough Shirt 3",
      itemDescription: "Pre-loved TShirt\n Medium\n Black",
      location: "Quezon City",
      key: '3',
    },
    {
      selectedImage: require("../assets/black_tshirt.png"),
      itemName: "Rough Shirt 4",
      itemDescription: "Pre-loved TShirt\n Medium\n Black",
      location: "Quezon City",
      key: '4',
    },
  ];
  return (
    <View className=" flex-1 relative bg-white" style={{backgroundColor: '#75BAA4'}}>
      <SafeAreaView style={{backgroundColor: '#90A09B'}}>
        <View className="flex-row justify-between ml-5 mt-3 mr-3 mb-3">
          <View className="mt-8">
          {users.map((user) => (
            <View key={user.key}>
              <Image source={user.userImage} 
              className="h-24 w-24 rounded-full"/>
              <Text className="text-3xl font-bold mt-2"> {user.inputName} </Text>
              <Text className="text-base"> {user.location} </Text>
            </View>
            ))}
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
                  source={item.selectedImage}
                  className="h-24 w-full mb-2 rounded-lg"
                  resizeMode="contain"
                />
                <View className="px-3 py-2">
                  <Text className="text-lg font-bold"> {item.itemName} </Text>
                  <Text className="text-sm text-gray-500"> {item.itemDescription} </Text>
                  <Text className="text-sm text-gray-500"> {item.location} </Text>
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
