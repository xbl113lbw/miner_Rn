import {Platform, CameraRoll} from 'react-native';
import RNFS from 'react-native-fs';

/**
 * 下载网页图片
 * @param uri  图片地址
 * @returns {*}
 */
const DownloadImage = (uri) => {
    if (!uri) {
        return null;
    }
    console.log(111);
    return new Promise((resolve, reject) => {
        let timestamp = (new Date()).getTime();//获取当前时间错
        let random = String(((Math.random() * 1000000) | 0));//六位随机数
        let dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath; //外部文件，共享目录的绝对路径（仅限android）
        const downloadDest = `${dirs}/${timestamp + random}.jpg`;
        const formUrl = uri;
        const options = {
            fromUrl: formUrl,
            toFile: downloadDest,
            background: true,
            begin: (res) => {
                // console.log('begin', res);
                // console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
            },
        };
        try {
            console.log('success');
            const ret = RNFS.downloadFile(options);
            ret.promise.then(res => {
                // console.log('success', res);
                // console.log('file://' + downloadDest)
                let promise = CameraRoll.saveToCameraRoll(downloadDest);
                promise.then(function (result) {
                    console.log('success', '成功');
                    // alert('保存成功！地址如下：\n' + result);
                }).catch(function (error) {
                    console.log('error', error);
                    // alert('保存失败！\n' + error);
                });
                resolve(res);
            }).catch(err => {
                reject(new Error(err));
            });
        } catch (e) {
            reject(new Error(e));
        }
    });
};
export default DownloadImage;

