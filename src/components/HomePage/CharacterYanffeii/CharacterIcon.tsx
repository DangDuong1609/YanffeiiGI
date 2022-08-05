import React, { useLayoutEffect } from 'react';
import { Image, View, ImageBackground, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CharacterIcon = () => {
    const navigation = useNavigation();
    // const image = {require('../../../../assets/avatarKhung.png')};

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            // headerTitle: "Detail",
        });
    }, []);

    const styles = StyleSheet.create({
        CharacterRole: {
            width: 85,
        },
        CharacterRoleBorder: {
            borderBottomRightRadius: 20,
        },
    });

    return (
        <View className="flex-1 pt-3 rounded-2xl pb-3 items-center mx-4 space-x-2 -top-24 m-4">
            <View className="flex-row">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center block"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 90
                        </Text>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 90
                        </Text>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Hutao.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 90
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                1
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yoimiya.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 90
                        </Text>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kazuha.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 80
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                1
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiangling.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 80
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                6
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xingqiu.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 80
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                5
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Bennett.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 80
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                5
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diona.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 80
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                6
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ningguang.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 80
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                4
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Feiyan.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 80
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                6
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayato.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 80
                        </Text>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_PlayerGirl.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 80
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                6
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tohma.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 70
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                6
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yunjin.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 70
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                3
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Albedo.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 70
                        </Text>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Heizo.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 70
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                5
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 70
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                1
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Keqing.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 70
                        </Text>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shinobu.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 70
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                1
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 60
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                4
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tartaglia.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 60
                        </Text>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Mona.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 60
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                2
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sucrose.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 60
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                6
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Barbara.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 60
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                4
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Noel.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 60
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                5
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Rosaria.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 60
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                2
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Beidou.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 56
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                2
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Chongyun.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 50
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                6
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kaeya.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 50
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                1
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ambor.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 50
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                1
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Gorou.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 50
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                1
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-Aloy.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Aloy.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 50
                        </Text>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 43
                        </Text>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sayu.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 40
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                6
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sara.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 50
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                4
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-5.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-5.png')}
                                className="w-5/6 h-4 absolute block left-1 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 20
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                2
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Lisa.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 20
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                1
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View className="flex mr-0 mb-3 pt-1 pl-2">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Razor.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 20
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                3
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <View className="flex-row -left-1">
                <View className="flex mr-0 mb-3 pt-1">
                    <View
                        className="h-32 m-auto relative rounded-md bg-orange-200 items-center"
                        style={styles.CharacterRole}
                    >
                        <ImageBackground
                            className="flex-1 relative w-20 h-24 bg-transparent"
                            source={require('../../../../assets/bg-avatar-4.png')}
                            resizeMode="cover"
                            imageStyle={{
                                borderTopRightRadius: 4,
                                borderTopLeftRadius: 4,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 4,
                            }}
                            style={{
                                top: 2
                            }}
                        >
                            <Image
                                source={{
                                    uri: "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xinyan.png",
                                }}
                                className="w-20 h-24 border-4 align-top bg-transparent rounded-t rounded-bl"
                                style={styles.CharacterRoleBorder}
                            />
                            <Image
                                source={require('../../../../assets/star-4.png')}
                                className="w-4/6 h-4 absolute block left-3 bottom-4 bg-transparent"
                            />
                        </ImageBackground>
                        <Text
                            className="h-5 flex justify-center font-medium text-zinc-800"
                        >
                            Cấp 20
                        </Text>
                        <ImageBackground
                            source={require('../../../../assets/fate-level.png')}
                            className='-top-0 right-0 absolute w-6 h-5 rounded-l pl-1'
                        >
                            <Text
                                className='text-white -right-1'
                            >
                                5
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CharacterIcon;