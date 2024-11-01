import React, { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { Track } from 'react-native-track-player';

type SongInfoProps = PropsWithChildren<{
    track: Track | null | undefined
}>

const SongInfo = ({track}: SongInfoProps): React.JSX.Element => {
    return (
        <View>
            <View>
                <Text>{track?.title}</Text>
                <Text>{track?.artist} - {track?.album}</Text>
            </View>
        </View>
    );
};

export default SongInfo;
