import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string
}>

const CurrencyButton = ({name, flag}: CurrencyButtonProps): JSX.Element => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{flag}</Text>
            <Text style={styles.country}>{name}</Text>
        </View>
    );
};

export default CurrencyButton;

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },
    flag: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 4,
    },
    country: {
        fontSize: 14,
        color: '#2D3436',
    },
});
