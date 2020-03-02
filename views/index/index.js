import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Carousel} from 'teaset';

/* 轮播组件 */
class Swiper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Carousel style={styles.swiper} control={true}>
                <Image style={{width: '100%', height: 133}} resizeMode='cover'
                       source={require('../../img/teaset1.png')}/>
                <Image style={{width: '100%', height: 133}} resizeMode='cover'
                       source={require('../../img/teaset1.png')}/>
                <Image style={{width: '100%', height: 133}} resizeMode='cover'
                       source={require('../../img/teaset1.png')}/>
            </Carousel>
        );
    }
}

/* 公告 */
class Announcement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.announcement}>
                <Image style={{width: 15, height: 15, marginRight: 6}}
                       source={require('../../img/index/announcementIcon.png')}/>
                <Text ellipsizeMode="tail"
                      numberOfLines={1}>分享HT，立享用户入金百分之10返佣的公告---SUTER开...</Text>
            </View>
        );
    }
}

/* 首页导航 */
class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.navWrap}>
                <View style={styles.navWrap_item}>
                    <Image style={{width: 54, height: 76}}
                           source={require('../../img/index/cb.png')}/>
                    <Text style={styles.navWrap_item_text}>充币</Text>
                </View>
                <View style={styles.navWrap_item}>
                    <Image style={{width: 54, height: 76}}
                           source={require('../../img/index/tb.png')}/>
                    <Text style={styles.navWrap_item_text}>提币</Text>
                </View>
                <View style={styles.navWrap_item}>
                    <Image style={{width: 54, height: 76}}
                           source={require('../../img/index/yq.png')}/>
                    <Text style={styles.navWrap_item_text}>邀请好友</Text>
                </View>
                <View style={styles.navWrap_item}>
                    <Image style={{width: 54, height: 76}}
                           source={require('../../img/index/kj.png')}/>
                    <Text style={styles.navWrap_item_text}>我的矿机</Text>
                </View>
            </View>
        );
    }
}

class Mill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.millWrap}>
                <Text style={styles.millWrap_title}>矿机</Text>
                {/*矿机列表*/}
                <View style={styles.millWrap_list}>
                    <View style={{marginLeft: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                        {/*左侧图片*/}
                        <Image style={{width: 75, height: 82}} source={require('../../img/index/smaller_mill.png')}/>
                        {/*右侧内容*/}
                        <View style={{paddingTop: 6, flexDirection: 'row'}}>
                            {/*内容区*/}
                            <View style={styles.list_center}>
                                <Text style={styles.list_center_title}>微型矿机30天</Text>
                                <View style={styles.list_center_num}>
                                    <View style={styles.list_center_num_list}>
                                        <Text style={[styles.list_center_num_list_topNum, styles.red_font]}>15</Text>
                                        <Text style={styles.list_center_num_list_bottom_text}>总产量</Text>
                                    </View>
                                    <View style={styles.list_center_num_list}>
                                        <Text style={styles.list_center_num_list_topNum}>10</Text>
                                        <Text style={styles.list_center_num_list_bottom_text}>租金</Text>
                                    </View>
                                    <View style={styles.list_center_num_list}>
                                        <Text style={styles.list_center_num_list_topNum}>1</Text>
                                        <Text style={styles.list_center_num_list_bottom_text}>算力</Text>
                                    </View>
                                </View>
                            </View>
                            {/*按钮区*/}
                            <View style={styles.list_right}>
                                <View style={{marginBottom: 12}}>
                                    <Text style={styles.list_right_title}>限租3台</Text>
                                    <Image style={styles.list_right_title_bg}
                                           source={require('../../img/index/text_line.png')}/>
                                </View>
                                <View style={styles.pay_btn}>
                                    <Text style={{color: '#fff'}}>租用</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default class Home extends Component {
    render() {
        return (
            <View style={{minHeight: '100%', flex: 1}}>
                {/*顶部背景*/}
                <Image style={styles.indexBg} source={require('../../img/index/indexBg.png')}/>
                {/*头部*/}
                <View style={styles.headerBox}>
                    <Image style={{width: 90, height: 18}} source={require('../../img/index/logo.png')}/>
                    <View style={styles.header_share}>
                        <Image style={{width: 14, height: 14, marginRight: 6}}
                               source={require('../../img/index/shareIcon.png')}/>
                        <Text>分享</Text>
                    </View>
                </View>
                {/*轮播*/}
                <Swiper/>
                {/*公告*/}
                <Announcement/>
                {/*首页导航*/}
                <Nav/>
                {/*买币教程图片*/}
                <View style={{alignItems: 'center', marginBottom: 25, paddingLeft: 16, paddingRight: 16}}>
                    <Image style={{width: '100%', height: 69}}
                           source={require('../../img/index/jc_bg.png')}/>
                </View>
                {/*矿机*/}
                <Mill/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    red_font: {
        color: '#DF5334',
    },
    indexBg: {
        position: 'absolute',
        top: 0,
        height: 194,
        width: '100%',
    },
    headerBox: {
        height: 26,
        marginTop: 40,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_share: {
        position: 'absolute',
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 61,
        height: 26,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        backgroundColor: '#fff',
    },
    swiper: {
        height: 133,
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        marginBottom: 24,
    },
    announcement: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 11,
        fontSize: 12,
        color: '#666',
        overflow: 'hidden',
    },
    navWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 23,
        paddingRight: 23,
        marginBottom: 16,
    },
    navWrap_item: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    navWrap_item_text: {
        fontSize: 12,
        color: '#333',
    },
    millWrap: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    millWrap_title: {
        marginRight: 4,
        marginBottom: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    millWrap_list: {},
    list_center: {},
    list_center_title: {
        marginBottom: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4F5668',
    },
    list_center_num: {
        flexDirection: 'row',
    },
    list_center_num_list: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 25,
    },
    list_center_num_list_topNum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4F5668',
    },
    list_center_num_list_bottom_text: {
        fontSize: 11,
        color: '#B9C4D3',
    },
    list_right: {
        alignItems: 'center',
    },
    list_right_title: {
        fontSize: 11,
        color: '#10914A',
    },
    list_right_title_bg: {
        width: 45,
        height: 7,
        position: 'absolute',
        bottom: 0,
    },
    pay_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 59,
        height: 25,
        borderRadius: 13,
        backgroundColor: '#0EC15E',
        fontSize: 13,
        fontWeight: 'bold',
    },
});
