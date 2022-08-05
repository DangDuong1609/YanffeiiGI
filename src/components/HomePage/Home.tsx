import React, { useLayoutEffect } from 'react';
import { ImageBackground, ScrollView, View, Text, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


import CommunityGameReCordSea from "./ProfileYanffeii/CommunityGameReCordSea";
import Header from "./HeaderYanffeii/Header";
import CharacterIcon from "./CharacterYanffeii/CharacterIcon";
import ExploreTheWorld from "./ExploreTheWorldYanffeii/ExploreTheWorld";
import SereniteaPot from "./SereniteaPotYanffeii/SereniteaPot";
import EventReview from "./EventReviewYanffeii/EventReview";

const Home = () => {
    const navigation = useNavigation();
    const image = { uri: 'https://storage.qoo-img.com/cimg/note/2022/04/11/2bcfb9af92d9123e0bfabf888fee601d.jpg' };
    // const image = { uri: 'https://64.media.tumblr.com/fb9e7880420029972b3ef41c0ec7789f/c434e0208f496794-3e/s640x960/54d4f45577609cf4cacd3509bad1fe4d85c82852.gifv' };

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
            //   justifyContent: 'center',
            resizeMode: 'cover',
            paddingTop: Platform.OS === 'android' ? -36 : -36
        },
        ExploretheWord: {
            top: -120,
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
                <ScrollView
                    keyboardShouldPersistTaps='always'
                >
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
                        className="left-row mb-4 pl-3 flex items-center text-black font-bold w-36"
                        style={styles.ExploretheWord}
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
                        className="left-row mb-4 pl-3 flex items-center text-black font-bold w-36 -top-40"
                    >
                        <Text
                            className="bg-orange-400 absolute w-1 h-4 rounded-sm left-4 -top-0"
                        ></Text>
                        <Text
                            className="-left-2"
                            style={styles.summaryBlock}
                        >Ấm Trần Ca</Text>
                    </View>
                    <SereniteaPot />
                    {/* Event Review */}
                    <View
                        className="left-row mb-4 pl-3 flex items-center text-black font-bold w-36 -top-40"
                    >
                        <Text
                            className="bg-orange-400 absolute w-1 h-4 rounded-sm left-4 -top-0"
                        ></Text>
                        <Text
                            className="left-2"
                            style={styles.summaryBlock}
                        >Xem Lại Sự Kiện</Text>
                    </View>
                    <EventReview />
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};
export default Home;