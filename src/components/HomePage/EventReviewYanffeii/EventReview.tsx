import React, { useLayoutEffect } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import EventReviewAnimation from "./EventReviewAnimation";

const EventReview = () => {
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
        EventReviewViewRoll: {
            width: 45,
            height: 45,
            resizeMode: 'stretch',
        },
        EventReviewViewRollEvent: {
            width: 45,
            height: 45,
            resizeMode: 'stretch',
            top: 5,
        },
        EventReviewViewRollBG: {
            width: 45,
            height: 45,
            resizeMode: 'stretch',
            // top: -5,
            margin: 0,
            position: 'absolute',
            opacity: 1,
        },
        EventReviewViewRollImages: {
            width: 45,
            height: 45,
            resizeMode: 'stretch',
            // bottom: 10,
            position: 'absolute',
            opacity: 1,
            // top: -5,
        },
    });

    return (
        <View className="flex-1">
            <View
                className="relative -top-48 block"
            >
                <View
                    className="absolute w-11/12 top-10 left-4 flex-row justify-between block bg-black"
                    // style={styles.EventReviewViewRoll}
                >
                    <Image
                        source={require('../../../../assets/left.png')}
                        style={styles.EventReviewViewRoll}
                    />
                    <Image
                        source={require('../../../../assets/right.png')}
                        style={styles.EventReviewViewRoll}
                    />
                </View>
                <View
                    className="relative top-8"
                >
                    <View
                        className="h-auto overflow-hidden"
                    >
                        <View
                            classname="px-4 overflow-x-auto overflow-y-hidden box-content h-full relative flex select-none"
                        >
                            <View
                                className="p-0 w-auto h-auto flex-1 relative flex items-center box-border cursor-pointer"
                                style={styles.EventReviewVanTab}
                            >
                                <Text
                                    className="flex-row"
                                >
                                    <View
                                        className="flex-1 mr-6 relative block bg-red-700 -top-9"
                                        style={styles.EventReviewViewRollEvent}
                                    >
                                        <Image
                                            source={require('../../../../assets/activitybg.png')}
                                            className="block"
                                            style={styles.EventReviewViewRollBG}
                                        />
                                        {/* <Image
                                            source={require('../../../../assets/defaultbg.png')}
                                            className="w-16 h-16 opacity-100 left-0 right-0 bottom-0 top-0 m-auto absolute"
                                        /> */}
                                        <Image
                                            source={require('../../../../assets/SummertimeOdysseyActiveIcon.png')}
                                            className="block"
                                            style={styles.EventReviewViewRollImages}
                                        />
                                    </View>
                                    <View
                                        className="relative mr-6 block top-12"
                                        style={styles.EventReviewViewRollEvent}
                                    >
                                        <Image
                                            source={require('../../../../assets/defaultbg.png')}
                                            style={styles.EventReviewViewRollBG}
                                        />
                                        {/* <Image
                                            source={require('../../../../assets/defaultbg.png')}
                                            className="w-16 h-16 opacity-100 left-0 right-0 bottom-0 top-0 m-auto absolute"
                                        /> */}
                                        <Image
                                            source={require('../../../../assets/PerilousTrailActiveIcon.png')}
                                            style={styles.EventReviewViewRollImages}
                                        />
                                    </View>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <EventReviewAnimation />
        </View>
    );
};
export default EventReview;