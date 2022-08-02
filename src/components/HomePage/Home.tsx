import React, { useLayoutEffect } from 'react';
import { ImageBackground, ScrollView, View, Text, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


import CommunityGameReCordSea from "./CommunityGameReCordSea";
import Header from "./Header";
import CharacterIcon from "./CharacterIcon";
import ExploreTheWorld from "./ExploreTheWorld";
import SereniteaPot from "./SereniteaPot";

const Home = () => {
    const navigation = useNavigation();
    // const image = { uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2022/02/2-15.jpg' };
    const image = { uri: 'https://64.media.tumblr.com/fb9e7880420029972b3ef41c0ec7789f/c434e0208f496794-3e/s640x960/54d4f45577609cf4cacd3509bad1fe4d85c82852.gifv' };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            // headerTitle: "Home Page",
        });
    }, []);


    const styles = StyleSheet.create({
        summaryBlock: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        droidSafeArea: {
          flex: 1,
          justifyContent: 'center',
          paddingTop: Platform.OS === 'android' ? -36 : 25
        },
    });

    return (
        <ImageBackground
            className="flex-1"
            source={image}
            resizeMode="cover"
            style={styles.droidSafeArea}
        >
            <SafeAreaView
            // className="flex-1 justify-center items-center"
            style={styles.droidSafeArea}
            >
                <ScrollView>
                    {/* Header */}
                    <Header />
                    {/* Chiến Tích */}
                    <View
                        className="left-row mb-4 pl-3 flex items-center text-black font-bold w-32 -top-12"
                    >
                        <Text
                            className="bg-orange-400 absolute w-1 h-4 rounded-sm left-4 -top-0"
                        ></Text>
                        <Text
                            className="left-2"
                            style={styles.summaryBlock}
                        >Số liệu tổng quan</Text>
                    </View>
                    <CommunityGameReCordSea />
                    {/* Character */}
                    <View
                        className="left-row mb-4 pl-3 flex items-center text-black font-bold w-32 -top-16"
                    >
                        <Text
                            className="bg-orange-400 absolute w-1 h-4 rounded-sm left-4 -top-0"
                        ></Text>
                        <Text
                            className="left-2"
                            style={styles.summaryBlock}
                        >Nhân Vật Của Tôi</Text>
                    </View>
                    <CharacterIcon />
                    {/* Explore The World */}
                    <View
                        className="left-row mb-4 pl-3 flex items-center text-black font-bold w-36 -top-20"
                    >
                        <Text
                            className="bg-orange-400 absolute w-1 h-4 rounded-sm left-4 -top-0"
                        ></Text>
                        <Text
                            className="left-2"
                            style={styles.summaryBlock}
                        >Thám hiểm thế giới</Text>
                    </View>
                    <ExploreTheWorld />
                    {/* SereniteaPot */}
                    <View
                        className="left-row mb-4 pl-3 flex items-center text-black font-bold w-36 -top-24"
                    >
                        <Text
                            className="bg-orange-400 absolute w-1 h-4 rounded-sm left-4 -top-0"
                        ></Text>
                        <Text
                            className="left-2"
                            style={styles.summaryBlock}
                        >Ấm Trần Ca</Text>
                    </View>
                    <SereniteaPot />
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};
export default Home;