import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

/* 直推 */
class Direct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.info}>
                    <View style={styles.info_item}>
                        <Text style={[styles.info_item_num, styles.color_666]}>50</Text>
                        <Text style={styles.info_item_text}>直推人数</Text>
                    </View>
                    <View style={styles.info_item}>
                        <Text style={styles.info_item_num}>5000.012</Text>
                        <Text style={styles.info_item_text}>直推总收益</Text>
                    </View>
                    <View style={styles.info_item}>
                        <Text style={styles.info_item_num}>50G</Text>
                        <Text style={styles.info_item_text}>直推总算力</Text>
                    </View>
                </View>
                <FlatList
                    data={[1, 2, 3, 4]}
                    renderItem={({item}) => <View style={styles.lists}>
                        <View style={styles.lists_item}>
                            <View style={styles.lists_item_line}>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>账号：</Text>
                                    123****123
                                </Text>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>注册时间：</Text>
                                    2019-12-11
                                </Text>
                            </View>
                            <View style={styles.lists_item_line}>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>编号：</Text>
                                    34567
                                </Text>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>是否有效会员：</Text>
                                    否
                                </Text>
                            </View>
                            <View style={styles.lists_item_line}>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>算力：</Text>
                                    123G
                                </Text>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>直推人数：</Text>
                                    123
                                </Text>
                            </View>
                        </View>
                    </View>}/>
            </View>
        );
    }
}

/* 间推 */
class Indirect extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.info}>
                    <View style={styles.info_item}>
                        <Text style={[styles.info_item_num, styles.color_666]}>50</Text>
                        <Text style={styles.info_item_text}>间推人数</Text>
                    </View>
                    <View style={styles.info_item}>
                        <Text style={styles.info_item_num}>5000.012</Text>
                        <Text style={styles.info_item_text}>间推总收益</Text>
                    </View>
                    <View style={styles.info_item}>
                        <Text style={styles.info_item_num}>50G</Text>
                        <Text style={styles.info_item_text}>间推总算力</Text>
                    </View>
                </View>
                <FlatList
                    data={[1, 2, 3, 4]}
                    renderItem={({item}) => <View style={styles.lists}>
                        <View style={styles.lists_item}>
                            <View style={styles.lists_item_line}>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>账号：</Text>
                                    123****123
                                </Text>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>注册时间：</Text>
                                    2019-12-11
                                </Text>
                            </View>
                            <View style={styles.lists_item_line}>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>编号：</Text>
                                    34567
                                </Text>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>是否有效会员：</Text>
                                    否
                                </Text>
                            </View>
                            <View style={styles.lists_item_line}>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>算力：</Text>
                                    123G
                                </Text>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>直推人数：</Text>
                                    123
                                </Text>
                            </View>
                        </View>
                    </View>}/>
            </View>
        );
    }
}

/* 团队 */
class TeamCom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.info}>
                    <View style={styles.info_item}>
                        <Text style={[styles.info_item_num, styles.color_666]}>50</Text>
                        <Text style={styles.info_item_text}>团队人数</Text>
                    </View>
                    <View style={styles.info_item}>
                        <Text style={styles.info_item_num}>5000.012</Text>
                        <Text style={styles.info_item_text}>团队总收益</Text>
                    </View>
                    <View style={styles.info_item}>
                        <Text style={styles.info_item_num}>50G</Text>
                        <Text style={styles.info_item_text}>团队总算力</Text>
                    </View>
                    <View style={styles.info_item}>
                        <Text style={styles.info_item_num}>4</Text>
                        <Text style={styles.info_item_text}>团队等级</Text>
                    </View>
                </View>
                <FlatList
                    data={[1, 2, 3, 4]}
                    renderItem={({item}) => <View style={styles.lists}>
                        <View style={styles.lists_item}>
                            <View style={styles.lists_item_line}>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>账号：</Text>
                                    123****123
                                </Text>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>注册时间：</Text>
                                    2019-12-11
                                </Text>
                            </View>
                            <View style={styles.lists_item_line}>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>编号：</Text>
                                    34567
                                </Text>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>是否有效会员：</Text>
                                    否
                                </Text>
                            </View>
                            <View style={styles.lists_item_line}>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>算力：</Text>
                                    123G
                                </Text>
                                <Text style={styles.lists_item_line_content}>
                                    <Text style={styles.lists_item_line_title}>直推人数：</Text>
                                    123
                                </Text>
                            </View>
                        </View>
                    </View>}/>
            </View>
        );
    }
}

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navIndex: 0,
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.nav}>
                    <Text style={[styles.nav_item, this.state.navIndex === 0 ? styles.active_nav : '']}
                          onPress={() => this.setState({navIndex: 0})}>直推</Text>
                    <Text style={[styles.nav_item, this.state.navIndex === 1 ? styles.active_nav : '']}
                          onPress={() => this.setState({navIndex: 1})}>间推</Text>
                    <Text style={[styles.nav_item, this.state.navIndex === 2 ? styles.active_nav : '']}
                          onPress={() => this.setState({navIndex: 2})}>团队</Text>
                </View>
                {
                    this.state.navIndex === 0 && <Direct/>
                }
                {
                    this.state.navIndex === 1 && <Indirect/>
                }
                {
                    this.state.navIndex === 2 && <TeamCom/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    color_666: {
        color: '#666666',
    },
    nav: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    nav_item: {
        marginBottom: 13,
        paddingBottom: 6,
        fontSize: 16,
        color: '#777777',
        borderBottomWidth: 3,
        borderBottomColor: '#fff',
    },
    active_nav: {
        color: '#333333',
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderBottomColor: '#1FC26D',
    },
    info: {
        marginBottom: 15,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        elevation: 1,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'rgba(226,226,226,0.4)',  //  阴影颜色
        shadowOffset: {width: 0, height: 0},  // 阴影偏移
        backgroundColor: '#fff',
    },
    info_item: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    info_item_num: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#2EC779',
    },
    info_item_text: {
        fontSize: 11,
        color: '#999999',
    },
    lists: {
        marginLeft: 15,
        marginRight: 15,
    },
    lists_item: {
        height: 116,
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingTop: 24,
        paddingBottom: 24,
        paddingRight: 26,
        paddingLeft: 26,
        borderRadius: 10,
        elevation: 1,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'rgba(226,226,226,0.4)',  //  阴影颜色
        shadowOffset: {width: 0, height: 0},  // 阴影偏移
        backgroundColor: '#fff',
    },
    lists_item_line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lists_item_line_content: {
        flex: 1,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#999999',
    },
    lists_item_line_title: {
        fontWeight: 'bold',
        color: '#3E3E3E',
    },
});
