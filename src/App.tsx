import React from 'react';

// import PasswordGenerator from './components/PasswordGenerator';
import { ScrollView, StyleSheet } from 'react-native';
import RollTheDice from './components/Dice/RollTheDice';


const App = (): React.JSX.Element => {

    return (
        <ScrollView style={styles.mainBG} keyboardShouldPersistTaps="handled">
           {/* <PasswordGenerator /> */}
           <RollTheDice />
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
