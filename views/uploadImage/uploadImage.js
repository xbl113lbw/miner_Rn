import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import defaultImg from '../../img/upload/image_btn.png';
import {Toast} from 'teaset';
import Qs from 'qs';
import * as RootNavigation from '../../RootNavigation';

export default class shareImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            response: null,
        };

        this.chooseImg = this.chooseImg.bind(this);
        this.uploadEvent = this.uploadEvent.bind(this);
    }

    chooseImg() {
        console.log(111);
        ImagePicker.launchImageLibrary({}, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = {uri: response.uri};
                console.log('response', response);
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source,
                    response: response,
                });
            }
        });
    }

    uploadEvent() {
        if (!this.state.response) {
            Toast.message('请选择图片');
            return;
        }
        let data = new FormData();
        let file = {uri: this.state.avatarSource, type: 'multipart/form-data', name: 'image.png'};
        data.append('file_path', 'upload/sign/');
        data.append('file_upload', this.state.response);
        fetch(global.baseUrl + 'appapi/Uploade/uploadFile', {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: data,
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                Toast.message(data.msg);
            })
            .catch((error) => {
                console.error('error', error);
            });
    }

    render() {
        return (
            <View style={styles.wrap}>
                <TouchableOpacity style={[styles.upBox, styles.boxShadow]} onPress={this.chooseImg}>
                    <Image source={this.state.avatarSource ? this.state.avatarSource : defaultImg}
                           style={{width: 108, height: 94}}/>
                    <Text style={styles.upBox_text}>请点击上传图片</Text>
                </TouchableOpacity>
                <Button
                    title="确认上传"
                    color="#1FC26D"
                    onPress={this.uploadEvent}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boxShadow: {
        elevation: 2,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'rgba(226,226,226,0.4)',  //  阴影颜色
        shadowOffset: {width: 1, height: 0},  // 阴影偏移
        backgroundColor: '#fff',
    },
    wrap: {
        flex: 1,
        padding: 40,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: '#fff',
    },
    upBox: {
        marginBottom: 40,
        paddingTop: 47,
        paddingBottom: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    upBox_text: {
        marginTop: 24,
        color: '#10914A',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
