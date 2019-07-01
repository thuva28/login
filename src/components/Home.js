import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Home extends React.Component {
    render() {
        const { first, second, third, fourth } = this.props;
        const input = `${first} ${second} ${third} ${fourth} `;

        return (
            <View>
                <View style={styles.resultContainer}>
                    <Text style={styles.result}>
                        {result}
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={refresh}>
                        <Text style={styles.delete} >
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.input}>
                        {first === ' ' && !operator ? 'Enter your pin' : input}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    resultContainer: {
        alignItems: 'flex-end',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginTop: 25,
        paddingVertical: 25,
        paddingRight: 10,
        margin: 1,
    },

    result: {
        color: '#fff',
        fontSize: 42,
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },


});

export default Home;
