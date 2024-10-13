import React from 'react';

// import PasswordGenerator from './components/PasswordGenerator';
import BackgroundChanger from './components/BackgroundChanger';
import { ScrollView, StyleSheet } from 'react-native';

const App = (): React.JSX.Element => {
    return (
        <ScrollView style={styles.mainBG} keyboardShouldPersistTaps="handled">
           {/* <PasswordGenerator /> */}
           <BackgroundChanger />
        </ScrollView>
    );
};

export default App;

const styles = StyleSheet.create({
    mainBG: {
        flex: 1,
        backgroundColor: '#1c1917',
    },
});
