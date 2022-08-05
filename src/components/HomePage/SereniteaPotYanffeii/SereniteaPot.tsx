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
    HomeworldComfort: {
        fontSize: 16,
        lineHeight: 16,
    },
    HomeworldComfortContainer: {
        backgroundColor: "rgba(60,64,68,.3)",
        width: 330,
        top: -7,
        left: 13
    },
    HomeworldComfortNum: {
        fontSize: 18,
        lineHeight: 18,
    },
    HomeworldComfortLabel: {
        fontSize: 12,
        lineHeight: 12,
        minHeight: 24,
    },
    SereniteaPotTop: {
        top: -170,
    },
    SereniteaPotWidthStretch: {
        resizeMode: 'stretch',
        width: 330,
        height: 160,
        flex: 1,
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
        <View
            className="flex-1 pb-3 mx-4 space-x-2 rounded-2xl p-3 right-3"
            style={styles.SereniteaPotTop}
        >
            <View className="flex-row">
                <ImageBackground
                    source={require('../../../../assets/ys_home_land_bg_1.png')}
                    className="items-center justify-center"
                    imageStyle={{ 
                        borderRadius: 8,
                    }}
                    style={styles.SereniteaPotWidthStretch}
                >
                    <View
                        className="flex-row px-10 py-4 flex items-center -left-16 -top-3"
                    >
                        <Image
                            source={require('../../../../assets/UI_Homeworld_Comfort_10.png')}
                            className="w-6 h-6 mr-1"
                        />
                        <Text
                            className="font-medium text-white"
                            style={styles.HomeworldComfort}
                        >
                            Cung Vàng Điện Ngọc
                        </Text>
                    </View>
                    <View
                        className="flex-row py-4 px-8"
                        style={styles.HomeworldComfortContainer}
                    >
                        <View
                            className="w-1/4 flex items-center flex-col p-0 -left-6"
                        >
                            <Text
                                className="mb-1 font-bold"
                                style={styles.HomeworldComfortNum}
                            >
                                10
                            </Text>
                            <Text
                                className="max-w-xs opacity-50 text-center"
                                style={styles.HomeworldComfortLabel}
                            >
                                Cấp Tín Nhiệm
                            </Text>
                        </View>
                        <View
                            className="w-1/4 flex items-center flex-col -left-4"
                        >
                            <Text
                                className="mb-1 font-bold"
                                style={styles.HomeworldComfortNum}
                            >
                                24660
                            </Text>
                            <Text
                                className="max-w-xs opacity-50 text-center"
                                style={styles.HomeworldComfortLabel}
                            >
                                Tiên Lực Động Tiên Cao Nhất: 
                            </Text>
                        </View>
                        <View
                            className="w-1/4 flex items-center flex-col -right-2"
                        >
                            <Text
                                className="mb-1 font-bold"
                                style={styles.HomeworldComfortNum}
                            >
                                850
                            </Text>
                            <Text
                                className="max-w-xs opacity-50 text-center"
                                style={styles.HomeworldComfortLabel}
                            >
                                Đồ Trang Trí Hiện Có: 
                            </Text>
                        </View>
                        <View
                            className="w-1/4 flex items-center flex-col -right-5"
                        >
                            <Text
                                className="mb-1 font-bold"
                                style={styles.HomeworldComfortNum}
                            >
                                6
                            </Text>
                            <Text
                                className="max-w-xs opacity-50 text-center"
                                style={styles.HomeworldComfortLabel}
                            >
                                Lịch Sử Khách Ghé Thăm: 
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};
export default SereniteaPot;