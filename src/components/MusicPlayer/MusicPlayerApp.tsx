import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar, View } from 'react-native';
import { addTrack, setupPlayer } from './musicPlayerService';
import MusicPlayer from './screens/MusicPlayer';

const MusicPlayerApp = (): React.JSX.Element => {
    const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);

    const setUp = async () => {
        let isSetUp = await setupPlayer();

        if(isSetUp) {
            await addTrack();
        }

        setIsPlayerReady(isSetUp);
    };

    useEffect(() => {
        setUp();
    }, []);

    if(!isPlayerReady) {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        );
    }

    return (
        <View>
            <StatusBar barStyle={'light-content'} />
            <MusicPlayer />
        </View>
    );
};

export default MusicPlayerApp;
