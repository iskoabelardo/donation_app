import { View, Text, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { BellIcon, Cog6ToothIcon } from 'react-native-heroicons/outline';

export default function OrgHome() {
    const navigation = useNavigation();

    const orgs = [
        {
          userImage: require("../assets/red_cross_logo.png"), 
          inputName: "Angat Buhay",
          location: "Quezon City",
          key: '1'
        },
        // Add more user objects as needed
      ];
    
    const [donations, setDonations] = useState([
        {
          itemName: "Used Black TShirt",
          itemDescription: "Pre-loved TShirt\n Medium\n Black",
          location: "Quezon City",
          userImage: require("../assets/black_tshirt.png"), // Replace with your image
          key: '1',
        },
        {
          itemName: "Rough Shirt 3",
          itemDescription: "Sadboys",
          location: "Pasig City",
          userImage: require("../assets/black_tshirt.png"), // Replace with your image
          key: '2',
        },
        // Add more donation objects as needed
      ]);

    const renderItem = ({ item }) => (

        <View className="m-2 bg-white p-4 rounded-lg shadow-md flex-row items-center">
            <Image 
            source={item.userImage} 
            style={{ height: 144, width: 144, borderRadius: 8 }} // Adjust size as needed
            resizeMode="contain"
            />
            <View className="flex-1 ml-4">
            <Text className="text-lg font-bold"> {item.itemName} </Text>
            <Text className="text-sm"> {item.itemDescription} </Text>
            <Text className="text-sm text-gray-500"> {item.location} </Text>
            </View>
        </View>
    );  

    return(
        <View className=" flex-1 relative bg-white" style={{backgroundColor: '#75BAA4'}}>
            <SafeAreaView style={{backgroundColor: '#90A09B'}}>
                <View className="flex-row justify-between ml-5 mt-3 mr-3 mb-3">
                    <View className="mt-8">
                    {orgs.map((orgs) => (
                    <View key={orgs.key}>
                        <Image 
                        source={orgs.userImage} 
                        className="h-24 w-24 rounded-full"
                        resizeMode="contain"/>
                        <Text className="text-3xl font-bold mt-2"> {orgs.inputName} </Text>
                        <Text className="text-base"> {orgs.location} </Text>
                    </View>
                    ))}
                    </View>
                    {/* Icons */}
                    <View className="flex-row">
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('OrgSettings')} 
                        className="p-2">
                        <Cog6ToothIcon size={30} color="black" />
                    </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <Text className="text-2xl font-bold p-4"> New Donations </Text>
                    <FlatList
                        data={donations}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.key}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    />
        </View>
    )
}