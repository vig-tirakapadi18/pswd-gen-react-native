import React, { PropsWithChildren } from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';

type Dice = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: Dice): JSX.Element => {
    return (
        <View>
            <Image source={imageUrl} />
        </View>
    );
};

export default Dice;
