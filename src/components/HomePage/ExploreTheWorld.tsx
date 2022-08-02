import React, { useLayoutEffect } from 'react';
import { Image, View, ImageBackground, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExploreTheWorld = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            // headerTitle: "Detail",
        });
    }, []);

    const styles = StyleSheet.create({
        ChapterIconChasmsMaw: {
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            // marginBottom: 30,
        },
        skeletonClearBG: {
            width: '92.2%',
            backgroundColor: '#d3bc8d',
        },
        VDSCityLiyae: {
            width: 155,
        },
        skeletonClearBGCityLiyae: {
            width: '75.2%',
            backgroundColor: '#d3bc8d',
        },
        skeletonClearBGCityInazuma: {
            width: '81.6%',
            backgroundColor: '#d3bc8d',
        },
        skeletonClearBGCityInazumaEi: {
            width: '98%',
            backgroundColor: '#d3bc8d',
        },
        skeletonClearBGCityDragonspine: {
            width: '100%',
            backgroundColor: '#d3bc8d',
        },
        skeletonClearBGCityLiyue: {
            width: '92.7%',
            backgroundColor: '#d3bc8d',
        },
        skeletonClearBGCityMengde: {
            width: '100%',
            backgroundColor: '#d3bc8d',
        },
    });
    return (
        <View className="flex-1 p-5 bg-gray-400 rounded-2xl pb-3 items-center mx-4 space-x-2 -top-24 m-4">
            <View className="flex-row items-center justify-center w-64 mr-3 h-24 relative rounded-md block">
                <ImageBackground
                    source={require('../../../assets/city_icon_ChasmsMaw.png')}
                    className="flex-shrink"
                >
                    <View
                        className="h-full relative flex-row items-center pl-2 pr-3"
                    >
                        <Image
                            source={require('../../../assets/UI_ChapterIcon_ChasmsMaw.png')}
                            className="w-20 h-20 -left-1 top-0"
                        />
                        <View
                            className="pl-1 text-xs"
                        >
                            <Text
                                className="flex text-white mb-2 leading-none pb-1 font-bold"
                                style={styles.ChapterIconChasmsMaw}
                            >
                                Vực Đá Sâu - Khu Mỏ Ngầm
                            </Text>
                            <Text>
                                92.2%
                            </Text>
                            <View
                                className="mt-2 relative w-full h-2 bg-slate-500 rounded"
                            >
                                <View
                                    className="absolute top-0 left-0 h-2 rounded"
                                    style={styles.skeletonClearBG}
                                ></View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View className="flex-row -left-1 mt-1 items-center justify-center">
                <ImageBackground
                    source={require('../../../assets/city_icon_ChasmsMaw.png')}
                    className="flex-shrink items-center justify-center w-64 mr-3 h-24 relative rounded-md block "
                >
                    <View
                        className="h-full relative flex-row items-center pl-2 pr-3 w-full"
                    >
                        <Image
                            source={require('../../../assets/UI_ChapterIcon_ChasmsMaw.png')}
                            className="w-20 h-20 -left-1 top-0"
                        />
                        <View
                            className="pl-1 text-xs"
                            style={styles.VDSCityLiyae}
                        >
                            <Text
                                className="flex text-white mb-2 leading-none pb-1 font-bold"
                                style={styles.ChapterIconChasmsMaw}
                            >
                                Vực Đá Sâu
                            </Text>
                            <Text>
                                75.2%
                            </Text>
                            <View
                                className="mt-2 relative w-full h-2 bg-slate-500 rounded"
                            >
                                <View
                                    className="absolute top-0 left-0 h-2 rounded"
                                    style={styles.skeletonClearBGCityLiyae}
                                ></View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View className="flex-row -left-1 mt-1">
                <ImageBackground
                    source={require('../../../assets/city_icon_Enkanomiya.png')}
                    className="flex-shrink items-center justify-center w-64 mr-3 h-24 relative rounded-md block "
                >
                    <View
                        className="h-full relative flex-row items-center pl-2 pr-3 w-full"
                    >
                        <Image
                            source={require('../../../assets/UI_ChapterIcon_Enkanomiya.png')}
                            className="w-20 h-20 -left-1 top-0"
                        />
                        <View
                            className="pl-1 text-xs"
                            style={styles.VDSCityLiyae}
                        >
                            <Text
                                className="flex text-white mb-2 leading-none pb-1 font-bold"
                                style={styles.ChapterIconChasmsMaw}
                            >
                                Enkanomiya
                            </Text>
                            <Text>
                                81.6%
                            </Text>
                            <View
                                className="mt-2 relative w-full h-2 bg-slate-500 rounded"
                            >
                                <View
                                    className="absolute top-0 left-0 h-2 rounded"
                                    style={styles.skeletonClearBGCityInazuma}
                                ></View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View className="flex-row -left-1 mt-1">
                <ImageBackground
                    source={require('../../../assets/city_icon_Daoqi.png')}
                    className="flex-shrink items-center justify-center w-64 mr-3 h-24 relative rounded-md block "
                >
                    <View
                        className="h-full relative flex-row items-center pl-2 pr-3 w-full"
                    >
                        <Image
                            source={require('../../../assets/UI_ChapterIcon_Daoqi.png')}
                            className="w-20 h-20 -left-1 top-0"
                        />
                        <View
                            className="pl-1 text-xs"
                            style={styles.VDSCityLiyae}
                        >
                            <Text
                                className="flex text-white mb-2 leading-none pb-1 font-bold"
                                style={styles.ChapterIconChasmsMaw}
                            >
                                Enkanomiya
                            </Text>
                            <Text>
                                98%
                            </Text>
                            <View
                                className="mt-2 relative w-full h-2 bg-slate-500 rounded"
                            >
                                <View
                                    className="absolute top-0 left-0 h-2 rounded"
                                    style={styles.skeletonClearBGCityInazumaEi}
                                ></View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View className="flex-row -left-1 mt-1">
                <ImageBackground
                    source={require('../../../assets/city_icon_Dragonspine.png')}
                    className="flex-shrink items-center justify-center w-64 mr-3 h-24 relative rounded-md block "
                >
                    <View
                        className="h-full relative flex-row items-center pl-2 pr-3 w-full"
                    >
                        <Image
                            source={require('../../../assets/UI_ChapterIcon_Dragonspine.png')}
                            className="w-20 h-20 -left-1 top-0"
                        />
                        <View
                            className="pl-1 text-xs"
                            style={styles.VDSCityLiyae}
                        >
                            <Text
                                className="flex text-white mb-2 leading-none pb-1 font-bold"
                                style={styles.ChapterIconChasmsMaw}
                            >
                                Long Tích Tuyết Sơn
                            </Text>
                            <Text>
                                100%
                            </Text>
                            <View
                                className="mt-2 relative w-full h-2 bg-slate-500 rounded"
                            >
                                <View
                                    className="absolute top-0 left-0 h-2 rounded"
                                    style={styles.skeletonClearBGCityDragonspine}
                                ></View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View className="flex-row -left-1 mt-1">
                <ImageBackground
                    source={require('../../../assets/city_icon_Liyue.png')}
                    className="flex-shrink items-center justify-center w-64 mr-3 h-24 relative rounded-md block "
                >
                    <View
                        className="h-full relative flex-row items-center pl-2 pr-3 w-full"
                    >
                        <Image
                            source={require('../../../assets/UI_ChapterIcon_Liyue.png')}
                            className="w-20 h-20 -left-1 top-0"
                        />
                        <View
                            className="pl-1 text-xs"
                            style={styles.VDSCityLiyae}
                        >
                            <Text
                                className="flex text-white mb-2 leading-none pb-1 font-bold"
                                style={styles.ChapterIconChasmsMaw}
                            >
                                Liyue
                            </Text>
                            <Text>
                                92.7%
                            </Text>
                            <View
                                className="mt-2 relative w-full h-2 bg-slate-500 rounded"
                            >
                                <View
                                    className="absolute top-0 left-0 h-2 rounded"
                                    style={styles.skeletonClearBGCityLiyue}
                                ></View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View className="flex-row -left-1 mt-1">
                <ImageBackground
                    source={require('../../../assets/city_icon_Mengde.png')}
                    className="flex-shrink items-center justify-center w-64 mr-3 h-24 relative rounded-md block "
                >
                    <View
                        className="h-full relative flex-row items-center pl-2 pr-3 w-full"
                    >
                        <Image
                            source={require('../../../assets/UI_ChapterIcon_Mengde.png')}
                            className="w-20 h-20 -left-1 top-0"
                        />
                        <View
                            className="pl-1 text-xs"
                            style={styles.VDSCityLiyae}
                        >
                            <Text
                                className="flex text-white mb-2 leading-none pb-1 font-bold"
                                style={styles.ChapterIconChasmsMaw}
                            >
                                Mondstadt
                            </Text>
                            <Text>
                                100%
                            </Text>
                            <View
                                className="mt-2 relative w-full h-2 bg-slate-500 rounded"
                            >
                                <View
                                    className="absolute top-0 left-0 h-2 rounded"
                                    style={styles.skeletonClearBGCityMengde}
                                ></View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

export default ExploreTheWorld;