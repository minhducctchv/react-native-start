import {StyleSheet, Text} from 'react-native';
import React, {Component} from 'react'
import BasicSectionList from "./1_basic/1_react_basic/BasicSectionList";

export default function App() {
    return (
        <BasicSectionList/>
    );
}

class CatClass extends Component {
    render() {
        return <Text>Xin chào tôi là Cat Class</Text>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
