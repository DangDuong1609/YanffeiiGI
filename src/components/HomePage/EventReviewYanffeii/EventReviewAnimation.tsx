import React, { useLayoutEffect } from 'react';
import { Text, ImageBackground, View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EventReviewAnimation = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const styles = StyleSheet.create({
        EventReviewVanTab: {
            fontSize: 14,
            lineHeight: 20,
        },
        EventReviewBGActivityName: {
            fontSize: 14,
            lineHeight: 32,
            marginBottom: 21,
            marginTop: 13,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 350,
            height: 32,
        },
        EventReviewTitle: {
            fontSize: 16,
            lineHeight: 24,
        },
        // EventReviewBorder: {
        //     backgroundColor: "#84a8bb",
        //     borderWidth: 2,
        //     borderStyle: 'solid',
        //     left: 2,
        //     right: 2,
        //     top: 2,
        //     bottom: 2,
        //     margin: 'auto',
        //     opacity: 3,
        //     // position: 'absolute'
        // },
        EventReviewLinkItem: {
            fontSize: 12,
            lineHeight: 24,
            paddingTop: 3,
            paddingBottom: 0,
            paddingLeft: 22,
            paddingRight: 15,
            width: 320,
        },
        EventReviewTitle2: {
            left: 270,
            top: -21,
        },
        EventReviewChallengeSaillingStory: {
            height: 490,
        },
        EventReviewChallengeSaillingStoryImage: {
            width: 50,
            height: 50,
            resizeMode: 'stretch',
            left: 220,
        },
        EventReviewSaillingImage: {
            width: 50,
            height: 50,
            resizeMode: 'stretch',
            left: 120,
        },
        EventReviewStoryImage: {
            width: 50,
            height: 50,
            resizeMode: 'stretch',
            left: 302,
            top: 49,
        },
        EventReviewChallengeSaillingStoryImageIcon: {
            width: 60,
            height: 60,
            resizeMode: 'stretch',
        },
        EventReviewStoryImageIcon: {
            width: 60,
            height: 60,
            resizeMode: 'stretch',
            left: 220,
        },
        EventReviewChallengeSaillingStoryImageText: {
            shadowColor: '#4591b0',
            shadowOffset: {width: -1, height: 1},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            fontSize: 14,
            // color: '#fff',
            top: 86
        },
        EventReviewChallengeBGBubbleSalling: {
            width: 340,
            resizeMode: 'stretch',
            left: 10
        },
        EventReviewBorder: {
            height: 500,
        },
        EventReviewChallengeBGBubble: {
            width: 340,
            resizeMode: 'stretch',
            left: 10
        },
        EventReviewChallengeBGBubbleStory: {
            width: 340,
            resizeMode: 'stretch',
            left: -2
        },
    });

    return (
        <View
            className="flex-shrink-0 w-full -top-40"
        >
            <ImageBackground
                source={require('../../../../assets/ActivityBGName.png')}
                style={styles.EventReviewBGActivityName}
                className="text-center"
            >
                <Text
                    className="text-slate-900 font-bold text-center top-2"
                >
                    Chuyến Đi Biển Ngày Hè
                </Text>
            </ImageBackground>
            <ImageBackground
                source={require('../../../../assets/activity_summer.png')}
                className="px-10 py-5 relative w-auto rounded-md"
                imageStyle={{
                    borderRadius: 7,
                }}
                style={styles.EventReviewBorder}
            >
                <View
                    className="flex-row text-slate-900 items-center mb-3 font-bold -left-6 -top-2"
                    style={styles.EventReviewTitle}
                >
                    <Image 
                        source={require('../../../../assets/TitleIcon.png')}
                        className="w-6 h-6 mr-1"
                    />
                    <Text
                        className="flex-1"
                    >
                        Quần Đảo Táo Vàng
                    </Text>
                </View>
                <View
                    className="pt-3 pb-3 pl-6 rounded-md bg-blue-700 text-slate-200 flex-row mb-3 w-96 -left-11"
                >
                    <View
                        className="flex mr-5 text-center items-center w-24 -left-3"
                    >
                        <Text
                            className="font-bold text-white mb-3"
                        >
                            10 / 10
                        </Text>
                        <Text
                            className="font-bold text-white mb-3"
                        >
                            Mở khóa điểm dịch chuyển
                        </Text>
                    </View>
                    <View
                        className="flex mr-5 text-center items-center w-28 -left-3"
                    >
                        <Text
                            className="font-bold text-white mb-3"
                        >
                            13 / 13
                        </Text>
                        <Text
                            className="font-bold text-white mb-3"
                        >
                            Mở khóa Điểm Dịch Chuyển Thuyền Gió
                        </Text>
                    </View>
                    <View
                        className="flex mr-5 text-center items-center w-20"
                    >
                        <Text
                            className="font-bold text-white mb-3"
                        >
                            63
                        </Text>
                        <Text
                            className="font-bold text-white mb-3"
                        >
                            Số rương nhận được
                        </Text>
                    </View>
                </View>
                
                <ImageBackground
                    source={require('../../../../assets/LinkItem1.png')}
                    className="h-6 bg-blue-900 flex cursor-pointer rounded-xl -left-5"
                    imageStyle={{
                        width: 40,
                    }}
                    style={styles.EventReviewLinkItem}
                >
                    <Text
                        className="text-white flex"
                    >Đến bản đồ Quần Đảo Táo Vàng</Text>
                    <Image
                        source={require('../../../../assets/LinkItem2.png')}
                        style={styles.EventReviewTitle2}
                    />
                </ImageBackground>
                
                <ImageBackground
                    source={require('../../../../assets/LinkItem1.png')}
                    className="h-6 bg-blue-900 flex cursor-pointer rounded-xl -left-5 top-2"
                    imageStyle={{
                        width: 40,
                    }}
                    style={styles.EventReviewLinkItem}
                >
                <Text
                    className="text-white flex"
                >Xem Chuyên Đề Thám Hiểm Quần Đảo Táo Vàng</Text>
                <Image
                    source={require('../../../../assets/LinkItem2.png')}
                    style={styles.EventReviewTitle2}
                />
                </ImageBackground>
                <View
                    className="-mx-10 relative"
                    style={styles.EventReviewChallengeSaillingStory}
                >
                    <ImageBackground
                        source={require('../../../../assets/ChallengeBGBubble.png')}
                        className="absolute h-40 top-3 left-16"
                        style={styles.EventReviewChallengeBGBubble}
                    >
                        <Image
                            source={require('../../../../assets/ChallengeBubble.png')}
                            className="top-0 absolute items-center"
                            style={styles.EventReviewChallengeSaillingStoryImage}
                        />
                        <View
                            className=""
                        >
                            <Image 
                                source={require('../../../../assets/ChallengeBubbleEntryIcon.png')}
                                className="flex items-center absolute cursor-pointer left-40 top-8"
                                style={styles.EventReviewChallengeSaillingStoryImageIcon}
                            />
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../../../assets/ChallengeBGBubbleSalling.png')}
                        className="absolute h-40 top-16"
                        style={styles.EventReviewChallengeBGBubbleSalling}
                    >
                        <Image
                            source={require('../../../../assets/ChallengeBubbleSalling.png')}
                            className="top-16 absolute items-center"
                            style={styles.EventReviewSaillingImage}
                        />
                        <View
                            className=""
                        >
                            <Image 
                                source={require('../../../../assets/ChallengeBubbleSailingIcon.png')}
                                className="flex items-center absolute cursor-pointer left-12 top-11"
                                style={styles.EventReviewChallengeSaillingStoryImageIcon}
                            />
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../../../assets/ChallengeBGBubbleStory.png')}
                        className="absolute h-40 top-28"
                        style={styles.EventReviewChallengeBGBubbleStory}
                    >
                        <Image
                            source={require('../../../../assets/ChallengeBubbleEntry.png')}
                            className="absolute items-center"
                            style={styles.EventReviewStoryImage}
                        />
                        <View
                            className=""
                        >
                            <Image 
                                source={require('../../../../assets/ChallengeBubbleStoryIcon.png')}
                                className="flex items-center absolute cursor-pointer top-7"
                                style={styles.EventReviewStoryImageIcon}
                            />
                        </View>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </View>
    );
};
export default EventReviewAnimation;