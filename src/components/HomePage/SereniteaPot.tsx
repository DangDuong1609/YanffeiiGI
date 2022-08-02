import React, { useLayoutEffect } from 'react';
import { Text, Image, View, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const SereniteaPot = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View className="flex-1 pb-3 items-center mx-4 space-x-2 -top-24 bg-gray-400 rounded-2xl p-3">
            <View className="flex-row items-center justify-center">
                <ImageBackground 
                    source={require('../../../assets/ys_home_land_bg.png')}
                    className="mt-1 rounded-lg h-40 text-white items-center flex-1 justify-center relative"
                >
                    <View
                        className="px-10 py-4 flex items-center"
                    >

                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};
export default SereniteaPot;