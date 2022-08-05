import React, { useLayoutEffect } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    PencilIcon,
    IdentificationIcon,
} from "react-native-heroicons/outline";

const styles = StyleSheet.create({
    bannerImages: {
        flex: 1,
        justifyContent: 'center',
        width: 359,
    },
    AvatarImages: {
        top: -75,
    },
});

const Header = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View className="flex-1">
            <View className="flex-1 items-center justify-center">
                <Image
                    source={
                        require('../../../../assets/bannerAyaka.png')
                    }
                    className="h-40 p-4 rounded-l-2xl"
                    style={styles.bannerImages}
                />
                <View
                    className="-top-32 left-40"
                >
                    <PencilIcon size={19} color="blue" />
                </View>
            </View>
            <View
                className="flex-row pb-3 items-center mx-4 space-x-2 bg-gray-400 rounded-2xl p-2"
                style={styles.AvatarImages}
            >
                <Image
                    source={require('../../../../assets/AvatarYoimiya.png')}
                    className="w-20 h-20 p-4 rounded-full left-4 border-4 align-top bg-white"
                />
                <Image
                    source={require('../../../../assets/avatarKhung.png')}
                    className="w-24 h-24 p-4 rounded-full right-20 block translate-x-1/2 pointer-events-none z-10"
                // style={styles.avatar__pendant}
                />
                <View
                    className="-top-1 right-20"
                >
                    <Text className="font-bold text-white text-2xl">Yanffeii</Text>
                    <Text className="font-bold text-white text-lg">
                        Asia Server Cấp 57
                    </Text>
                    <View>
                        <Text className="text-white flex">
                            <IdentificationIcon size={15} color="blue" />  ID Thẻ Thông Hành: 109988884
                        </Text>
                    </View>
                </View>
                <View
                    className="-top-7 right-28"
                >
                    <PencilIcon size={18} color="blue" />
                </View>
            </View>
            <View className="flex-row pb-3 items-center mx-4 space-x-2 -top-16 bg-gray-400 rounded-2xl p-2">
                <View className="p-2 text-center items-center">
                    <Text className="text-white">2</Text>
                    <Text className="text-white">Bài Viết</Text>
                </View>
                <View className="p-2 text-center items-center">
                    <Text className="text-white">2</Text>
                    <Text className="text-white">Theo Dõi</Text>
                </View>
                <View className="p-2 text-center items-center">
                    <Text className="text-white">1</Text>
                    <Text className="text-white">Người Theo Dõi</Text>
                </View>
                <View className="p-2 text-center items-center">
                    <Text className="text-white">4</Text>
                    <Text className="text-white">Được Thích</Text>
                </View>
            </View>
        </View>
    );
};
export default Header;