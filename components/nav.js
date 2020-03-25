import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../RootNavigation.js';
import backImg from '../img/backIcon.png';

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        showLeft: false,
        showRight: true,
    };

    render() {
        return (
            <View style={styles.header}>
                {/*左侧返回按钮*/}
                {
                    this.props.showLeft && <TouchableOpacity onPress={() => {
                        RootNavigation.goBack();
                    }} style={styles.left}>
                        <Image source={backImg} style={{width: 16, height: 16}}/>
                    </TouchableOpacity>
                }
                <Text style={styles.header_title}>{this.props.title}</Text>
                {/*右侧按钮*/}
                {
                    this.props.showRight &&
                    <Text onPress={() => {
                        this.props.rightEvent();
                    }} style={styles.rightText}>{this.props.rightText}</Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
    },
    header_title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    left: {
        position: 'absolute',
        left: 15,
    },
    rightText: {
        position: 'absolute',
        right: 15,
        fontSize: 14,
        color: '#000',
    },
});
