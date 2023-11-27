import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, ScrollView} from 'react-native';
import React, { useLayoutEffect, useState }from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon, CameraIcon } from 'react-native-heroicons/solid';
import { MagnifyingGlassIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'


export default function DonationScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
      const [itemName, setItemName] = useState("");
      const [itemDescription, setItemDescription] = useState("");
      const [location, setLocation] = useState("");
      const [tags, setTags] = useState("");
      return (
      <View className=" flex-1 relative bg-white" style={{backgroundColor: '#3EB489'}}>
        <SafeAreaView>
              <View className="flex-row justify-between">
                  <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        className="bg-gray-300 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2">
                        <ChevronLeftIcon size="20" color="black"/>
                  </TouchableOpacity>
                <View className="flex-row ml-2 mt-2 mr-2">
                  <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    className="p-2 ml-4">
                    <MagnifyingGlassIcon size="20" color="black"/>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    className="p-2 ml-4">
                    <ShoppingCartIcon size="20" color="black"/>
                  </TouchableOpacity>
                </View>
              </View>            
        </SafeAreaView>
          <KeyboardAvoidingView className="flex-1 p-4"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <ScrollView>
                <TouchableOpacity className="border-dashed border-2 border-gray-300 rounded-md p-12 flex items-center justify-center">
                    <CameraIcon size={30} color="gray" />
                    <Text className="text-gray-500 mt-2">Add a Photo</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className="mt-4">
                        <TextInput 
                            className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3" 
                            placeholder="Item name"
                            value={itemName}
                            onChangeText={setItemName}
                        />
                        <TextInput 
                            className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3 h-24" 
                            placeholder="Item description"
                            value={itemDescription}
                            onChangeText={setItemDescription}
                            multiline={true}
                        />
                        <TextInput 
                            className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
                            placeholder="Location"
                            value={location}
                            onChangeText={setLocation}
                        />
                        <TextInput 
                            className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
                            placeholder="Tags"
                            value={tags}
                            onChangeText={setTags}
                        />
                        <TouchableOpacity className="mt-2 py-3 rounded-xl" style={{backgroundColor: '#59F0E0'}}>
                            <Text className="text-xl font-bold text-center text-black">Submit</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
          </KeyboardAvoidingView>
      </View>
    )
}
