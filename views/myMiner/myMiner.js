import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList, Alert} from 'react-native';
import Toast from 'teaset';
import Nav from '../../components/nav';

class Lists extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {good_list} = this.props;
        return (
            good_list.length > 0 &&
            <FlatList
                data={good_list}
                renderItem={({item}) => <View style={styles.lists}>
                    <Image source={require('../../img/miner.png')} style={{width: 75, height: 82}}/>
                    <View style={styles.lists_right}>
                        <View style={styles.lists_right_line}>
                            <Text style={styles.lists_right_line_l}>矿机类型：</Text>
                            <Text style={styles.lists_right_line_r}>{item.good_name}</Text>
                        </View>
                        <View style={styles.lists_right_line}>
                            <Text style={styles.lists_right_line_l}>矿机已产币：</Text>
                            <Text style={styles.lists_right_line_r}>{item.get_num}</Text>
                        </View>
                        <View style={styles.lists_right_line}>
                            <Text style={styles.lists_right_line_l}>是否有效：</Text>
                            <Text style={styles.lists_right_line_r}>{item.status === 1 ? '有效' : '无效'}</Text>
                        </View>
                        <View style={styles.lists_right_line}>
                            <Text style={styles.lists_right_line_l}>购买日期：</Text>
                            <Text style={styles.lists_right_line_r}>{item.add_time}</Text>
                        </View>
                    </View>
                </View>}/>
        );
    }
}

export default class myMiner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            good_list: [],
            useful_good: '',
            unuseful_good: '',
            cash_num: '',
        };

        this.onRecive = this.onRecive.bind(this);
        this.getData = this.getData.bind(this);
    }

    /*传递至头部事件*/
    onRecive() {
        if (!this.state.useful_good) {
            Toast.fail('暂不可领取');
            return;
        }
        Alert.alert(
            '领取',
            `矿机已产币： ${this.state.cash_num}`,
            [
                {
                    text: '一键领取',
                    onPress: () => {
                        global.Ajax('appapi/Miner/getMinerCoin', {}).then((res) => {
                            if (res.code === 1) {
                                Toast.success('领取成功');
                                this.getData();
                            }
                        });
                    },
                },
            ],
            {cancelable: true},
        );
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getData();
        });
    }

    getData() {
        global.Ajax('appapi/Miner/myGoods', {status: 0}).then((res) => {
            if (res.code === 1) {
                console.log(res);
                this.setState({
                    good_list: res.data.good_list.data,
                    useful_good: res.data.useful_good,
                    unuseful_good: res.data.unuseful_good,
                    cash_num: res.data.cash_num,
                });
            }
        });
    }

    render() {
        return (
            <View style={{backgroundColor: '#fff', flex: 1}}>
                {/*头部导航*/}
                <Nav title={'我的矿机'} rightText={'一键领取'} rightEvent={this.onRecive} showLeft={true}/>
                {/*矿机数*/}
                <View style={[styles.minerInfo, styles.boxShadow]}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#0EC15E'}}>
                            {this.state.useful_good}
                        </Text>
                        <Text style={{fontSize: 11, color: '#AEBACB', marginTop: 11}}>有效矿机数</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#DF5334'}}>
                            {this.state.unuseful_good}
                        </Text>
                        <Text style={{fontSize: 11, color: '#AEBACB', marginTop: 11}}>无效矿机数</Text>
                    </View>
                </View>
                {/*列表*/}
                <Lists good_list={this.state.good_list}/>
            </View>
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
    minerInfo: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 10,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    lists: {
        marginLeft: 34,
        marginRight: 45,
        marginBottom: 25,
        flexDirection: 'row',
    },
    lists_right: {
        flex: 1,
        marginLeft: 35,
    },
    lists_right_line: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
    lists_right_line_l: {
        flex: 1,
        fontSize: 12,
        color: '#AEBACB',
    },
    lists_right_line_r: {
        flex: 1.5,
        marginLeft: 27,
        fontSize: 12,
        color: '#4F5668',
        fontWeight: 'bold',
    },
});
