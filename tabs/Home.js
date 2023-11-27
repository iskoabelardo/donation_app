import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { BellIcon } from 'react-native-heroicons/outline'

const Home = () => {
  const navigation = useNavigation();
  return (
    <View className=" flex-1 relative bg-white" style={{backgroundColor: '#75BAA4'}}>
        <SafeAreaView>
              <View className="flex-row justify-end ml-2 mt-3 mr-3">
                  <TouchableOpacity 
                    onPress={() => navigation.navigate('Notif')}
                    className="p-2 ml-4">
                    <BellIcon size="30" color="black"/>
                  </TouchableOpacity>
              </View>
          </SafeAreaView>
          <View className="flex-2 ml-5 mt-2">
              <Text className="text-3xl font-bold"> Do you wish to </Text>
              <Text className="text-3xl font-bold"> give away items?</Text>
          </View>
          <View className="flex-row justify-between mt-4 mx-1">
            <View className="flex-1 bg-white p-8 mx-2 my-2 rounded-lg shadow-lg">
              <Text className="text-center">How it Works</Text>
            </View>
            <View className="flex-1 bg-white p-8 mx-2 my-2 rounded-lg shadow-lg">
              <Text className="text-center">How it Works</Text>
            </View>
            <View className="flex-1 bg-white p-8 mx-2 my-2 rounded-lg shadow-lg">
              <Text className="text-center">How it Works</Text>
            </View>
          </View>
          <View className="mt-2">
            <TouchableOpacity 
            onPress={() => navigation.navigate('Donation')}
            className="py-3 mx-3 rounded-xl" style={{backgroundColor: '#38517E'}}>
              <Text className="text-xl font-bold text-center text-white">
                Donate to An Organization
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between">
            <View className="ml-2 mt-6">
              <Text className="text-2xl font-bold"> Publish Items</Text>
            </View>
            <View className="flex-row mt-7 mr-12">
              <TouchableOpacity>
                <Text> View All</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-1 flex-row justify-between px-2">
            <View className="flex-1 mx-2 my-2">
                <TouchableOpacity className="bg-white p-8 rounded-lg shadow-lg">
                  {/* Image or placeholder here */}
                </TouchableOpacity>
                <Text className="text-center mt-2">Rough Shirt</Text>
            </View>
            <View className="flex-1 mx-2 my-2">
                <TouchableOpacity className="bg-white p-8 rounded-lg shadow-lg">
                  {/* Image or placeholder here */}
                </TouchableOpacity>
                <Text className="text-center mt-2">Rough Shirt</Text>
            </View>
        </View>
    </View>
  );
};

export default Home;
