import React from 'react';
import { ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import Dice from './Dice';
import { useState } from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../../assets/One.png';
import DiceTwo from '../../assets/Two.png';
import DiceThree from '../../assets/Three.png';
import DiceFour from '../../assets/Four.png';
import DiceFive from '../../assets/Five.png';
import DiceSix from '../../assets/Six.png';

const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

const RollTheDice = (): React.JSX.Element => {
    const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

    const rollDiceOnTap = () => {
        const diceNumber = Math.floor(Math.random() * 6) + 1;
        switch (diceNumber) {
            case 1:
                setDiceImage(DiceOne);
                break;
            case 2:
                setDiceImage(DiceTwo);
                break;
            case 3:
                setDiceImage(DiceThree);
                break;
            case 4:
                setDiceImage(DiceFour);
                break;
            case 5:
                setDiceImage(DiceFive);
                break;
            case 6:
                setDiceImage(DiceSix);
                break;
            default:
                setDiceImage(DiceOne);
                break;
        }
        ReactNativeHapticFeedback.trigger('impactLight', options);
    };

    return (
        <View style={styles.container}>
            <Dice imageUrl={diceImage} />
            <Pressable onPress={rollDiceOnTap}>
                <Text style={styles.rollDiceBtnText}>Roll the DICE</Text>
            </Pressable>
        </View>
    );
};

export default RollTheDice;

const styles = StyleSheet.create({
    textWhite: {
        color: 'white',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 250,
    },
    diceContainer: {
        margin: 12,
    },
    diceImage: {
        width: 200,
        height: 200,
    },
    rollDiceBtnText: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#E5E0FF',
        fontSize: 16,
        color: '#8EA7E9',
        fontWeight: '700',
        textTransform: 'uppercase',
    },
});
