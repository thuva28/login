import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginButton from './LoginButton';

class ButtonsContainer extends React.Component {
    render() {
        const { handleButtonPress } = this.props;
        const { handleCancelPress } = this.props;


        return (
            <View style={styles.container}>


                <View style={styles.row}>
                    <LoginButton operator={'1'} handleButtonPress={handleButtonPress} />
                    <LoginButton operator={'2'} handleButtonPress={handleButtonPress} />
                    <LoginButton operator={'3'} handleButtonPress={handleButtonPress} />
                </View>

                <View style={styles.row}>
                    <LoginButton operator={'4'} handleButtonPress={handleButtonPress} />
                    <LoginButton operator={'5'} handleButtonPress={handleButtonPress} />
                    <LoginButton operator={'6'} handleButtonPress={handleButtonPress} />
                </View>

                <View style={styles.row}>
                    <LoginButton operator={'7'} handleButtonPress={handleButtonPress} />
                    <LoginButton operator={'8'} handleButtonPress={handleButtonPress} />
                    <LoginButton operator={'9'} handleButtonPress={handleButtonPress} />
                </View>

                <View style={styles.row}>
                    <LoginButton operator={' '} handleButtonPress={handleButtonPress} />
                    <LoginButton operator={'0'} handleButtonPress={handleButtonPress} />
                    <LoginButton operator={'X'} handleButtonPress={handleCancelPress} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    row: {
        flex: 1,
        flexDirection: 'row',
    },
});

export default ButtonsContainer;