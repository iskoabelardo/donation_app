import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

const RedCross = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions
      ({ headerShown: false });
    }, []);

    return(
        <View>
            <Text> Philippine Red Cross </Text>
        </View>
    )
}

export default RedCross