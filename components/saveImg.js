import {Platform} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

const RNFS = require('react-native-fs'); //文件处理

let saveImg = (saveImageUrl) => {
    console.log(saveImageUrl);
    const storeLocation = `${RNFS.DocumentDirectoryPath}`;
    let pathName = new Date().getTime() + '文件名.png';
    let downloadDest = `${storeLocation}/${pathName}`;
    const ret = RNFS.downloadFile({fromUrl: saveImageUrl, toFile: downloadDest});
    ret.promise.then(res => {
        console.log(res);
        if (res && res.statusCode === 200) {
            let promise = CameraRoll.saveToCameraRoll('file://' + downloadDest);
            promise.then(function (result) {
                console.log('图片已保存至相册');
            }).catch(function (error) {
                console.log('保存失败');
            });
        }
    });
};

export default saveImg;

