import React, { useLayoutEffect } from 'react';
import { Image, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CharacterIcon = () => {
    const navigation = useNavigation();
    // const image = {require('../../../assets/avatarKhung.png')};

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            // headerTitle: "Detail",
        });
    }, []);

    return (
        <View className="flex-1 p-2 rounded-2xl pb-3 items-center mx-4 space-x-2 -top-20 m-4 bg-gray-400">
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Hutao.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yoimiya.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kazuha.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiangling.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xingqiu.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Bennett.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diona.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ningguang.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Feiyan.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayato.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_PlayerGirl.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tohma.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yunjin.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Albedo.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Heizo.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Keqing.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shinobu.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tartaglia.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Mona.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sucrose.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Barbara.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Noel.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Rosaria.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Beidou.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Chongyun.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kaeya.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ambor.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Gorou.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Aloy.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sayu.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sara.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-5.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-5.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Lisa.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
            <View className="flex-row">
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Razor.png",
                            }}
                            className="w-20 h-20 border-4 align-top bg-transparent"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
                <View className="p-3 items-center w-24 h-28 relative">
                    <ImageBackground
                        className="flex-1"
                        source={require('../../../assets/bg-avatar-4.png')}
                        resizeMode="cover"
                    >
                        <Image
                            source={{
                                uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xinyan.png",
                            }}
                            className="w-20 h-20 border-4 align-top"
                        />
                        <Image
                            source={require('../../../assets/star-4.png')}
                            className="flex-1 w-12 block left-4 bg-transparent -top-3"
                        />
                    </ImageBackground>
                </View>
            </View>
        </View>
    );
};

export default CharacterIcon;