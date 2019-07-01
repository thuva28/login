import React from 'react';
import { LinearGradient } from 'expo';
import { StyleSheet, StatusBar } from 'react-native';
import Home from './Home';
import ButtonsContainer from './ButtonsContainer';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            first: '6',
            second: '6',
            third: '7',
            fourth: '7',
        };

        this.refresh = this.refresh.bind(this);
        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.getResult = this.getResult.bind(this);
    }

    getResult() {
        const { first, second, third, fourth } = this.state;
        let result = 0;
        this.setState({
            result,
            isResult: true,
        });
    }

    refresh() {
        this.setState({
            first: '6',
            second: '6',
            third: '7',
            fourth: '7',
        });
    }


    handleButtonPress(Button) {

        let { first, second, third, fourth } = this.state;
    }

    render() {
        const { first, second, third, fourth } = this.state;
        return (
            <LinearGradient
                colors={['#3498db', '#8e44ad']}
                style={styles.container}
            >
                <Home
                    first={first}
                    second={second}
                    third={third}
                    fourth={fourth}
                />
                <ButtonsContainer
                    handleButtonPress={this.handleButtonPress}
                />
                <StatusBar barStyle="light-content" />
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
});

export default Login;