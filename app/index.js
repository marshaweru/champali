import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native'; //view as a div text as a p tag
import { Stack, useRouter } from 'expo router';

import { COLORS, icons, images, SIZES } from '../constants';
import { 
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome 
} from '../components';

const Home = () => {
    //define router
    const router = useRouter();

    return (
        <SafeAreaView>
            <Text>Home</Text>
        </SafeAreaView>
    )
}

export default Home;