import { Formik } from 'formik';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(4, 'Should have atleast 4 characters!')
        .max(16, 'Should have atleast 16 characters!')
        .required('Password is required!'),
});

const PasswordGenerator = (): React.JSX.Element => {
    const [password, setPassword] = useState<string>('');
    const [isPswdGenerated, setIsPswdGenerated] = useState<boolean>(false);
    const [lowercase, setLowercase] = useState<boolean>(true);
    const [uppercase, setUppercase] = useState<boolean>(false);
    const [numbers, setNumbers] = useState<boolean>(false);
    const [symbols, setSymbols] = useState<boolean>(false);

    const generatePassword = (pswdLen: number) => {
        let charsList = '';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const digitChars = '0123456789';
        const specialChars = '!@#$%^&*()_+{}[]';

        if(uppercase) { charsList += uppercaseChars; }
        if(lowercase) { charsList += lowercaseChars; }
        if(numbers) { charsList += digitChars; }
        if(symbols) { charsList += specialChars; }

        const pswdResult = createPassword(charsList, pswdLen);

        setPassword(pswdResult);
        setIsPswdGenerated(true);
    };

    const createPassword = (chars: string, pswdLen: number) => {
        let result = '';

        for(let i = 0; i < pswdLen; i++) {
            const charIdx = Math.round(Math.random() * chars.length);

            result += chars.charAt(charIdx);
        }

        return result;
    };

    const resetPassword = () => {
        setPassword('');
        setIsPswdGenerated(false);
        setLowercase(true);
        setUppercase(false);
        setNumbers(false);
        setSymbols(false);
    };

    return (
        <ScrollView style={styles.mainBG} keyboardShouldPersistTaps="handled">
            <SafeAreaView style={styles.appContainer}>
                <View style={styles.formContainer}>
                    <Text style={[styles.title, styles.textCenter, styles.textBig, styles.fontBold, styles.textWhite]}>Password Generator</Text>
                    <Formik
                        initialValues={{passwordLength : ''}}
                        validationSchema={PasswordSchema}
                        onSubmit={values => {
                            generatePassword(+values.passwordLength);
                        }}
                    >{({
                        values, errors, touched, isValid, handleChange, handleSubmit, handleReset,
                    }) => (
                        <>
                            <View style={[styles.inputWrapper, styles.inlineMargin]}>
                                <View style={styles.inputColumn}>
                                    <Text style={[styles.textMedium, styles.textWhite]}>Password Length</Text>
                                    {touched.passwordLength && errors.passwordLength &&
                                        <Text style={styles.errorText}>{errors.passwordLength}</Text>
                                    }
                                </View>

                                <TextInput
                                    style={[styles.inputStyle, styles.textWhite]}
                                    value={values.passwordLength}
                                    onChangeText={handleChange}
                                    placeholder="Ex. 8"
                                    placeholderTextColor={'#aaa'}
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={[styles.inputWrapper, styles.blockMargin]}>
                                <Text style={[styles.textMedium, styles.textWhite, styles.inlineMargin]}>Include Lowercase</Text>
                                <View>
                                    <BouncyCheckbox
                                        isChecked={lowercase}
                                        onPress={() => setLowercase(!lowercase)}
                                        fillColor="#6366f1"
                                    />
                                </View>
                            </View>
                            <View style={[styles.inputWrapper, styles.blockMargin]}>
                                <Text style={[styles.textMedium, styles.textWhite, styles.inlineMargin]}>Include Uppercase</Text>
                                <View>
                                    <BouncyCheckbox
                                        isChecked={uppercase}
                                        onPress={() => setUppercase(!uppercase)}
                                        fillColor="#22c55e"
                                    />
                                </View>
                            </View>
                            <View style={[styles.inputWrapper, styles.blockMargin]}>
                                <Text style={[styles.textMedium, styles.textWhite, styles.inlineMargin]}>Include Numbers</Text>
                                <View>
                                    <BouncyCheckbox
                                        isChecked={numbers}
                                        onPress={() => setNumbers(!numbers)}
                                        fillColor="#f97316"
                                    />
                                </View>
                            </View>
                            <View style={[styles.inputWrapper, styles.blockMargin]}>
                                <Text style={[styles.textMedium, styles.textWhite, styles.inlineMargin]}>Include Symbols</Text>
                                <View>
                                    <BouncyCheckbox
                                        isChecked={symbols}
                                        onPress={() => setSymbols(!symbols)}
                                        fillColor="#e11d48"
                                    />
                                </View>
                            </View>

                            <View style={[styles.formActions, styles.blockMargin, styles.inlineMargin]}>
                                <TouchableOpacity disabled={!isValid} style={[styles.btn, styles.successBtn]} onPress={() => handleSubmit()}>
                                    <Text style={[styles.textWhite, styles.textCenter]}>Generate Password</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btn, styles.dangerBtn]} onPress={() => {
                                    handleReset();
                                    resetPassword();
                                }}>
                                    <Text style={[styles.textWhite, styles.textCenter]}>Reset</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}</Formik>
                </View>

                { isPswdGenerated ? (
                    <View>
                        <Text>Long press to copy</Text>
                        <Text
                            selectable={true}
                            style={[styles.password, styles.textBig, styles.fontBold, styles.textCenter, styles.blockMargin]}
                        >
                            {password}
                        </Text>
                    </View>
                ) : null }

            </SafeAreaView>
        </ScrollView>
    );
};

export default PasswordGenerator;

const styles = StyleSheet.create({
    mainBG: {
        flex: 1,
        backgroundColor: '#1c1917',
    },
    appContainer: {},
    formContainer: {},
    title: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#e11d48',
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputStyle: {
        width: 150,
        borderColor: '#e11d48',
        borderWidth: 2,
        padding: 5,
        borderRadius: 5,
        paddingLeft: 15,
    },
    inputColumn: {},
    errorText: {},
    textWhite: { color: 'white' },
    textCenter: { textAlign: 'center' },
    textBig: { fontSize: 20 },
    textMedium: { fontSize: 16 },
    inlineMargin: {
        marginLeft: 10,
        marginRight: 10,
    },
    blockMargin: {
        marginTop: 10,
        marginBottom: 10,
    },
    fontBold: { fontWeight: '700' },
    btn: {
        padding: 5,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        width: '47.5%',
    },
    successBtn: {
        backgroundColor: '#16a34a',
    },
    dangerBtn: {
        backgroundColor: '#dc2626',
    },
    password: {
        color: '#e11d48',
        letterSpacing: 3,
    },
});

