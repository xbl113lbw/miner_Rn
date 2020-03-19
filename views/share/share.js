import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, ImageBackground, Switch, TouchableOpacity} from 'react-native';

class ShareAndUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{marginLeft: 15, marginRight: 15}}>
                {/*海报*/}
                <TouchableOpacity style={[styles.shareAndUpBox, styles.boxShadow]}
                                  onPress={() => this.props.navigation.navigate('ShareImg')}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Image source={require('../../img/share/share_icon.png')} style={{width: 42, height: 42}}/>
                        <View style={{marginLeft: 13}}>
                            <Text style={{
                                color: '#4F5668',
                                fontSize: 14,
                                fontWeight: 'bold',
                                marginBottom: 9,
                            }}>每日分享分享专属海报</Text>
                            <Text style={{color: '#B9C4D3', fontSize: 10, fontWeight: 'bold'}}>每日完成分享可获得HT奖励</Text>
                        </View>
                    </View>
                    <Image source={require('../../img/right.png')} style={{width: 11, height: 11, marginRight: 10}}/>
                </TouchableOpacity>
                {/*上传图片*/}
                <TouchableOpacity style={[styles.shareAndUpBox, styles.boxShadow]}
                                  onPress={() => this.props.navigation.navigate('UploadImage')}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Image source={require('../../img/share/image_icon.png')} style={{width: 42, height: 42}}/>
                        <View style={{marginLeft: 13}}>
                            <Text style={{
                                color: '#4F5668',
                                fontSize: 14,
                                fontWeight: 'bold',
                                marginBottom: 9,
                            }}>上传图片</Text>
                            <Text style={{color: '#B9C4D3', fontSize: 10, fontWeight: 'bold'}}>上传朋友圈截图即可获得奖励</Text>
                        </View>
                    </View>
                    <Image source={require('../../img/right.png')} style={{width: 11, height: 11, marginRight: 10}}/>
                </TouchableOpacity>
                {/*规则*/}
                <View style={styles.rules}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../img/share/warn.png')} style={{width: 14, height: 12}}/>
                        <Text style={{marginLeft: 5, fontSize: 13, color: '#777777'}}>分享规则:</Text>
                    </View>
                    <Text style={{fontSize: 12, color: '#777777', marginBottom: 16, marginTop: 20}}>
                        1、每日截图海报分享至朋友圈。
                    </Text>
                    <Text style={{fontSize: 12, color: '#777777', marginBottom: 16}}>
                        2、分享至朋友圈24小时后上传图片审核通过即可获得HT奖励。
                    </Text>
                    <Text style={{fontSize: 12, color: '#777777'}}>
                        3、您的充币地址不会经常改变，可以重复充币；如有更改，我们会尽量通过网站公告或邮件通知您。
                    </Text>
                </View>
                <View style={styles.rules}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../img/share/warn.png')} style={{width: 14, height: 12}}/>
                        <Text style={{marginLeft: 5, fontSize: 13, color: '#777777'}}>奖励规则:</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 70,
                        marginTop: 20,
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{fontSize: 12, color: '#777777', marginBottom: 13}}>第一天：奖励2个HT</Text>
                        <Text style={{fontSize: 12, color: '#777777', marginBottom: 13}}>第二天：奖励3个HT</Text>
                        <Text style={{fontSize: 12, color: '#777777', marginBottom: 13}}>第三天：奖励5个HT</Text>
                        <Text style={{fontSize: 12, color: '#777777', marginBottom: 13}}>第四天：奖励5个HT</Text>
                        <Text style={{fontSize: 12, color: '#777777', marginBottom: 13}}>第五天：奖励5个HT</Text>
                        <Text style={{fontSize: 12, color: '#777777', marginBottom: 13}}>第六天：奖励5个HT</Text>
                        <Text style={{fontSize: 12, color: '#777777', marginBottom: 13}}>第七天：奖励5个HT</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchFlag: false,
        };
        this.switchChange = this.switchChange.bind(this);
    }

    switchChange() {
        this.setState({
            switchFlag: !this.state.switchFlag,
        });
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <Image source={require('../../img/user/bg.png')} style={styles.bg}/>
                <View style={styles.shareWrap}>
                    <View style={styles.shareWrap_line}>
                        <Text style={styles.days}>连续签到<Text style={{color: '#3CA167'}}>1</Text>天</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: '#4F5668', fontSize: 12, marginRight: 6}}>任务提醒</Text>
                            <Switch value={this.state.switchFlag} onValueChange={this.switchChange}/>
                        </View>
                    </View>
                    <View style={styles.shareImgWrap}>
                        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                            return <View style={{justifyContent: 'space-between', alignItems: 'center'}} key={index}>
                                <ImageBackground source={require('../../img/share/gold.png')}
                                                 style={{
                                                     width: 37,
                                                     height: 37,
                                                     marginBottom: 10,
                                                     justifyContent: 'flex-start',
                                                     alignItems: 'center',
                                                 }}>
                                    <Text style={{color: '#fff', fontSize: 9, paddingTop: 6}}>{item}XMI</Text>
                                </ImageBackground>
                                <Text style={{color: '#10914A', fontSize: 12}}>{item}天</Text>
                            </View>;
                        })}
                    </View>
                </View>
                {/*分享海报、上传按钮*/}
                <ShareAndUp navigation={this.props.navigation}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    boxShadow: {
        elevation: 1,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'rgba(226,226,226,0.4)',  //  阴影颜色
        shadowOffset: {width: 0, height: 0},  // 阴影偏移
        backgroundColor: '#fff',
    },
    bg: {
        width: '100%',
        height: 195,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    shareWrap: {
        margin: 15,
        marginTop: 100,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    shareWrap_line: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    days: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4F5668',
    },
    shareImgWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    shareAndUpBox: {
        flexDirection: 'row',
        padding: 20,
        marginBottom: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    rules: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 15,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#F9F9F9',
    },
});
