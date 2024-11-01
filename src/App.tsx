import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MusicPlayerApp from './components/MusicPlayer/MusicPlayerApp';
// import TicTacToe from './components/TicTacToe/TicTacToe';

// import RollTheDice from './components/Dice/RollTheDice';
// import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
// import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';


const App = (): React.JSX.Element => {

    return (
        <ScrollView style={styles.mainBG} keyboardShouldPersistTaps="handled">
           {/* <PasswordGenerator /> */}
           {/* <RollTheDice /> */}
           {/* <CurrencyConverter /> */}
           {/* <TicTacToe /> */}
           <MusicPlayerApp />
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
