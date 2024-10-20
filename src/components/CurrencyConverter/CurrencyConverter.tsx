import React, { useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { currencyByRupee } from './constants';
import CurrencyButton from './CurrencyButton';

const CurrencyConverter = (): JSX.Element => {
    const [inputValue, setInputValue] = useState('');
    const [resultValue, setResultValue] = useState('');
    const [targetCurrency, setTargetCurrency] = useState('');

    const buttonPressed = (targetValue: Currency) => {
        if(!inputValue){
            return Snackbar.show({
                text: 'Please enter a value to convert!',
                backgroundColor: '#EA7773',
                textColor: '#000000',
                duration: Snackbar.LENGTH_LONG,
            });
        }

        const inputAmount = parseFloat(inputValue);
        if(!isNaN(inputAmount)) {
            const convertedValue = inputAmount * targetValue.value;
            const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
            setResultValue(result);
            setTargetCurrency(targetValue.name);
        } else {
            return Snackbar.show({
                text: 'Not a valid number to convert!',
                backgroundColor: '#F4BE2C',
                textColor: '#000000',
                duration: Snackbar.LENGTH_LONG,
            });
        }
    };

    return (
        <SafeAreaView>
            <StatusBar />

            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.rupeesContainer}>
                        <Text style={styles.rupee}>Rs.</Text>
                        <TextInput
                            style={styles.inputText}
                            maxLength={14}
                            value={inputValue}
                            clearButtonMode="always"    // Only for IOS
                            onChangeText={setInputValue}
                            keyboardType="number-pad"
                            placeholder="Enter amount in Rupees"
                            placeholderTextColor="#aaaaaa"
                        />
                    </View>
                    {resultValue && (
                        <Text style={styles.resultText}>{resultValue}</Text>
                    )}
                </View>

                    <View style={styles.bottomContainer}>
                        <FlatList
                            numColumns={3}
                            data={currencyByRupee}
                            keyExtractor={item => item.name}
                            renderItem={({item}) => (
                                <Pressable
                                    style={[
                                        styles.button,
                                        targetCurrency === item.name && styles.selected
                                ]}
                                onPress={() => buttonPressed(item)}
                                >
                                    <CurrencyButton {...item} />
                                </Pressable>
                            )}
                        />
                    </View>
            </View>
        </SafeAreaView>
    );
};

export default CurrencyConverter;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',
    },
    topContainer: {},
    rupeesContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    rupee: {
        color: 'white',
        fontSize: 20,
    },
    inputText: {
        borderWidth: 1,
        borderColor: 'white',
        width: '70%',
        borderRadius: 10,
        paddingLeft: 10,
        color: 'white',
    },
    resultText: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '700',
    },
    bottomContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#cccccc',
        margin: 10,
        width: 100,
        padding: 5,
        borderRadius: 10,
        shadowColor: 'white',
        shadowRadius: 100,
        shadowOffset: {
            height: 10,
            width: 10,
        },
    },
    selected: {
        backgroundColor: 'lightgreen',
    },
});
