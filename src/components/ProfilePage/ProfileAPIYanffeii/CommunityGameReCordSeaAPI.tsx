import React, { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CommunityGameReCordSeaAPI = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            // headerTitle: "Detail",
        });
    }, []);

    return (
        <View className="flex-1 p-2 bg-gray-400 rounded-2xl pb-3 items-center mx-4 space-x-2 -top-16 m-4">
            <View className="flex-row">
                <View className="p-2 text-center items-center">
                    <Text className="text-white">465</Text>
                    <Text className="text-white">Số ngày hoạt động</Text>
                </View>
                <View className="p-2 text-center items-center">
                    <Text className="text-white">492</Text>
                    <Text className="text-white">Số thành tựu đạt được</Text>
                </View>
            </View>
        </View>
    );
};

export default CommunityGameReCordSeaAPI;