import React, { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CommunityGameReCordSea = () => {
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
            <View className="flex-row">
                <View className="p-2 text-center items-center">
                    <Text className="text-white">40</Text>
                    <Text className="text-white">Số nhân vật nhận được</Text>
                </View>
                <View className="p-2 text-center items-center">
                    <Text className="text-white">190</Text>
                    <Text className="text-white">Mở khóa điểm dịch chuyển</Text>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-2 text-center items-center">
                    <Text className="text-white">66</Text>
                    <Text className="text-white">Phong Thần Đồng</Text>
                </View>
                <View className="p-2 text-center items-center">
                    <Text className="text-white">131</Text>
                    <Text className="text-white">Nham Thần Đồng</Text>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-2 text-center items-center">
                    <Text className="text-white">181</Text>
                    <Text className="text-white">Lôi Thần Đồng</Text>
                </View>
                <View className="p-2 text-center items-center">
                    <Text className="text-white">35</Text>
                    <Text className="text-white">Mở khóa Bí Cảnh</Text>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-2 text-center items-center">
                    <Text className="text-white">-</Text>
                    <Text className="text-white">La Hoàn Thâm Cảnh</Text>
                </View>
                <View className="p-2 text-center items-center">
                    <Text className="text-white">181</Text>
                    <Text className="text-white">Số Rương Hiếm</Text>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-2 text-center items-center">
                    <Text className="text-white">282</Text>
                    <Text className="text-white">Rương Siêu Cấp</Text>
                </View>
                <View className="p-2 text-center items-center">
                    <Text className="text-white">1063</Text>
                    <Text className="text-white">Rương Cao Cấp</Text>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-2 text-center items-center">
                    <Text className="text-white">1330</Text>
                    <Text className="text-white">Rương Thường</Text>
                </View>
                <View className="p-2 text-center items-center">
                    <Text className="text-white">44</Text>
                    <Text className="text-white">Số lượng Rương Kỳ Dị</Text>
                </View>
            </View>
        </View>
    );
};

export default CommunityGameReCordSea;