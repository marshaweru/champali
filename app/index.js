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
            }} 
            />
        </SafeAreaView>
    )
}

export default Home;