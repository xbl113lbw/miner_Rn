import React, {Component} from 'react';
import {StyleSheet, Alert, Image, TouchableWithoutFeedback} from 'react-native';
import saveImg from '../../components/saveImg';

export default class shareImg extends Component {
    constructor(props) {
        super(props);

        this.saveImg = this.saveImg.bind(this);
    }

    saveImg() {
        Alert.alert(
            '',
            '确定保存图片到相册么？',
            [
                {
                    text: '确定', onPress: () => {
                        saveImg('../../img/share/shareImg.jpeg');
                    },
                },
                {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            {cancelable: false},
        );
    }

    render() {
        return (
            <TouchableWithoutFeedback style={styles.wrap} onLongPress={this.saveImg}>
                <Image source={require('../../img/share/shareImg.jpeg')} style={{width: '100%', height: '100%'}}/>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
    },
});
