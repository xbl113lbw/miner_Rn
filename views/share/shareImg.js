import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class shareImg extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrap}>
                <Image source={require('../../img/share/shareImg.jpeg')} style={{width: '100%', height: '100%'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
    },
});
