import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native'; //view as a div 
import { Stack, useRouter } from 'expo router';

import { COLORS, icons, images, SIZES } from '../constants';
import { 
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome 
} from '../components';

const Home = () => {
    //define router
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
            options={{
                headersStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => {
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                },
                headerRight: () => {
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                },
                headerTitle: ""
            }} 
            />
        <ScrollView showsVerticalScrollIndicator={false}>
            <view
                style={{
                    flex:1,
                    padding: SIZES.medium
                }}
            >
                <Welcome
                
                />
                <Popularjobs />
                <Nearbyjobs />
            </view>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Home;