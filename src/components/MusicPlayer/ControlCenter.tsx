import React from 'react';
import { Pressable, View } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ControlCenter = (): React.JSX.Element => {
    const playBackState = usePlaybackState();

    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const togglePlayBack = async (playback: State) => {
        const currentTrack = await TrackPlayer.getCurrentTrack();

        if(currentTrack !== null) {
            if(playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };

    return (
        <View>
            <Pressable onPress={skipToPrevious}>
                <Icon name="skip-previous" size={40} />
            </Pressable>
            <Pressable onPress={() => togglePlayBack(playBackState)}>
                <Icon name={playBackState === State.Playing ? 'pause' : 'play'} size={75} />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon name="skip-next" size={40} />
            </Pressable>
        </View>
    );
};

export default ControlCenter;
