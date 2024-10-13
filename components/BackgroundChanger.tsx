import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BackgroundChanger = (): React.JSX.Element => {
    const [color, setColor] = useState<string>('#ffffff');

    const generateColor = () => {
        const hexRange = '0123456789';
        let color = '#';

        for(let i = 0; i < 6; i++) {
            color += hexRange[Math.floor(Math.random() * 16)];
        }

        setColor(color);
    };

    return (
        <View>
            <StatusBar backgroundColor={color} />
            <View style={[styles.container, {backgroundColor: color}]}>
                <TouchableOpacity onPress={generateColor}>
                    <View style={styles.actionBtn}>
                        <Text style={styles.actionBtnText}>Press Me</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BackgroundChanger;

const styles = StyleSheet.create({
    container: {},
    actionBtn: {},
    actionBtnText: {},
});
